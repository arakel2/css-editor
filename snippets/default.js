/**
 * Default snippets for the CSS Editor.
 * Add your own snippets by creating a new file in snippets/
 * and pushing to window.CSS_SNIPPETS (see README).
 */
window.CSS_SNIPPETS = window.CSS_SNIPPETS || [];

window.CSS_SNIPPETS.push(
    {
        name: 'CSS Variables',
        items: [
            { label: '--primary',    value: 'var(--primary)' },
            { label: '--secondary',  value: 'var(--secondary)' },
            { label: '--accent',     value: 'var(--accent)' },
            { label: '--bg',         value: 'var(--bg-color)' },
            { label: '--bg-alt',     value: 'var(--bg-color-alt)' },
            { label: '--text',       value: 'var(--text-color)' },
            { label: '--text-muted', value: 'var(--text-muted)' },
            { label: '--border',     value: 'var(--border-color)' },
            { label: '--radius',     value: 'var(--border-radius)' },
            { label: '--shadow',     value: 'var(--box-shadow)' },
            { label: '--font',       value: 'var(--font-family)' },
            { label: '--font-mono',  value: 'var(--font-mono)' },
            { label: '--gap',        value: 'var(--spacing)' },
            { label: '--gap-sm',     value: 'var(--spacing-sm)' },
            { label: '--gap-lg',     value: 'var(--spacing-lg)' }
        ]
    },
    {
        name: ':root Template',
        items: [
            {
                label: ':root light',
                value: ':root {\n    --primary: #0969da;\n    --secondary: #6c757d;\n    --accent: #e85aad;\n    --bg-color: #ffffff;\n    --bg-color-alt: #f6f8fa;\n    --text-color: #24292f;\n    --text-muted: #656d76;\n    --border-color: #d0d7de;\n    --border-radius: 6px;\n    --box-shadow: 0 1px 3px rgba(0,0,0,0.12);\n    --font-family: -apple-system, \'Segoe UI\', sans-serif;\n    --font-mono: \'Fira Code\', monospace;\n    --spacing: 16px;\n    --spacing-sm: 8px;\n    --spacing-lg: 32px;\n}\n'
            },
            {
                label: ':root dark',
                value: ':root {\n    --primary: #58a6ff;\n    --secondary: #8b949e;\n    --accent: #f778ba;\n    --bg-color: #0d1117;\n    --bg-color-alt: #161b22;\n    --text-color: #c9d1d9;\n    --text-muted: #8b949e;\n    --border-color: #30363d;\n    --border-radius: 6px;\n    --box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n    --font-family: -apple-system, \'Segoe UI\', sans-serif;\n    --font-mono: \'Fira Code\', monospace;\n    --spacing: 16px;\n    --spacing-sm: 8px;\n    --spacing-lg: 32px;\n}\n'
            }
        ]
    },
    {
        name: 'Layout Snippets',
        items: [
            { label: 'Flexbox center', value: 'display: flex;\n    align-items: center;\n    justify-content: center;' },
            { label: 'Flex column',     value: 'display: flex;\n    flex-direction: column;\n    gap: 16px;' },
            { label: 'Grid auto-fill',  value: 'display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;' },
            { label: 'Grid 2-col',      value: 'display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;' },
            { label: 'Grid 3-col',      value: 'display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;' },
            { label: 'Absolute fill',   value: 'position: absolute;\n    inset: 0;' },
            { label: 'Sticky top',      value: 'position: sticky;\n    top: 0;\n    z-index: 10;' }
        ]
    },
    {
        name: 'Effects',
        items: [
            { label: 'Shadow sm',     value: 'box-shadow: 0 1px 2px rgba(0,0,0,0.05);' },
            { label: 'Shadow md',     value: 'box-shadow: 0 4px 6px rgba(0,0,0,0.1);' },
            { label: 'Shadow lg',     value: 'box-shadow: 0 10px 25px rgba(0,0,0,0.15);' },
            { label: 'Transition',    value: 'transition: all 0.2s ease;' },
            { label: 'Truncate',      value: 'overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;' },
            { label: 'Smooth scroll', value: 'scroll-behavior: smooth;' },
            { label: 'Backdrop blur', value: 'backdrop-filter: blur(8px);\n    -webkit-backdrop-filter: blur(8px);' }
        ]
    },
    {
        name: 'Media Queries',
        items: [
            { label: '@mobile',          value: '@media (max-width: 480px) {\n    \n}' },
            { label: '@tablet',          value: '@media (max-width: 768px) {\n    \n}' },
            { label: '@laptop',          value: '@media (max-width: 1024px) {\n    \n}' },
            { label: '@desktop',         value: '@media (min-width: 1280px) {\n    \n}' },
            { label: '@dark-mode',       value: '@media (prefers-color-scheme: dark) {\n    \n}' },
            { label: '@reduced-motion',  value: '@media (prefers-reduced-motion: reduce) {\n    \n}' },
            { label: '@print',           value: '@media print {\n    \n}' }
        ]
    },
    {
        name: 'Emoji',
        items: [
            { label: '✅', value: '✅' }, { label: '❌', value: '❌' },
            { label: '⚠️', value: '⚠️' }, { label: 'ℹ️', value: 'ℹ️' },
            { label: '🔥', value: '🔥' }, { label: '⭐', value: '⭐' },
            { label: '💡', value: '💡' }, { label: '🎨', value: '🎨' },
            { label: '📝', value: '📝' }, { label: '🚀', value: '🚀' },
            { label: '👍', value: '👍' }, { label: '📂', value: '📂' },
            { label: '🔗', value: '🔗' }, { label: '📌', value: '📌' },
            { label: '→',  value: '→' },  { label: '←',  value: '←' },
            { label: '↑',  value: '↑' },  { label: '↓',  value: '↓' },
            { label: '•',  value: '•' },  { label: '—',  value: '—' }
        ]
    }
);
