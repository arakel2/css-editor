window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: 'Navigation',
    html: `
        <nav class="navbar">
            <div class="nav-brand">MySite</div>
            <ul class="nav-links">
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <h1>Navigation Patterns</h1>
        <p>Style the navbar above, then try the breadcrumb and pagination below.</p>

        <h2>Breadcrumb</h2>
        <nav class="breadcrumb">
            <a href="#">Home</a> /
            <a href="#">Products</a> /
            <span>Widget Pro</span>
        </nav>

        <h2>Pagination</h2>
        <nav class="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" class="active">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">&raquo;</a>
        </nav>

        <h2>Tag List</h2>
        <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Flexbox</span>
            <span class="tag">Grid</span>
        </div>
    `
});
