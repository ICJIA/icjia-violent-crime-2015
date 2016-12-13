const hc003_chart = {
    data: {
        table: 'hc003_table'
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


const hc003_table = `
    <table id="hc003_table" class="ordered striped">
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





const hc004_chart = {
    data: {
        table: 'hc004_table'
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


const hc004_table = `
    <table id="hc004_table" class="ordered striped">
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


const hc005_chart = {
    title: {
        text: 'Monthly Average Temperature',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Tokyo',
        data: [2000, 2323, 2323, 4000]
    }, {
        name: 'New York',
        data: [7000, 8000, 9234, 2343]
    }, {
        name: 'Berlin',
        data: [1000, 999, 1345, 1245]
    }, {
        name: 'London',
        data: [3000, 4534, 2342, 2323, 3244]
    }]
}

const hc006_chart = {

}




export { hc003_table, hc003_chart, hc004_table, hc004_chart, hc005_chart, hc006_chart };