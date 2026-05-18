window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Admonitions & Details",
    html: `
        <h1>Admonitions &amp; Details</h1>

        <h2>Admonitions</h2>

        <div class="admonition info">
            <p class="admonition-title">Info</p>
            <p>This is a general information box. Use it to highlight background
               details or supplementary context that readers might find useful.</p>
        </div>

        <div class="admonition tip">
            <p class="admonition-title">Tip</p>
            <p>A helpful tip to improve workflow or suggest best practices.
               Tips are less critical than warnings but still worth noting.</p>
        </div>

        <div class="admonition warning">
            <p class="admonition-title">Warning</p>
            <p>Proceed with caution. This action may have unintended side effects
               or requires careful consideration before applying.</p>
        </div>

        <div class="admonition danger">
            <p class="admonition-title">Danger</p>
            <p>Critical alert — this action is destructive or irreversible.
               Make sure you have a backup before continuing.</p>
        </div>

        <div class="admonition success">
            <p class="admonition-title">Success</p>
            <p>Everything worked as expected. The operation completed successfully.</p>
        </div>

        <hr>

        <h2>Collapsible Sections (Details)</h2>

        <details>
            <summary>Click to expand — collapsed by default</summary>
            <p>This content is hidden until the user clicks the summary.
               Useful for FAQs, optional information, or reducing page length.</p>
            <p>Any HTML can go inside: paragraphs, lists, code blocks, images, and more.</p>
        </details>

        <details open>
            <summary>Already expanded section</summary>
            <p>This section starts open via the <code>open</code> attribute.
               Users can still collapse it by clicking the summary.</p>
            <ul>
                <li>Nested lists work fine inside details</li>
                <li>So do other block elements</li>
            </ul>
            <pre><code>// Code blocks inside details
const x = 42;</code></pre>
        </details>

        <details>
            <summary>Nested collapsible sections</summary>
            <p>Outer content is visible when this section is expanded.</p>
            <details>
                <summary>Inner section — click to go deeper</summary>
                <p>This is a nested details element. Useful for complex,
                   hierarchical content like documentation trees.</p>
            </details>
        </details>

        <hr>

        <h2>Dialog Element</h2>
        <p>The <code>&lt;dialog&gt;</code> element below is shown inline (non-modal).
           Normally opened via JavaScript, but rendered here for styling purposes.</p>
        <dialog open style="width:100%; position:relative;">
            <h3>Dialog Title</h3>
            <p>This is a native HTML dialog box. Style its backdrop, borders,
               padding, and close button as needed.</p>
            <button type="button" onclick="this.closest('dialog').removeAttribute('open')">Close</button>
        </dialog>
    `,
});
