/**
 * Default CSS content loaded into the editor on startup.
 * Covers all sample templates (Standard, Lists, Tables, Forms, Cards, Nav, Code).
 */
window.cssContent = `/* ==== General ==== */

body {
    margin: 0;
    padding: 32px 40px;
    background-color: #ffffff;
    color: #24292f;
    font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

/* ==== Headings ==== */

h1 {
    font-size: 2em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    padding-bottom: 0.3em;
    border-bottom: 2px solid #e8ecf0;
    color: #1a1a2e;
}

h2 {
    font-size: 1.5em;
    font-weight: 600;
    margin: 1.4em 0 0.5em 0;
    color: #16213e;
}

h3 {
    font-size: 1.2em;
    font-weight: 600;
    margin: 1.2em 0 0.4em 0;
    color: #0f3460;
}

/* ==== Text ==== */

p {
    margin: 0 0 1em 0;
}

strong {
    font-weight: 600;
}

small {
    font-size: 0.85em;
    color: #656d76;
}

a {
    color: #0969da;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

hr {
    border: none;
    border-top: 1px solid #e8ecf0;
    margin: 2em 0;
}

/* ==== Blockquote ==== */

blockquote {
    border-left: 4px solid #d0d7de;
    margin: 1em 0;
    padding: 0.6em 1em;
    color: #656d76;
    background-color: #f6f8fa;
    border-radius: 0 4px 4px 0;
}

blockquote p {
    margin: 0;
}

/* ==== Lists ==== */

ul, ol {
    margin: 1em 0;
    padding-left: 2em;
}

li {
    margin-bottom: 0.35em;
}

li ul, li ol {
    margin: 0.3em 0 0.3em 0;
}

dl {
    margin: 1em 0;
}

dt {
    font-weight: 600;
    margin-top: 0.8em;
}

dd {
    margin: 0.2em 0 0 1.5em;
    color: #444;
}

/* ==== Code ==== */

code {
    background-color: #eff1f3;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: "Fira Code", "Consolas", monospace;
}

pre {
    background-color: #f6f8fa;
    border: 1px solid #e8ecf0;
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    margin: 1em 0;
    line-height: 1.5;
}

pre code {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 0.875em;
}

/* ==== Tables ==== */

table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
    font-size: 0.95em;
}

th, td {
    border: 1px solid #d0d7de;
    padding: 8px 12px;
    text-align: left;
}

th {
    background-color: #f6f8fa;
    font-weight: 600;
}

tr:nth-child(even) {
    background-color: #f9fafb;
}

tfoot td {
    background-color: #f6f8fa;
    border-top: 2px solid #d0d7de;
}

/* ==== Forms ==== */

label {
    font-weight: 600;
    font-size: 0.95em;
    display: inline-block;
    margin-bottom: 4px;
}

input[type="text"],
input[type="email"],
select,
textarea {
    font-family: inherit;
    font-size: 14px;
    padding: 8px 10px;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    background: #fff;
    color: #24292f;
    transition: border-color 0.15s;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: #0969da;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.15);
}

button[type="submit"],
button[type="reset"] {
    font-family: inherit;
    font-size: 14px;
    padding: 8px 16px;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.15s;
}

button[type="submit"] {
    background-color: #2da44e;
    color: #fff;
    border-color: #2da44e;
}

button[type="submit"]:hover {
    background-color: #238636;
}

button[type="reset"] {
    background-color: #f6f8fa;
    color: #24292f;
}

button[type="reset"]:hover {
    background-color: #e1e4e8;
}

/* ==== Cards ==== */

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
    margin: 1em 0;
}

.card {
    background: #fff;
    border: 1px solid #e8ecf0;
    border-radius: 8px;
    padding: 20px;
    transition: box-shadow 0.2s, transform 0.2s;
}

.card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

.card h3 {
    margin: 0 0 0.5em 0;
    font-size: 1.1em;
}

.card p {
    font-size: 0.9em;
    color: #555;
    margin-bottom: 0.8em;
}

.card a {
    font-size: 0.9em;
    font-weight: 600;
}

/* ==== Navigation ==== */

.navbar {
    display: flex;
    align-items: center;
    background: #24292f;
    color: #fff;
    padding: 0 20px;
    border-radius: 6px;
    margin-bottom: 1.5em;
}

.nav-brand {
    font-weight: 700;
    font-size: 1.1em;
    margin-right: 24px;
    padding: 12px 0;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 4px;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: #ccc;
    padding: 12px 14px;
    display: block;
    font-size: 0.9em;
    border-radius: 4px;
    transition: background-color 0.15s, color 0.15s;
}

.nav-links a:hover,
.nav-links a.active {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
}

/* Breadcrumb */
.breadcrumb {
    font-size: 0.9em;
    color: #666;
    margin: 1em 0;
}

.breadcrumb a {
    color: #0969da;
}

.breadcrumb span {
    color: #333;
    font-weight: 600;
}

/* Pagination */
.pagination {
    display: flex;
    gap: 4px;
    margin: 1em 0;
}

.pagination a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    font-size: 0.9em;
    color: #0969da;
    transition: background-color 0.15s;
}

.pagination a:hover,
.pagination a.active {
    background-color: #0969da;
    color: #fff;
    border-color: #0969da;
    text-decoration: none;
}

/* Tags */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 1em 0;
}

.tag {
    background: #ddf4ff;
    color: #0969da;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 600;
}

/* ==== Images ==== */

img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
}
`;
