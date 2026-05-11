window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: 'Lists',
    html: `
        <h1>Lists</h1>

        <h2>Unordered List</h2>
        <ul>
            <li>First item</li>
            <li>Second item with a <a href="#">link</a></li>
            <li>Third item
                <ul>
                    <li>Nested item A</li>
                    <li>Nested item B</li>
                </ul>
            </li>
            <li>Fourth item</li>
        </ul>

        <h2>Ordered List</h2>
        <ol>
            <li>Step one</li>
            <li>Step two</li>
            <li>Step three
                <ol>
                    <li>Sub-step 3.1</li>
                    <li>Sub-step 3.2</li>
                </ol>
            </li>
        </ol>

        <h2>Definition List</h2>
        <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language — the structure of web pages.</dd>
            <dt>CSS</dt>
            <dd>Cascading Style Sheets — the presentation layer.</dd>
            <dt>JS</dt>
            <dd>JavaScript — the behavior layer.</dd>
        </dl>
    `
});
