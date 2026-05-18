window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Media",
    html: `
        <h1>Media Elements</h1>

        <h2>Standalone Image</h2>
        <p>A simple image with max-width constraint:</p>
        <img src="samples/images/img01.webp" alt="Sample landscape photograph">

        <h2>Figure with Caption</h2>
        <figure>
            <img src="samples/images/img02.webp" alt="Sample detail photograph">
            <figcaption>Fig. 1 — A descriptive caption explaining what this image shows.
                        Captions should support <a href="#">links</a> and <em>emphasis</em>.</figcaption>
        </figure>

        <h2>Image Grid</h2>
        <div class="image-grid">
            <figure>
                <img src="samples/images/img03.webp" alt="Grid image 1">
                <figcaption>Image One</figcaption>
            </figure>
            <figure>
                <img src="samples/images/img04.webp" alt="Grid image 2">
                <figcaption>Image Two</figcaption>
            </figure>
            <figure>
                <img src="samples/images/img05.webp" alt="Grid image 3">
                <figcaption>Image Three</figcaption>
            </figure>
        </div>

        <h2>Picture Element</h2>
        <picture>
            <source srcset="samples/images/img06.webp" media="(min-width: 600px)">
            <img src="samples/images/img07.webp" alt="Responsive image with picture element">
        </picture>

        <h2>Audio</h2>
        <audio controls>
            <source src="samples/media/sample.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>

        <h2>Video</h2>
        <video controls width="100%" poster="samples/media/img01.jpg">
            <source src="samples/media/sample.mp4" type="video/mp4">
            Your browser does not support the video element.
        </video>

        <h2>Embedded Content (iframe)</h2>
        <div class="embed-container">
            <iframe src="about:blank" width="100%" height="200"
                    style="border:1px solid #d0d7de; border-radius:6px; background:#f6f8fa;"
                    title="Embedded content placeholder"></iframe>
        </div>
    `,
});
