/**
 * Default CSS content loaded into the editor on startup.
 * Covers all sample templates (Standard, Lists, Tables, Forms, Cards, Nav, Code).
 */
window.cssContent = `
/* ============================================================
   CSS Editor – Default Stylesheet (GitHub-inspired)
   Switch themes by replacing the :root block below. (Snippets)
   ============================================================ */

/* ---------- Light Theme (default) ---------- */
:root {
    /* Typography */
    --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
    --font-size: 16px;
    --line-height: 1.6;

    /* Colors – surfaces */
    --color-bg: #ffffff;
    --color-bg-subtle: #f6f8fa;
    --color-bg-inset: #eff2f5;

    /* Colors – text */
    --color-text: #1f2328;
    --color-text-muted: #656d76;
    --color-text-link: #0969da;

    /* Colors – borders */
    --color-border: #d0d7de;
    --color-border-muted: #e1e4e8;

    /* Colors – accent / status */
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


/* ====== Base ====== */

*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: var(--spacing-lg);
    font-family: var(--font-body);
    font-size: var(--font-size);
    line-height: var(--line-height);
    color: var(--color-text);
    background-color: var(--color-bg);
    -webkit-font-smoothing: antialiased;
}


/* ====== Typography ====== */

h1, h2, h3, h4, h5, h6 {
    margin-top: var(--spacing-xl);
    margin-bottom: var(--spacing-md);
    font-weight: 600;
    line-height: 1.25;
    color: var(--color-text);
}

h1 { font-size: 2em;    padding-bottom: var(--spacing-sm); border-bottom: 1px solid var(--color-border-muted); }
h2 { font-size: 1.5em;  padding-bottom: var(--spacing-xs); border-bottom: 1px solid var(--color-border-muted); }
h3 { font-size: 1.25em; }
h4 { font-size: 1em; }
h5 { font-size: 0.875em; }
h6 { font-size: 0.85em; color: var(--color-text-muted); }

h1:first-child, h2:first-child, h3:first-child {
    margin-top: 0;
}

p {
    margin-top: 0;
    margin-bottom: var(--spacing-md);
}

a {
    color: var(--color-text-link);
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}

strong { font-weight: 600; }

mark {
    background-color: var(--color-warning-bg);
    color: var(--color-text);
    padding: 1px 4px;
    border-radius: var(--radius-sm);
}

del { color: var(--color-text-muted); }

abbr[title] {
    text-decoration: underline dotted;
    cursor: help;
}

small { font-size: 0.85em; color: var(--color-text-muted); }

sub, sup { font-size: 0.75em; }

u { text-decoration-color: var(--color-border); }

hr {
    height: 1px;
    margin: var(--spacing-lg) 0;
    padding: 0;
    background-color: var(--color-border-muted);
    border: 0;
}


/* ====== Blockquote ====== */

blockquote {
    margin: 0 0 var(--spacing-md) 0;
    padding: var(--spacing-sm) var(--spacing-md);
    border-left: 4px solid var(--color-accent);
    background-color: var(--color-bg-subtle);
    color: var(--color-text-muted);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

blockquote p:last-child { margin-bottom: 0; }

blockquote blockquote {
    margin-top: var(--spacing-sm);
}


/* ====== Lists ====== */

ul, ol {
    margin-top: 0;
    margin-bottom: var(--spacing-md);
    padding-left: 2em;
}

ul ul, ol ol, ul ol, ol ul {
    margin-bottom: 0;
}

li + li {
    margin-top: var(--spacing-xs);
}

/* Task list */
ul.task-list {
    list-style: none;
    padding-left: 0;
}

ul.task-list li {
    display: flex;
    align-items: baseline;
    gap: var(--spacing-sm);
}

ul.task-list input[type="checkbox"] {
    margin: 0;
}

/* Definition list */
dl {
    margin-top: 0;
    margin-bottom: var(--spacing-md);
}

dt {
    font-weight: 600;
    margin-top: var(--spacing-sm);
}

dd {
    margin-left: var(--spacing-lg);
    margin-bottom: var(--spacing-xs);
    color: var(--color-text-muted);
}


/* ====== Code & Pre ====== */

code, kbd, samp, var {
    font-family: var(--font-mono);
    font-size: 0.875em;
}

code {
    padding: 2px 6px;
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border-muted);
    border-radius: var(--radius-sm);
}

pre {
    margin-top: 0;
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-md);
    overflow-x: auto;
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border-muted);
    border-radius: var(--radius-md);
    line-height: 1.45;
}

pre code {
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    font-size: 0.85em;
}

kbd {
    padding: 2px 6px;
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-bottom-width: 2px;
    border-radius: var(--radius-sm);
    box-shadow: inset 0 -1px 0 var(--color-border-muted);
}

samp {
    padding: 2px 6px;
    background-color: var(--color-bg-subtle);
    border-radius: var(--radius-sm);
    color: var(--color-danger);
}

var {
    font-style: italic;
    color: var(--color-accent);
}


/* ====== Tables ====== */

table {
    width: 100%;
    margin-bottom: var(--spacing-md);
    border-collapse: collapse;
    border-spacing: 0;
}

caption {
    padding: var(--spacing-sm) 0;
    font-weight: 600;
    text-align: left;
    color: var(--color-text-muted);
    caption-side: top;
}

th, td {
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--color-border);
    text-align: left;
}

th {
    font-weight: 600;
    background-color: var(--color-bg-subtle);
}

tbody tr:nth-child(even) {
    background-color: var(--color-bg-subtle);
}

tfoot {
    background-color: var(--color-bg-subtle);
    font-weight: 600;
}


/* ====== Forms ====== */

fieldset {
    margin: 0 0 var(--spacing-md) 0;
    padding: var(--spacing-md);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
}

legend {
    padding: 0 var(--spacing-sm);
    font-weight: 600;
    font-size: 0.9em;
}

label {
    font-weight: 500;
    font-size: 0.9em;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="url"],
input[type="search"],
input[type="date"],
textarea,
select {
    padding: var(--spacing-sm) var(--spacing-sm);
    font-family: var(--font-body);
    font-size: var(--font-size);
    color: var(--color-text);
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.15);
}

input:disabled,
textarea:disabled,
select:disabled {
    background-color: var(--color-bg-inset);
    color: var(--color-text-muted);
    cursor: not-allowed;
}

input[readonly] {
    background-color: var(--color-bg-subtle);
}

input[type="range"] {
    accent-color: var(--color-accent);
}

input[type="color"] {
    padding: var(--spacing-xs);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    cursor: pointer;
    height: 36px;
}

input[type="file"] {
    font-family: var(--font-body);
    font-size: 0.9em;
    color: var(--color-text-muted);
}

button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
    display: inline-block;
    padding: var(--spacing-sm) var(--spacing-md);
    font-family: var(--font-body);
    font-size: 0.875em;
    font-weight: 500;
    color: var(--color-bg);
    background-color: var(--color-accent);
    border: 1px solid var(--color-accent);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: background-color 0.15s ease;
}

button:hover,
input[type="submit"]:hover {
    background-color: #0860c4;
}

input[type="reset"] {
    color: var(--color-text);
    background-color: var(--color-bg-subtle);
    border-color: var(--color-border);
}

input[type="reset"]:hover {
    background-color: var(--color-bg-inset);
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

button[type="reset"] {
    color: var(--color-text);
    background-color: var(--color-bg-subtle);
    border-color: var(--color-border);
}

button[type="reset"]:hover {
    background-color: var(--color-bg-inset);
}


/* ====== Cards & Grid ====== */

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.card {
    padding: var(--spacing-md);
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.15s ease;
}

.card:hover {
    box-shadow: var(--shadow-md);
}

.card h3 {
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
    font-size: 1em;
}

.card p {
    font-size: 0.9em;
    color: var(--color-text-muted);
}

.card a {
    font-size: 0.85em;
    font-weight: 500;
}


/* ====== Navigation ====== */

.navbar {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border-muted);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-lg);
}

.nav-brand {
    font-weight: 700;
    font-size: 1.1em;
    color: var(--color-text);
}

.nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: var(--spacing-xs);
}

.nav-links li a {
    display: block;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    font-size: 0.9em;
    color: var(--color-text);
    text-decoration: none;
}

.nav-links li + li {
    margin-top: 0;
}

.nav-links li a:hover,
.nav-links li a.active {
    background-color: var(--color-bg-inset);
    color: var(--color-text-link);
}


/* Breadcrumb */
.breadcrumb {
    margin-bottom: var(--spacing-md);
    font-size: 0.9em;
    color: var(--color-text-muted);
}

.breadcrumb a {
    color: var(--color-text-link);
}

/* Pagination */
.pagination {
    display: flex;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
}

.pagination a {
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-sm);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-size: 0.9em;
    color: var(--color-text-link);
    text-decoration: none;
}

.pagination a:hover,
.pagination a.active {
    background-color: var(--color-accent);
    color: #fff;
    border-color: var(--color-accent);
}

/* Tags */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
}

.tag {
    display: inline-block;
    padding: 2px var(--spacing-sm);
    font-size: 0.8em;
    font-weight: 500;
    color: var(--color-accent);
    background-color: var(--color-info-bg);
    border-radius: 2em;
}


/* ====== Media ====== */

img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
}

figure {
    margin: 0 0 var(--spacing-md) 0;
}

figcaption {
    margin-top: var(--spacing-sm);
    font-size: 0.85em;
    color: var(--color-text-muted);
    text-align: center;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.image-grid figure {
    margin: 0;
}

.image-grid img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
}

audio, video {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: var(--spacing-md);
    border-radius: var(--radius-md);
}

.embed-container {
    margin-bottom: var(--spacing-md);
}


/* ====== Admonitions ====== */

.admonition {
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-md);
    border-left: 4px solid var(--color-border);
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    background-color: var(--color-bg-subtle);
}

.admonition-title {
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.admonition p:last-child { margin-bottom: 0; }

.admonition.info    { border-left-color: var(--color-info);    background-color: var(--color-info-bg); }
.admonition.info    .admonition-title { color: var(--color-info); }

.admonition.tip     { border-left-color: var(--color-tip);     background-color: var(--color-tip-bg); }
.admonition.tip     .admonition-title { color: var(--color-tip); }

.admonition.warning { border-left-color: var(--color-warning); background-color: var(--color-warning-bg); }
.admonition.warning .admonition-title { color: var(--color-warning); }

.admonition.danger  { border-left-color: var(--color-danger);  background-color: var(--color-danger-bg); }
.admonition.danger  .admonition-title { color: var(--color-danger); }

.admonition.success { border-left-color: var(--color-success); background-color: var(--color-success-bg); }
.admonition.success .admonition-title { color: var(--color-success); }


/* ====== Details / Summary ====== */

details {
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-md);
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border-muted);
    border-radius: var(--radius-md);
}

details[open] {
    border-color: var(--color-border);
}

summary {
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    padding: var(--spacing-xs) 0;
}

summary:hover {
    color: var(--color-accent);
}

details details {
    margin-top: var(--spacing-sm);
    background-color: var(--color-bg);
}

details > *:last-child {
    margin-bottom: 0;
}


/* ====== Dialog ====== */

dialog {
    padding: var(--spacing-lg);
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}

dialog h3 {
    margin-top: 0;
}


/* ====== Toc & Back-to-Top (Full Page sample) ====== */

.toc {
    padding: var(--spacing-md);
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border-muted);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-lg);
}

.toc h2 {
    margin-top: 0;
    font-size: 1.1em;
    border-bottom: none;
    padding-bottom: 0;
}

.toc ol {
    margin-bottom: 0;
}

.back-to-toc {
    display: inline-block;
    margin-top: var(--spacing-sm);
    font-size: 0.85em;
    color: var(--color-text-muted);
}

.back-to-toc:hover {
    color: var(--color-text-link);
}


/* ====== Footer ====== */

footer {
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border-muted);
    color: var(--color-text-muted);
    font-size: 0.85em;
}
`;
