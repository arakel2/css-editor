window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: 'Code & Pre',
    html: `
        <h1>Code Blocks</h1>

        <h2>Inline Code</h2>
        <p>Use <code>document.querySelector()</code> to select elements.
           The <code>.innerHTML</code> property sets the content.</p>

        <h2>Code Block</h2>
        <pre><code>function greet(name) {
    const message = "Hello, " + name + "!";
    console.log(message);
    return message;
}

greet("World");</code></pre>

        <h2>CSS Example</h2>
        <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 24px;
}</code></pre>

        <h2>Mixed Content</h2>
        <p>The function <code>greet()</code> accepts a <code>name</code> parameter
           and returns a greeting string. Here is the full implementation:</p>
        <pre><code>// Full module
export function greet(name = "World") {
    return \`Hello, \${name}!\`;
}</code></pre>
        <p>Import it with <code>import { greet } from './utils.js'</code>.</p>
    `
});
