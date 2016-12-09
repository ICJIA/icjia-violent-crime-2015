<template>
<div class="rendered-graphic">
<div>

    <render-chart 
        :chart="getGraphicElements('hc003_chart')" 
        chartId="hc003_chart" 
        :table="getGraphicElements('hc003_table')" 
        tableId="hc003_table">
    </render-chart>


    <render-chart 
        :chart="getGraphicElements('hc004_chart')" 
        chartId="hc004_chart" 
        :table="getGraphicElements('hc004_table')" 
        tableId="hc004_table">
    </render-chart>



     

</div>

</div>
</template>

<script>
var utils = require( './utils' )

import RenderChart from '../components/RenderChart.vue'


import {
	hc003_chart,
	hc003_table,
    hc004_chart,
	hc004_table,
   
} from './HC003.js'


let graphicElements = {
    hc004_chart,
    hc004_table,
    hc003_chart,
    hc003_table,
}




export default {
	name: 'HCRENDER',
	data() {
		return {
			chart: {},
			target: '',
            tableId: '',
            tableData: {}
		}
	},
    methods: {
        getGraphicElements (key) {
            
            console.log(graphicElements[key])
            return graphicElements[key]
        },

    },
	created: function() {
		
	},
	components: {
		RenderChart
	},
	mounted: function() {}
}  
</script>