window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: 'Forms',
    html: `
        <h1>Forms</h1>

        <form onsubmit="return false">
            <h2>Contact Form</h2>

            <p>
                <label for="name">Name</label><br>
                <input type="text" id="name" placeholder="Your name" style="width:100%">
            </p>

            <p>
                <label for="email">Email</label><br>
                <input type="email" id="email" placeholder="you@example.com" style="width:100%">
            </p>

            <p>
                <label for="topic">Topic</label><br>
                <select id="topic" style="width:100%">
                    <option>General inquiry</option>
                    <option>Bug report</option>
                    <option>Feature request</option>
                </select>
            </p>

            <p>
                <label for="message">Message</label><br>
                <textarea id="message" rows="4" placeholder="Your message…" style="width:100%"></textarea>
            </p>

            <p>
                <label><input type="checkbox"> I agree to the terms</label>
            </p>

            <p>
                <button type="submit">Send</button>
                <button type="reset">Reset</button>
            </p>
        </form>
    `
});
