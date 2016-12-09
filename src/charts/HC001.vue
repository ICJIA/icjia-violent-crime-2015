<template>

<div>

<div id="hc001-container" style="margin: 0 auto"></div>

<table id="hc001-table" class="bordered striped">
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
</table>





</div>
</template>

<script>
    var utils = require('./utils')
    var Highcharts = require('highcharts');
    require('highcharts/modules/data')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    
    
      export default {
        
        name: 'HC001',
        update: function () {

            
        },
        mounted: function() {
            Highcharts.chart('hc001-container', {
        data: {
            table: 'hc001-table'
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
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });

    utils.cellFormat('hc001-table')
    
    $(document).ready(function() {
        $('#hc001-table').DataTable();
    } );
        }
      }

</script>