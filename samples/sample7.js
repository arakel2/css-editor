window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Code & Pre",
    html: `
        <h1>Code &amp; Pre</h1>

        <h2>Inline Code</h2>
        <p>Use <code>document.querySelector()</code> to select elements.
           The <code>.innerHTML</code> property sets the content.
           Chain methods with <code>element.classList.add('active')</code>.</p>

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

        <h2>Keyboard, Sample Output &amp; Variables</h2>
        <p>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open DevTools.</p>
        <p>Use <kbd>Ctrl</kbd> + <kbd>S</kbd> to save and <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo.</p>
        <p>The console returned: <samp>Error: unexpected token at line 42</samp></p>
        <p>The variable <var>x</var> equals <var>y</var> + 5.</p>
    `,
});
