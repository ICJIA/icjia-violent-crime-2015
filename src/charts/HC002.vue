<template>
<div class="rendered-graphic">
<div>
    <render-chart :chart="chart" :target="target" :tableData="tableData" test="hc004-table"></render-chart>
</div>

</div>
</template>

<script>
var utils = require( './utils' )
import RenderChart from '../components/RenderChart.vue'
import {
	hc004_chart,
	hc004_data
} from './HC004.js'
export default {
	name: 'HC004',
	data() {
		return {
			chart: {},
			target: 'hc004-chart',
            tableId: 'hc004-table',
            tableData: ''
		}
	},
	created: function() {
		this.chart = hc004_chart;
		this.tableData = hc004_data;
	},
	components: {
		RenderChart
	},
	mounted: function() {}
}  
</script>