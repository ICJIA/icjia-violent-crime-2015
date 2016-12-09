<template>
<div>
<div class="graphic-container z-depth-2">
<div :id="chartId" style="padding-left: 20px; padding-right: 20px; margin: 0 auto;" ></div>
<div v-html="table" style="margin-top: 30px;"></div>
</div>

</div>
</template>

<script>
 var utils = require('../charts/utils')
 var Highcharts = require('highcharts');
    require('highcharts/modules/data')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    export default {
        props: ['chart','chartId','table','tableId'],
        mounted: function() {
            let tableId = this.tableId
            Highcharts.chart(this.chartId, this.chart );
            utils.cellFormat(this.tableId)
            $(document).ready(function() {
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