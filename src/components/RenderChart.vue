<template>
<div>
<div class="graphic-container z-depth-2">
<div :id="chartId" style="padding-left: 20px; padding-right: 20px; margin: 0 auto;" ></div>
<div v-html="hcTable" style="margin-top: 30px;"></div>
</div>

</div>
</template>

<script>
    const utils = require('../charts/utils')
    const Highcharts = require('highcharts');
    require('highcharts/modules/data')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    require('highcharts/modules/map')(Highcharts);
    export default {
        props: {
            chart: {
                type: Object,
                required: true
            },
            table: {
                type: String,
                required: false,
                default: 'default'
            }
        },
        created() {
            this.chartId = 'hc' + this.guid();
            this.hcTable = this.table
        },
        mounted: function() {

            this.tableData = this.table
            if (this.table === 'default') {
                this.tableId = 'hc' + this.guid()
                this.needToRenderTable = true
            } else {
                this.tableId = this.chart.data.table
                this.needToRenderTable = false
            }

            let chartId = this.tableId + '_chart'

            // Render chart
            Highcharts.chart(this.chartId, this.chart);

            // If no table, render one 
            if (this.needToRenderTable) {
                this.renderTable()
            }
            
            // Set context for tableId (for document ready below)
            let tableId = this.tableId
        
            $(document).ready(function() {
                // call Datatables to render
                $('#' + tableId).DataTable(utils.dtConfig);
            });
        },

        methods: {
            renderTable() {
                    this.hcTable = 'Render table here'
                    let hc = this.chart
                    let series = '<th></th>'
                    let row = '<tr>';
                    let tSeries = '';
                    // read chart data --> convert to table
                    for (let i = 0; i < hc.series.length; i++) {
                        series = series + `<th> ${hc.series[i].name}</th>`
                    }
                    for (let i = 0; i < hc.series[0].data.length; i++) {
                        row = row + `<td class="strong">${hc.xAxis.categories[i]}</td>`
                        for (let j = 0; j < hc.series.length; j++) {
                            // add comma to large numbers
                            let tmp = hc.series[j].data[i]
                            row = row + `<td> ${tmp} </td>`
                        }
                        row = row + `</tr>`
                    }

                    this.hcTable = `
                            <table id="${this.tableId}" class="ordered striped">
                                <thead>
                                    <tr>
                                        ${series}
                                    </tr>
                                </thead>
                                    <tbody>
                                    ${row}
                                    </tbody>
                            </table> `


                },
                guid() {
                    // generate unique id
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000)
                            .toString(16)
                            .substring(1);
                    }
                    return s4() + s4() + s4() + s4() + s4() + s4();
                }
        },
        watch : {},
        data() {
            return {
                uniqId: null,
                chartId: '',
                tableData: '',
                tableId: '',
                needToRenderTable: true,
                hcTable: ''
            }
        }
    }

</script>

<style>
table.dataTable tbody th, table.dataTable tbody td {
    padding: 13px 30px;
}
</style>