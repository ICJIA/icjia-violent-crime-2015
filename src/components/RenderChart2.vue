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

    // Import all the chart/table elements
    import * as section01Elements from '../charts/section01.js'
    import * as section02Elements from '../charts/section02.js'
    const graphicElements = Object.assign(section01Elements, section02Elements);

    export default {
        props: {
            chart: {
                type: String,
                required: true,
                default: 'undefined'
            },
            table: {
                type: String,
                required: false,
                default: ''
            }
        },
        created() {
             Object.size = function(obj) {
                var size = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) size++;
                }
                return size;
            };
            this.chartId = 'hc' + utils.guid();
            this.hcTable = graphicElements[this.table]
            this.hcChart = graphicElements[this.chart]
            this.tableData = this.table
            this.proceedToRender = Object.size(this.hcChart);


             if (this.table === '') {
                this.tableId = 'hc' + utils.guid()
                this.needToRenderTable = true
            } else {
                this.tableId = this.table
                this.needToRenderTable = false
            }
             this.chartId = this.tableId + '_chart'
        },
        mounted: function() {
            if (this.proceedToRender > 0 ) {
                // Render chart
                Highcharts.chart(this.chartId, this.hcChart);

                // If no table, render one 
                if (this.needToRenderTable) {
                    this.hcTable = utils.renderTable(this.hcChart, this.tableId)
                }
            
                // Set context for tableId (for document ready below)
                let tableId = this.tableId
        
                $(document).ready(function() {
                    // call Datatables to render
                    $('#' + tableId).DataTable(utils.dtConfig);
                });
            } else {
                this.hcTable = `
                <div class='center align' style='color: red; text-transform: uppercase; font-weight: 900; font-size: 24px; padding-bottom: 80px'>Chart not found: ${this.chart}</div>`
            }
        },

        methods: {},
        watch : {},
        data() {
            return {
                uniqId: null,
                chartId: '',
                tableData: '',
                tableId: '',
                needToRenderTable: true,
                hcTable: '',
                error: {},
                proceedToRender: 0
            }
        }
    }

</script>

<style>
table.dataTable tbody th, table.dataTable tbody td {
    padding: 13px 30px;
}
</style>