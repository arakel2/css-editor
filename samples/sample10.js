window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Full Page",
    html: `
        <nav class="toc" id="toc">
            <h2>Table of Contents</h2>
            <ol>
                <li><a href="#sec-intro">Introduction</a></li>
                <li><a href="#sec-typography">Typography</a></li>
                <li><a href="#sec-lists">Lists</a></li>
                <li><a href="#sec-table">Data Table</a></li>
                <li><a href="#sec-media">Media</a></li>
                <li><a href="#sec-code">Code Example</a></li>
                <li><a href="#sec-form">Contact Form</a></li>
                <li><a href="#sec-extras">Extras</a></li>
            </ol>
        </nav>

        <hr>

        <!-- ===== Introduction ===== -->
        <section id="sec-intro">
            <h1>The Complete CSS Test Page</h1>
            <p>This sample combines all common HTML elements into a single,
               realistic article layout. Use it to verify that your stylesheet
               handles the interplay between different elements — spacing,
               colors, typography, and responsive behavior all at once.</p>
            <p>Each section below can be reached via the table of contents above.
               At the end of each section, a link takes you back to the TOC.</p>
            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>

        <!-- ===== Typography ===== -->
        <section id="sec-typography">
            <h2>Typography</h2>
            <p>Well-crafted typography is the foundation of good web design. It guides
               the reader through the content, establishes visual hierarchy, and sets the
               overall tone of a page. The following paragraphs demonstrate how body text,
               inline elements, and headings work together in a realistic context.</p>

            <h3>Inline Formatting</h3>
            <p>Text can be <strong>bold</strong>, <em>italic</em>,
               <strong><em>bold italic</em></strong>, <mark>highlighted</mark>,
               <del>deleted</del>, <ins>inserted</ins>, or styled as
               <code>inline code</code>. Abbreviations like
               <abbr title="HyperText Markup Language">HTML</abbr> should show
               a tooltip on hover. Chemical formulas like H<sub>2</sub>O and
               mathematical expressions like x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup>
               use subscripts and superscripts.</p>

            <h3>A Blockquote</h3>
            <blockquote>
                <p>Any application that can be written in JavaScript will eventually
                   be written in JavaScript.</p>
                <p>— <cite>Jeff Atwood</cite></p>
            </blockquote>

            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>

        <!-- ===== Lists ===== -->
        <section id="sec-lists">
            <h2>Lists</h2>

            <h3>Project Roadmap (Ordered)</h3>
            <ol>
                <li>Research &amp; requirements gathering</li>
                <li>Design phase
                    <ol>
                        <li>Wireframes</li>
                        <li>Visual mockups</li>
                        <li>Prototype &amp; user testing</li>
                    </ol>
                </li>
                <li>Development &amp; QA</li>
                <li>Launch</li>
            </ol>

            <h3>Key Features (Unordered)</h3>
            <ul>
                <li>Fully responsive layout</li>
                <li>Dark and light mode support</li>
                <li>Accessible by default
                    <ul>
                        <li>Keyboard navigable</li>
                        <li>Screen-reader friendly</li>
                    </ul>
                </li>
                <li>Works offline</li>
            </ul>

            <h3>Glossary (Definition List)</h3>
            <dl>
                <dt>Viewport</dt>
                <dd>The visible area of a web page within the browser window.</dd>
                <dt>Specificity</dt>
                <dd>The algorithm that determines which CSS rule takes precedence
                    when multiple rules target the same element.</dd>
            </dl>

            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>

        <!-- ===== Data Table ===== -->
        <section id="sec-table">
            <h2>Data Table</h2>
            <table>
                <caption>Quarterly Revenue (in thousands &euro;)</caption>
                <thead>
                    <tr><th>Region</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th></tr>
                </thead>
                <tbody>
                    <tr><td>North</td><td>120</td><td>135</td><td>148</td><td>160</td></tr>
                    <tr><td>South</td><td>98</td><td>110</td><td>105</td><td>125</td></tr>
                    <tr><td>East</td><td>75</td><td>82</td><td>91</td><td>99</td></tr>
                    <tr><td>West</td><td>140</td><td>155</td><td>170</td><td>180</td></tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>433</strong></td>
                        <td><strong>482</strong></td>
                        <td><strong>514</strong></td>
                        <td><strong>564</strong></td>
                    </tr>
                </tfoot>
            </table>
            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>

        <!-- ===== Media ===== -->
        <section id="sec-media">
            <h2>Media</h2>
            <figure>
                <img src="samples/images/img01.webp" alt="Sample photograph">
                <figcaption>Fig. 1 — An embedded image with a descriptive caption.
                            Good CSS ensures images scale responsively and captions
                            align neatly beneath them.</figcaption>
            </figure>

            <div class="image-grid">
                <figure>
                    <img src="samples/images/img03.webp" alt="Grid image 1">
                    <figcaption>Photo A</figcaption>
                </figure>
                <figure>
                    <img src="samples/images/img04.webp" alt="Grid image 2">
                    <figcaption>Photo B</figcaption>
                </figure>
                <figure>
                    <img src="samples/images/img05.webp" alt="Grid image 3">
                    <figcaption>Photo C</figcaption>
                </figure>
            </div>
            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>

        <!-- ===== Code Example ===== -->
        <section id="sec-code">
            <h2>Code Example</h2>
            <p>Use the <code>fetch()</code> API to load data asynchronously.
               Press <kbd>F12</kbd> to open the browser console and try it out:</p>
            <pre><code>async function loadData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
    }
    return response.json();
}

loadData('/api/items')
    .then(data => console.log(data))
    .catch(err => console.error(err));</code></pre>
            <p>The console might return: <samp>[ { id: 1, name: "Widget" }, … ]</samp></p>
            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>

        <!-- ===== Contact Form ===== -->
        <section id="sec-form">
            <h2>Contact Form</h2>
            <form onsubmit="return false">
                <fieldset>
                    <legend>Send us a message</legend>

                    <p>
                        <label for="fp-name">Name</label><br>
                        <input type="text" id="fp-name" placeholder="Your name" required style="width:100%">
                    </p>
                    <p>
                        <label for="fp-email">Email</label><br>
                        <input type="email" id="fp-email" placeholder="you@example.com" required style="width:100%">
                    </p>
                    <p>
                        <label for="fp-subject">Subject</label><br>
                        <select id="fp-subject" style="width:100%">
                            <option>General inquiry</option>
                            <option>Bug report</option>
                            <option>Feature request</option>
                        </select>
                    </p>
                    <p>
                        <label for="fp-message">Message</label><br>
                        <textarea id="fp-message" rows="4" placeholder="Your message…" style="width:100%"></textarea>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                        <button type="reset">Reset</button>
                    </p>
                </fieldset>
            </form>
            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>

        <!-- ===== Extras ===== -->
        <section id="sec-extras">
            <h2>Extras</h2>

            <h3>Admonition</h3>
            <div class="admonition tip">
                <p class="admonition-title">Tip</p>
                <p>Use CSS custom properties in a <code>:root</code> block to manage
                   colors, spacing, and fonts from a single location. Switch between
                   light and dark mode by swapping the variable values.</p>
            </div>

            <h3>Collapsible Section</h3>
            <details>
                <summary>Frequently Asked Question</summary>
                <p>Yes, the <code>&lt;details&gt;</code> element works without
                   JavaScript and is supported in all modern browsers. Style the
                   <code>&lt;summary&gt;</code> marker, padding, and transition
                   to match your design system.</p>
            </details>

            <h3>Tags</h3>
            <div class="tags">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">Responsive</span>
                <span class="tag">Accessible</span>
            </div>

            <a href="#toc" class="back-to-toc">&uarr; Back to TOC</a>
        </section>

        <hr>
        <footer>
            <p><small>&copy; 2026 CSS Editor &mdash; Full Page Sample</small></p>
        </footer>
    `,
});
