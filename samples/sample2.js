window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Lists",
    html: `
        <h1>Lists</h1>

        <h2>Unordered List</h2>
        <ul>
            <li>First item</li>
            <li>Second item with a <a href="#">link</a></li>
            <li>Third item with nested list:
                <ul>
                    <li>Nested item A</li>
                    <li>Nested item B
                        <ul>
                            <li>Deeply nested item</li>
                        </ul>
                    </li>
                    <li>Nested item C</li>
                </ul>
            </li>
            <li>Fourth item</li>
        </ul>

        <h2>Ordered List</h2>
        <ol>
            <li>Step one — gather requirements</li>
            <li>Step two — create wireframes</li>
            <li>Step three — implementation
                <ol>
                    <li>Sub-step 3.1 — set up project</li>
                    <li>Sub-step 3.2 — write code</li>
                    <li>Sub-step 3.3 — write tests</li>
                </ol>
            </li>
            <li>Step four — review and deploy</li>
        </ol>

        <h2>Reversed / Offset Ordered List</h2>
        <ol start="5" reversed>
            <li>Countdown item (start at 5, reversed)</li>
            <li>Another item</li>
            <li>Third item</li>
            <li>Last item</li>
        </ol>

        <h2>Task List</h2>
        <ul class="task-list">
            <li><label><input type="checkbox" checked disabled> Completed task</label></li>
            <li><label><input type="checkbox" checked disabled> Another done task</label></li>
            <li><label><input type="checkbox" disabled> Pending task</label></li>
            <li><label><input type="checkbox" disabled> Future task</label></li>
        </ul>

        <h2>Definition List</h2>
        <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language — the structural foundation of web pages.</dd>

            <dt>CSS</dt>
            <dd>Cascading Style Sheets — controls presentation, layout, and visual design.</dd>

            <dt>JavaScript</dt>
            <dd>A programming language for interactive behavior on the web.</dd>
            <dd>Also used server-side via Node.js and other runtimes.</dd>
        </dl>
    `,
});
