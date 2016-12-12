<template>
<div>
<div class="graphic-container z-depth-2">
<div :id="chartId" style="padding-left: 20px; padding-right: 20px; margin: 0 auto;" ></div>
<div v-html="table" style="margin-top: 30px;"></div>
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
        props: ['chart','chartId','table','tableId'],
        mounted: function() {

            // context switch (apparently) necessary for the document.ready function
            let tableId = this.tableId

            // Render chart
            Highcharts.chart(this.chartId, this.chart );

            // Add commas to numbers in table cells
            utils.cellFormat(this.tableId)

            $(document).ready(function() {
                // call Datatables to render
                $('#' + tableId).DataTable( utils.dtConfig );
            } );
        },
        data () {
            return {
           
        }
    }
}

</script>

<style>
table.dataTable tbody th, table.dataTable tbody td {
    padding: 13px 30px;
}
</style>