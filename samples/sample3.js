window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: 'Tables',
    html: `
        <h1>Tables</h1>

        <h2>Simple Table</h2>
        <table>
            <thead>
                <tr><th>Name</th><th>Role</th><th>Status</th></tr>
            </thead>
            <tbody>
                <tr><td>Alice</td><td>Developer</td><td>Active</td></tr>
                <tr><td>Bob</td><td>Designer</td><td>Active</td></tr>
                <tr><td>Carol</td><td>PM</td><td>On leave</td></tr>
                <tr><td>Dave</td><td>QA</td><td>Active</td></tr>
            </tbody>
        </table>

        <h2>Table with Footer</h2>
        <table>
            <thead>
                <tr><th>Product</th><th>Qty</th><th>Price</th></tr>
            </thead>
            <tbody>
                <tr><td>Widget A</td><td>10</td><td>€ 5.00</td></tr>
                <tr><td>Widget B</td><td>25</td><td>€ 3.50</td></tr>
                <tr><td>Widget C</td><td>8</td><td>€ 12.00</td></tr>
            </tbody>
            <tfoot>
                <tr><td colspan="2"><strong>Total</strong></td><td><strong>€ 183.50</strong></td></tr>
            </tfoot>
        </table>
    `
});
