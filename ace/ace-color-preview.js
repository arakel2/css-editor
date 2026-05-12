/**
 * ace-color-preview.js
 * ====================
 * Inline color preview for the ACE editor (CSS mode).
 *
 * Renders color swatches or colored underlines next to CSS color values
 * (HEX, RGB, RGBA, HSL, HSLA, named colors) using ACE's dynamic marker API.
 *
 * Supported styles:
 *   - "swatch"    : colored square before the color value
 *   - "underline" : colored line below the color value
 *
 * Usage:
 *   const editor = ace.edit("editor");
 *   editor.session.setMode("ace/mode/css");
 *   installColorPreviews(editor, { style: "swatch" });
 *
 * Requires: ACE editor (https://ace.c9.io)
 *
 * Part of css-editor – https://github.com/arakel2/css-editor
 *
 * @license MIT
 * @version 1.0.0
 * @author  Andreas Keller (arakel2)
 */

function installColorPreviews(editor, opts = {}) {
    const style = opts.style || "underline";
    const underlineHeight = opts.underlineHeight || 3;

    // ── 1. Named CSS Colors ──────────────────────────────────────────────
    const NAMED_COLORS = [
        "aliceblue",
        "antiquewhite",
        "aqua",
        "aquamarine",
        "azure",
        "beige",
        "bisque",
        "black",
        "blanchedalmond",
        "blue",
        "blueviolet",
        "brown",
        "burlywood",
        "cadetblue",
        "chartreuse",
        "chocolate",
        "coral",
        "cornflowerblue",
        "cornsilk",
        "crimson",
        "cyan",
        "darkblue",
        "darkcyan",
        "darkgoldenrod",
        "darkgray",
        "darkgreen",
        "darkgrey",
        "darkkhaki",
        "darkmagenta",
        "darkolivegreen",
        "darkorange",
        "darkorchid",
        "darkred",
        "darksalmon",
        "darkseagreen",
        "darkslateblue",
        "darkslategray",
        "darkslategrey",
        "darkturquoise",
        "darkviolet",
        "deeppink",
        "deepskyblue",
        "dimgray",
        "dimgrey",
        "dodgerblue",
        "firebrick",
        "floralwhite",
        "forestgreen",
        "fuchsia",
        "gainsboro",
        "ghostwhite",
        "gold",
        "goldenrod",
        "gray",
        "green",
        "greenyellow",
        "grey",
        "honeydew",
        "hotpink",
        "indianred",
        "indigo",
        "ivory",
        "khaki",
        "lavender",
        "lavenderblush",
        "lawngreen",
        "lemonchiffon",
        "lightblue",
        "lightcoral",
        "lightcyan",
        "lightgoldenrodyellow",
        "lightgray",
        "lightgreen",
        "lightgrey",
        "lightpink",
        "lightsalmon",
        "lightseagreen",
        "lightskyblue",
        "lightslategray",
        "lightslategrey",
        "lightsteelblue",
        "lightyellow",
        "lime",
        "limegreen",
        "linen",
        "magenta",
        "maroon",
        "mediumaquamarine",
        "mediumblue",
        "mediumorchid",
        "mediumpurple",
        "mediumseagreen",
        "mediumslateblue",
        "mediumspringgreen",
        "mediumturquoise",
        "mediumvioletred",
        "midnightblue",
        "mintcream",
        "mistyrose",
        "moccasin",
        "navajowhite",
        "navy",
        "oldlace",
        "olive",
        "olivedrab",
        "orange",
        "orangered",
        "orchid",
        "palegoldenrod",
        "palegreen",
        "paleturquoise",
        "palevioletred",
        "papayawhip",
        "peachpuff",
        "peru",
        "pink",
        "plum",
        "powderblue",
        "purple",
        "rebeccapurple",
        "red",
        "rosybrown",
        "royalblue",
        "saddlebrown",
        "salmon",
        "sandybrown",
        "seagreen",
        "seashell",
        "sienna",
        "silver",
        "skyblue",
        "slateblue",
        "slategray",
        "slategrey",
        "snow",
        "springgreen",
        "steelblue",
        "tan",
        "teal",
        "thistle",
        "tomato",
        "turquoise",
        "violet",
        "wheat",
        "white",
        "whitesmoke",
        "yellow",
        "yellowgreen",
    ];

    // ── 2. Regex Patterns ────────────────────────────────────────────────
    const HEX_RE = /#(?:[0-9a-f]{3,4}){1,2}\b/gi;
    const RGB_RE =
        /rgba?\(\s*[\d.]+%?\s*[,\s/]\s*[\d.]+%?\s*[,\s/]\s*[\d.]+%?\s*(?:[,\s/]\s*[\d.]+%?\s*)?\)/gi;
    const HSL_RE =
        /hsla?\(\s*[\d.]+(?:deg|rad|turn)?\s*[,\s/]\s*[\d.]+%\s*[,\s/]\s*[\d.]+%\s*(?:[,\s/]\s*[\d.]+%?\s*)?\)/gi;
    const NAMED_RE = new RegExp("\\b(" + NAMED_COLORS.join("|") + ")\\b", "gi");

    // ── 3. Color Resolution via Canvas ───────────────────────────────────
    const _canvas = document.createElement("canvas");
    _canvas.width = _canvas.height = 1;
    const _ctx = _canvas.getContext("2d");

    /** Returns resolved hex like "#rrggbb" or null */
    function resolveColor(raw) {
        _ctx.clearRect(0, 0, 1, 1);
        _ctx.fillStyle = "#000000"; // reset
        _ctx.fillStyle = raw; // apply candidate
        const resolved = _ctx.fillStyle; // browser normalizes
        if (
            resolved === "#000000" && raw.trim().toLowerCase() !== "black" &&
            raw.trim().toLowerCase() !== "#000" &&
            raw.trim().toLowerCase() !== "#000000"
        ) {
            // Browser couldn't parse → kept default black
            // Double-check: try with a different reset
            _ctx.fillStyle = "#ffffff";
            _ctx.fillStyle = raw;
            if (_ctx.fillStyle === "#ffffff") return null; // truly invalid
        }
        return _ctx.fillStyle; // "#rrggbb" or "rgba(…)"
    }

    // ── 4. Find Colors in a Line ─────────────────────────────────────────
    function findColorsInLine(text) {
        const results = [];
        const seen = new Set(); // avoid overlapping matches

        function collect(regex, line) {
            regex.lastIndex = 0;
            let m;
            while ((m = regex.exec(line)) !== null) {
                const start = m.index;
                const end = start + m[0].length;
                const key = `${start}:${end}`;
                if (seen.has(key)) continue;
                const resolved = resolveColor(m[0]);
                if (!resolved) continue;
                seen.add(key);
                results.push({ start, end, raw: m[0], color: resolved });
            }
        }

        collect(HEX_RE, text);
        collect(RGB_RE, text);
        collect(HSL_RE, text);
        collect(NAMED_RE, text);

        return results;
    }

    // ── 5. Dynamic Marker ────────────────────────────────────────────────
    const marker = {
        id: null,

        update(_html, markerLayer, session, config) {
            const firstRow = config.firstRow;
            const lastRow = config.lastRow;
            const charW = config.characterWidth;
            const lineH = config.lineHeight;
            const padding = markerLayer.$padding || 0;

            for (let row = firstRow; row <= lastRow; row++) {
                const line = session.getLine(row);
                if (!line) continue;

                const colors = findColorsInLine(line);
                if (!colors.length) continue;

                for (const c of colors) {
                    const screenStart = session.documentToScreenColumn(
                        row,
                        c.start,
                    );
                    const screenEnd = session.documentToScreenColumn(
                        row,
                        c.end,
                    );
                    const top = markerLayer.$getTop(row, config);
                    const left = padding + screenStart * charW;
                    const width = (screenEnd - screenStart) * charW;

                    if (style === "swatch") {
                        // Limit size to max. 1 charakter width
                        const size = Math.round(
                            Math.min(lineH * 0.6, charW * 0.85),
                        );
                        const gap = Math.round(charW * 0.2); // Distance to value
                        const topOff = top + Math.round((lineH - size) / 2);
                        const leftPos = Math.max(padding, left - size - gap);

                        markerLayer.elt(
                            "ace_color_preview ace_color_swatch",
                            `position:absolute;` +
                                `top:${topOff}px;left:${leftPos}px;` +
                                `width:${size}px;height:${size}px;` +
                                `background:${c.color};` +
                                `outline:1px solid rgba(128,128,128,0.45);` +
                                `border-radius:2px;` +
                                `pointer-events:none;z-index:5;`,
                        );
                    } else {
                        // ── Underline  ──────────────────────────────
                        const ulGap = Math.round(lineH * 0.01); // Gap Text → Line
                        markerLayer.elt(
                            "ace_color_preview ace_color_underline",
                            `position:absolute;` +
                                `top:${
                                    top + lineH - 1 + ulGap
                                }px;left:${left}px;` +
                                `width:${width}px;height:${underlineHeight}px;` +
                                `background:${c.color};` +
                                `border-radius:1px;` +
                                `pointer-events:none;z-index:3;`,
                        );
                    }
                }
            }
        },
    };

    editor.session.addDynamicMarker(marker, false);

    // ── 6. Force Repaint on Change ───────────────────────────────────────
    editor.session.on("change", () => {
        editor.renderer.updateFull();
    });

    // Return handle to allow removal later
    return {
        remove() {
            editor.session.removeMarker(marker.id);
        },
    };
}
