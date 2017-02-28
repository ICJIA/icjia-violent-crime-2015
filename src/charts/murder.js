const hc103_chart = {
    data: {
        table: 'hc103_table'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Data extracted from a HTML table in the page'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Units'
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
}

const hc103_table = `
    <table id="hc103_table" class="ordered striped">
    <thead>
        <tr>
            <th></th>
            <th>Jane</th>
            <th>John</th>
        </tr>
    </thead>
    <tbody>
     <tr>
            <th>Apples</th>
            <td>3000</td>
            <td>4000</td>
        </tr>
        <tr>
            <th>Pears</th>
            <td>2000</td>
            <td>0</td>
        </tr>
        <tr>
            <th>Plums</th>
            <td>5000</td>
            <td>11000</td>
        </tr>
        <tr>
            <th>Bananas</th>
            <td>1000</td>
            <td>1000</td>
        </tr>
        <tr>
            <th>Oranges</th>
            <td>2000</td>
            <td>4000</td>
        </tr>
    </tbody>
</table>`

export { hc103_table, hc103_chart};