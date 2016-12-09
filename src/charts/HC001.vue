<template>
<div class="rendered-graphic">
<div>
    <render-chart :chart="chart" :target="target" :tableData="tableData" tableId="hc003-table"></render-chart>
</div>

</div>
</template>

<script>
var utils = require( './utils' )
import RenderChart from '../components/RenderChart.vue'
import {
	hc003_chart,
	hc003_data
} from './HC003.js'
export default {
	name: 'HC003',
	data() {
		return {
			chart: {},
			target: 'hc003-chart',
            tableId: 'hc003-table',
            tableData: {}
		}
	},
	created: function() {
		this.chart = hc003_chart;
		this.tableData = hc003_data;
	},
	components: {
		RenderChart
	},
	mounted: function() {}
}  
</script>