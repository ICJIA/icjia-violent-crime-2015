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
            this.chartId = 'hc' + utils.guid();
            this.hcTable = this.table
        },
        mounted: function() {

            this.tableData = this.table
            if (this.table === 'default') {
                this.tableId = 'hc' + utils.guid()
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
                this.hcTable = utils.renderTable(this.chart, this.tableId)
            }
            
            // Set context for tableId (for document ready below)
            let tableId = this.tableId
        
            $(document).ready(function() {
                // call Datatables to render
                $('#' + tableId).DataTable(utils.dtConfig);
            });
        },

       methods: {
        getGraphicElements(key) {
            // return the actual object
                return graphicElements[key]
            },

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