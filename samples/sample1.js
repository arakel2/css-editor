window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Typography",
    html: `
        <h1>Heading Level 1</h1>

        <p>This is a full-length paragraph designed to test line height, paragraph spacing,
           and how text wraps across multiple lines. Good typography depends on comfortable
           reading rhythm — a balance of font size, line height, and measure (line length).
           When these three are in harmony, even long passages of text feel effortless to read.
           Pay attention to how this paragraph flows and whether the spacing feels natural.</p>

        <h2>Heading Level 2</h2>

        <p>A second paragraph with <strong>bold text</strong>, <em>italic text</em>,
           <strong><em>bold italic</em></strong>, and a <a href="#">hyperlink</a>.
           Also some <code>inline code</code>, a <mark>highlighted phrase</mark>,
           and <small>small print</small> for fine details.</p>

        <p>Additional inline elements: <abbr title="Cascading Style Sheets">CSS</abbr> is an abbreviation,
           here is <del>deleted text</del> and <ins>inserted text</ins>,
           plus <sub>subscript</sub> and <sup>superscript</sup> for formulas like
           H<sub>2</sub>O or E=mc<sup>2</sup>. Finally, a <u>stylistically offset</u> span
           and a <kbd>Ctrl</kbd>+<kbd>S</kbd> keyboard shortcut.</p>

        <h3>Heading Level 3</h3>

        <p>Typography is not just about choosing a font — it encompasses the entire visual
           rhythm of a page. The vertical spacing between headings, paragraphs, lists, and
           other block-level elements creates a sense of structure and hierarchy. Without
           consistent spacing, a page feels chaotic even if every individual element looks fine
           on its own.</p>

        <h4>Heading Level 4</h4>

        <p>At this depth, headings are typically used for sub-sections within a larger chapter.
           They should still be visually distinct from body text but clearly subordinate to
           the levels above them.</p>

        <h5>Heading Level 5</h5>

        <p>Level 5 headings are rarely used but should still be styled for completeness.
           Think of documentation, legal texts, or detailed technical specifications.</p>

        <h6>Heading Level 6</h6>

        <p>The deepest heading level. Often styled at the same size as body text but with
           a different weight or color to maintain distinction.</p>

        <hr>

        <h2>Blockquotes</h2>

        <blockquote>
            <p>The best way to predict the future is to invent it.</p>
        </blockquote>

        <blockquote>
            <p>Design is not just what it looks like and feels like.
               Design is how it works.</p>
            <blockquote>
                <p>A nested blockquote — useful for quoting within a quote,
                   or for representing threaded conversations.</p>
            </blockquote>
        </blockquote>

        <hr>

        <h2>Links</h2>

        <p>A <a href="#">regular link</a>, a <a href="https://example.com">visited link</a>
           (if previously visited), and a
           <a href="#" title="This link has a title attribute">link with title</a>.
           Hover over them to test <code>:hover</code> styles.</p>

        <hr>
        <p><small>End of Typography sample.</small></p>
    `,
});
