<template>
<div>
    <div class="graphic-container z-depth-2">
        <div    :id="renderId"
                class="chart-container" ></div>

        <div    v-html="hcTable"
                style="margin-top: 30px;"></div>

        <div    v-html="error"
                style="margin-top: 30px;"></div>
    </div>
</div>
</template>

<script>
    const utils = require('../utils')
    const Highcharts = require('highcharts');

    require('highcharts/modules/data')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);

    // Datatables install with webpack: https://gist.github.com/marcstober/c34bb4bdf7ef622cb24d6675723749bd
    // https://datatables.net/forums/discussion/32542/datatables-and-webpack
    import dt from 'datatables.net';
    import 'datatables.net-dt/css/jquery.dataTables.css';

    // Import all the chart/table elements
    //import * as section01Elements from '../charts/section01.js'
    import * as murderElements from '../charts/murder.js'

    // merge everything
    //const graphicElements = Object.assign(section01Elements, murderElements);
    const graphicElements = murderElements;

    export default {
        props: {
            chart: {
                type: String,
                required: true,
                default: ''
            },
            table: {
                type: String,
                required: false,
                default: ''
            },
             displayTable: {
                type: String,
                required: false,
                default: 'true'
            },

        },
        created() {

           // generate unique ID for chart
            this.renderId = 'hc' + utils.guid();

            // put prop 'table' in new variable
            this.tableData = this.table

            // Check graphicElements object for a table based on prop 'tableData'
            this.hcTable = graphicElements[this.tableData]

            // Check graphicElements object for a chart based on prop 'chart'
            this.hcChart = graphicElements[this.chart]

            // Is a table already part of the chart?
             if (this.tableData === '') {
                    // if not, generate unique ID for the generated table
                    this.tableId = 'hc' + utils.guid()

                    // Yes, we need to manually render a table
                    this.needToRenderTable = true

                 } else {
                     // If table is included as part of chart, use the string in tableData
                    this.tableId = this.tableData

                    // So, no, we don't need to manually render a table
                    this.needToRenderTable = false

                }



        },
        mounted: function() {







            // Was there a chart object that matched 'chart' in props?
            this.readyToRender = utils.parseBool(utils.objSize (this.hcChart))

            // If true -- we're ready to render
            if (this.readyToRender) {

                // Render chart
                Highcharts.chart(this.renderId, this.hcChart);

                // Do we display a table?
                if (!utils.parseBool(this.displayTable)) {



                    // hide table if prop 'displayTable' === true
                    $('#' + this.tableId).addClass('hideTable')

                    // Will also prevent a table from being generated if the chart doesn't have one

                } else {
                    // Otherwise, display table (or render it if doesn't exist),
                    // then format it with Datatables

                    // Set context for tableId (for document.ready below)
                    let tableId = this.tableId

                    $(document).ready(function() {
                        // call Datatables to render
                        $('#' + tableId).DataTable(utils.dtConfig);
                    });

                     // If no table, we need to render one
                    if (this.needToRenderTable) {
                        this.hcTable = utils.renderTable(this.hcChart, this.tableId)
                    }
                }
            } else {
                // If, however, we're not readyToRender -- display error message
                // Chart object not found in /charts/xxxx.js files
                this.error = `
                <div class='center align' style='color: red; text-transform: uppercase; font-weight: 900; font-size: 24px; padding-bottom: 80px'>Chart not found: ${this.chart}</div>`
            }
        },

        methods: {},
        watch : {},
        data() {
            return {
                uniqId: null,
                renderId: '',
                tableData: '',
                tableId: '',
                needToRenderTable: true,
                hcTable: '',
                error: {},
                readyToRender: false,
                error: ''
            }
        }
    }

</script>

<style>
table.dataTable tbody th, table.dataTable tbody td {
    padding: 13px 30px;
}

.strong {font-weight: 700}
.hideTable {display: none}
.chart-container {padding-left: 20px; padding-right: 20px; margin: 0 auto;}
</style>
