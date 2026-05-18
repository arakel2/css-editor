window.CSS_SNIPPETS = window.CSS_SNIPPETS || [];

window.CSS_SNIPPETS.push(
    /* ===========================================================
       :root THEMES
       =========================================================== */
    {
        name: ":root Light Theme",
        items: [
            {
                label: "Light Theme (full)",
                value: `:root {
    /* Typography */
    --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
    --font-size: 16px;
    --line-height: 1.6;

    /* Surfaces */
    --color-bg: #ffffff;
    --color-bg-subtle: #f6f8fa;
    --color-bg-inset: #eff2f5;

    /* Text */
    --color-text: #1f2328;
    --color-text-muted: #656d76;
    --color-text-link: #0969da;

    /* Borders */
    --color-border: #d0d7de;
    --color-border-muted: #e1e4e8;

    /* Accent / Status */
    --color-accent: #0969da;
    --color-success: #1a7f37;
    --color-success-bg: #dafbe1;
    --color-warning: #9a6700;
    --color-warning-bg: #fff8c5;
    --color-danger: #d1242f;
    --color-danger-bg: #ffebe9;
    --color-info: #0969da;
    --color-info-bg: #ddf4ff;
    --color-tip: #1a7f37;
    --color-tip-bg: #dafbe1;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;

    /* Borders */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 12px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(31, 35, 40, 0.06);
    --shadow-md: 0 3px 8px rgba(31, 35, 40, 0.12);
    --shadow-lg: 0 8px 24px rgba(31, 35, 40, 0.16);
}
`,
            },
        ],
    },
    {
        name: ":root Dark Theme",
        items: [
            {
                label: "Dark Theme (full)",
                value: `:root {
    /* Typography */
    --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
    --font-size: 16px;
    --line-height: 1.6;

    /* Surfaces */
    --color-bg: #0d1117;
    --color-bg-subtle: #161b22;
    --color-bg-inset: #010409;

    /* Text */
    --color-text: #e6edf3;
    --color-text-muted: #8b949e;
    --color-text-link: #58a6ff;

    /* Borders */
    --color-border: #30363d;
    --color-border-muted: #21262d;

    /* Accent / Status */
    --color-accent: #58a6ff;
    --color-success: #3fb950;
    --color-success-bg: #0f2d16;
    --color-warning: #d29922;
    --color-warning-bg: #2a1f02;
    --color-danger: #f85149;
    --color-danger-bg: #3d0a0a;
    --color-info: #58a6ff;
    --color-info-bg: #0c2545;
    --color-tip: #3fb950;
    --color-tip-bg: #0f2d16;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;

    /* Borders */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 12px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 3px 8px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
}
`,
            },
        ],
    },
    /* ===========================================================
       CSS VARIABLES (quick insert)
       =========================================================== */
    {
        name: "CSS Variables",
        items: [
            { label: "--font-body", value: "var(--font-body)" },
            { label: "--font-mono", value: "var(--font-mono)" },
            { label: "--color-bg", value: "var(--color-bg)" },
            { label: "--color-bg-subtle", value: "var(--color-bg-subtle)" },
            { label: "--color-bg-inset", value: "var(--color-bg-inset)" },
            { label: "--color-text", value: "var(--color-text)" },
            { label: "--color-text-muted", value: "var(--color-text-muted)" },
            { label: "--color-text-link", value: "var(--color-text-link)" },
            { label: "--color-border", value: "var(--color-border)" },
            { label: "--color-accent", value: "var(--color-accent)" },
            { label: "--spacing-sm", value: "var(--spacing-sm)" },
            { label: "--spacing-md", value: "var(--spacing-md)" },
            { label: "--spacing-lg", value: "var(--spacing-lg)" },
            { label: "--radius-md", value: "var(--radius-md)" },
            { label: "--shadow-sm", value: "var(--shadow-sm)" },
            { label: "--shadow-md", value: "var(--shadow-md)" },
        ],
    },
    /* ===========================================================
       TYPOGRAPHY
       =========================================================== */
    {
        name: "Typography",
        items: [
            {
                label: "System font stack",
                value:
                    "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;",
            },
            {
                label: "Mono font stack",
                value:
                    "font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;",
            },
            {
                label: "Fluid font-size (clamp)",
                value: "font-size: clamp(1rem, 0.5rem + 1.5vw, 1.25rem);",
            },
            {
                label: "Text truncate (1 line)",
                value:
                    "overflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;",
            },
            {
                label: "Line clamp (3 lines)",
                value:
                    "display: -webkit-box;\n-webkit-line-clamp: 3;\n-webkit-box-orient: vertical;\noverflow: hidden;",
            },
            {
                label: "Balance headings",
                value: "text-wrap: balance;",
            },
        ],
    },
    /* ===========================================================
       LAYOUT
       =========================================================== */
    {
        name: "Layout",
        items: [
            {
                label: "Flex center",
                value:
                    "display: flex;\nalign-items: center;\njustify-content: center;",
            },
            {
                label: "Flex column",
                value:
                    "display: flex;\nflex-direction: column;\ngap: var(--spacing-md);",
            },
            {
                label: "Flex space-between",
                value:
                    "display: flex;\nalign-items: center;\njustify-content: space-between;",
            },
            {
                label: "Grid auto-fill",
                value:
                    "display: grid;\ngrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\ngap: var(--spacing-md);",
            },
            {
                label: "Grid 2-col",
                value:
                    "display: grid;\ngrid-template-columns: 1fr 1fr;\ngap: var(--spacing-md);",
            },
            {
                label: "Grid 3-col",
                value:
                    "display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: var(--spacing-md);",
            },
            {
                label: "Grid sidebar",
                value:
                    "display: grid;\ngrid-template-columns: 250px 1fr;\ngap: var(--spacing-lg);",
            },
            { label: "Absolute fill", value: "position: absolute;\ninset: 0;" },
            {
                label: "Sticky top",
                value: "position: sticky;\ntop: 0;\nz-index: 10;",
            },
            {
                label: "Container center",
                value:
                    "max-width: 960px;\nmargin-inline: auto;\npadding-inline: var(--spacing-md);",
            },
        ],
    },
    /* ===========================================================
       EFFECTS
       =========================================================== */
    {
        name: "Effects",
        items: [
            { label: "Shadow sm", value: "box-shadow: var(--shadow-sm);" },
            { label: "Shadow md", value: "box-shadow: var(--shadow-md);" },
            { label: "Shadow lg", value: "box-shadow: var(--shadow-lg);" },
            { label: "Transition fast", value: "transition: all 0.15s ease;" },
            { label: "Transition mid", value: "transition: all 0.3s ease;" },
            {
                label: "Backdrop blur",
                value:
                    "backdrop-filter: blur(8px);\n-webkit-backdrop-filter: blur(8px);",
            },
            { label: "Smooth scroll", value: "scroll-behavior: smooth;" },
            {
                label: "Focus ring",
                value:
                    "outline: 2px solid var(--color-accent);\noutline-offset: 2px;",
            },
            {
                label: "Gradient bg",
                value:
                    "background: linear-gradient(135deg, var(--color-accent), #8250df);",
            },
        ],
    },
    /* ===========================================================
       SELECTORS
       =========================================================== */
    {
        name: "Selectors",
        items: [
            {
                label: "::selection",
                value:
                    "::selection {\n    background-color: var(--color-accent);\n    color: #fff;\n}",
            },
            {
                label: "::placeholder",
                value:
                    "::placeholder {\n    color: var(--color-text-muted);\n    opacity: 0.7;\n}",
            },
            {
                label: ":focus-visible",
                value:
                    ":focus-visible {\n    outline: 2px solid var(--color-accent);\n    outline-offset: 2px;\n}",
            },
            { label: ":is() group", value: ":is(h1, h2, h3, h4) {\n    \n}" },
            {
                label: ":where() low-spec",
                value: ":where(.container, .wrapper) {\n    \n}",
            },
            {
                label: ":not() exclude",
                value:
                    ":not(:last-child) {\n    margin-bottom: var(--spacing-md);\n}",
            },
            { label: ":has() parent", value: ":has(> img) {\n    \n}" },
            {
                label: "::marker list",
                value: "::marker {\n    color: var(--color-accent);\n}",
            },
            {
                label: "::-webkit-scrollbar",
                value:
                    "::-webkit-scrollbar {\n    width: 8px;\n}\n::-webkit-scrollbar-track {\n    background: var(--color-bg-subtle);\n}\n::-webkit-scrollbar-thumb {\n    background: var(--color-border);\n    border-radius: 4px;\n}",
            },
        ],
    },
    /* ===========================================================
       COMPONENTS
       =========================================================== */
    {
        name: "Components",
        items: [
            {
                label: "Badge",
                value: `.badge {
    display: inline-block;
    padding: 2px 8px;
    font-size: 0.75em;
    font-weight: 600;
    border-radius: 2em;
    background-color: var(--color-accent);
    color: #fff;
}`,
            },
            {
                label: "Tooltip (CSS-only)",
                value: `[data-tooltip] {
    position: relative;
    cursor: help;
}
[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 8px;
    font-size: 0.8em;
    white-space: nowrap;
    color: #fff;
    background: var(--color-text);
    border-radius: var(--radius-sm);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
}
[data-tooltip]:hover::after {
    opacity: 1;
}`,
            },
            {
                label: "Divider with text",
                value: `.divider {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    color: var(--color-text-muted);
    font-size: 0.85em;
}
.divider::before,
.divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--color-border-muted);
}`,
            },
            {
                label: "Visually hidden (a11y)",
                value: `.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}`,
            },
        ],
    },
    /* ===========================================================
       ANIMATIONS
       =========================================================== */
    {
        name: "Animations",
        items: [
            {
                label: "Fade in",
                value: `@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
.fade-in {
    animation: fadeIn 0.3s ease forwards;
}`,
            },
            {
                label: "Slide in (top)",
                value: `@keyframes slideInTop {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
}
.slide-in-top {
    animation: slideInTop 0.3s ease forwards;
}`,
            },
            {
                label: "Slide in (left)",
                value: `@keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-12px); }
    to   { opacity: 1; transform: translateX(0); }
}
.slide-in-left {
    animation: slideInLeft 0.3s ease forwards;
}`,
            },
            {
                label: "Spin",
                value: `@keyframes spin {
    to { transform: rotate(360deg); }
}
.spin {
    animation: spin 1s linear infinite;
}`,
            },
            {
                label: "Pulse",
                value: `@keyframes pulse {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.5; }
}
.pulse {
    animation: pulse 2s ease-in-out infinite;
}`,
            },
        ],
    },
    /* ===========================================================
       MEDIA QUERIES
       =========================================================== */
    {
        name: "Media Queries",
        items: [
            {
                label: "@mobile ≤480px",
                value: "@media (max-width: 480px) {\n    \n}",
            },
            {
                label: "@tablet ≤768px",
                value: "@media (max-width: 768px) {\n    \n}",
            },
            {
                label: "@laptop ≤1024px",
                value: "@media (max-width: 1024px) {\n    \n}",
            },
            {
                label: "@desktop ≥1280px",
                value: "@media (min-width: 1280px) {\n    \n}",
            },
            {
                label: "@dark-mode",
                value: "@media (prefers-color-scheme: dark) {\n    \n}",
            },
            {
                label: "@reduced-motion",
                value:
                    "@media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        transition-duration: 0.01ms !important;\n    }\n}",
            },
            {
                label: "@print",
                value:
                    "@media print {\n    body { background: #fff; color: #000; }\n    a { color: #000; text-decoration: underline; }\n    nav, .no-print { display: none; }\n}",
            },
        ],
    },
);
