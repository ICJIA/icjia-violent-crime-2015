<template>
<div class="app" style="margin-top: 50px"> 
   <!-- app root --> 
   <div class="container"> 
    <div class="row"> 
     <div class="col s12">
      <div class="center"> 
       <h3 class="light pageTitle">{{pageTitle}}</h3> 
      </div>
      <div v-phtext:1p7s></div>
      <render-chart 
        :chart="getGraphicElements('hc003_chart')" 
        chartId="hc003_chart" 
        :table="getGraphicElements('hc003_table')" 
        tableId="hc003_table">
    </render-chart>

    <div v-phtext:1p7s></div>

    <render-chart 
        :chart="getGraphicElements('hc004_chart')" 
        chartId="hc004_chart" 
        :table="getGraphicElements('hc004_table')" 
        tableId="hc004_table">
    </render-chart>

    <div v-phtext:2p3s></div>


     </div> 
    </div> 
   </div> 

   <!-- //app root -->
  </div>
</template>

<script>

import RenderChart from '../../components/RenderChart.vue'

import {
    hc003_chart,
    hc003_table,
    hc004_chart,
    hc004_table,
}
from '../../charts/HC003.js'

const graphicElements = {
    hc004_chart,
    hc004_table,
    hc003_chart,
    hc003_table,
}
export default {
    name: 'S01P02',
    methods: {
        getGraphicElements(key) {
                return graphicElements[key]
            },

    },
    components: {
        RenderChart
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01'
        }
    }
}
</script>

