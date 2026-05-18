window.CSS_SAMPLES = window.CSS_SAMPLES || [];
window.CSS_SAMPLES.push({
    name: "Tables",
    html: `
        <h1>Tables</h1>

        <h2>Simple Table</h2>
        <table>
            <caption>Team Members</caption>
            <thead>
                <tr><th>Name</th><th>Role</th><th>Status</th></tr>
            </thead>
            <tbody>
                <tr><td>Alice</td><td>Developer</td><td>Active</td></tr>
                <tr><td>Bob</td><td>Designer</td><td>Active</td></tr>
                <tr><td>Carol</td><td>Project Manager</td><td>On leave</td></tr>
                <tr><td>Dave</td><td>QA Engineer</td><td>Active</td></tr>
                <tr><td>Eve</td><td>DevOps</td><td>Active</td></tr>
            </tbody>
        </table>

        <h2>Table with Footer</h2>
        <table>
            <thead>
                <tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr>
            </thead>
            <tbody>
                <tr><td>Widget A</td><td>10</td><td>&euro; 5.00</td><td>&euro; 50.00</td></tr>
                <tr><td>Widget B</td><td>25</td><td>&euro; 3.50</td><td>&euro; 87.50</td></tr>
                <tr><td>Widget C</td><td>8</td><td>&euro; 12.00</td><td>&euro; 96.00</td></tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"><strong>Grand Total</strong></td>
                    <td><strong>&euro; 233.50</strong></td>
                </tr>
            </tfoot>
        </table>

        <h2>Wide Table (horizontal scroll)</h2>
        <div style="overflow-x: auto;">
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Email</th>
                        <th>Department</th><th>Location</th><th>Start Date</th>
                        <th>Salary</th><th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td><td>Alice Johnson</td><td>alice@example.com</td>
                        <td>Engineering</td><td>Berlin</td><td>2022-03-15</td>
                        <td>&euro; 72,000</td><td>Active</td>
                    </tr>
                    <tr>
                        <td>002</td><td>Bob Smith</td><td>bob@example.com</td>
                        <td>Design</td><td>Munich</td><td>2021-07-01</td>
                        <td>&euro; 65,000</td><td>Active</td>
                    </tr>
                    <tr>
                        <td>003</td><td>Carol Williams</td><td>carol@example.com</td>
                        <td>Marketing</td><td>Hamburg</td><td>2023-01-10</td>
                        <td>&euro; 58,000</td><td>On leave</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
});
