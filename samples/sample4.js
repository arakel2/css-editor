window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Forms",
    html: `
        <h1>Forms</h1>

        <form onsubmit="return false">

            <fieldset>
                <legend>Personal Information</legend>

                <p>
                    <label for="f-name">Name <span style="color:red">*</span></label><br>
                    <input type="text" id="f-name" placeholder="Your full name" required style="width:100%">
                </p>

                <p>
                    <label for="f-email">Email <span style="color:red">*</span></label><br>
                    <input type="email" id="f-email" placeholder="you@example.com" required style="width:100%">
                </p>

                <p>
                    <label for="f-url">Website</label><br>
                    <input type="url" id="f-url" placeholder="https://yoursite.com" style="width:100%">
                </p>

                <p>
                    <label for="f-password">Password</label><br>
                    <input type="password" id="f-password" placeholder="Enter password" style="width:100%">
                </p>
            </fieldset>

            <fieldset>
                <legend>Preferences</legend>

                <p>
                    <label for="f-topic">Topic</label><br>
                    <select id="f-topic" style="width:100%">
                        <option value="">— Please choose —</option>
                        <option>General inquiry</option>
                        <option>Bug report</option>
                        <option>Feature request</option>
                    </select>
                </p>

                <p>
                    <label for="f-multi">Skills (multi-select)</label><br>
                    <select id="f-multi" multiple size="4" style="width:100%">
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>JavaScript</option>
                        <option>Python</option>
                        <option>Rust</option>
                    </select>
                </p>

                <p>
                    <label>Priority</label><br>
                    <label><input type="radio" name="priority" value="low"> Low</label>&ensp;
                    <label><input type="radio" name="priority" value="medium" checked> Medium</label>&ensp;
                    <label><input type="radio" name="priority" value="high"> High</label>
                </p>

                <p>
                    <label>Notifications</label><br>
                    <label><input type="checkbox" checked> Email alerts</label><br>
                    <label><input type="checkbox"> SMS alerts</label><br>
                    <label><input type="checkbox"> Push notifications</label>
                </p>
            </fieldset>

            <fieldset>
                <legend>Additional Inputs</legend>

                <p>
                    <label for="f-date">Date</label><br>
                    <input type="date" id="f-date">
                </p>

                <p>
                    <label for="f-color">Favorite Color</label><br>
                    <input type="color" id="f-color" value="#0969da">
                </p>

                <p>
                    <label for="f-range">Satisfaction: <output id="f-range-val">50</output>%</label><br>
                    <input type="range" id="f-range" min="0" max="100" value="50"
                           oninput="document.getElementById('f-range-val').textContent=this.value"
                           style="width:100%">
                </p>

                <p>
                    <label for="f-file">Upload a file</label><br>
                    <input type="file" id="f-file">
                </p>

                <p>
                    <label for="f-search">Search</label><br>
                    <input type="search" id="f-search" placeholder="Search…" style="width:100%">
                </p>
            </fieldset>

            <fieldset>
                <legend>Message</legend>

                <p>
                    <label for="f-message">Your message</label><br>
                    <textarea id="f-message" rows="4" placeholder="Write something…" style="width:100%"></textarea>
                </p>
            </fieldset>

            <fieldset>
                <legend>Disabled &amp; Readonly States</legend>

                <p>
                    <label for="f-disabled">Disabled input</label><br>
                    <input type="text" id="f-disabled" value="Cannot edit this" disabled style="width:100%">
                </p>

                <p>
                    <label for="f-readonly">Readonly input</label><br>
                    <input type="text" id="f-readonly" value="Read only value" readonly style="width:100%">
                </p>
            </fieldset>

            <p style="margin-top:1em;">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
                <button type="button" disabled>Disabled Button</button>
            </p>

        </form>
    `,
});
