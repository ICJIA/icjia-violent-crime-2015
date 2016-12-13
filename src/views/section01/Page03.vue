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
        chart="hc003_chart"  
        table="hc003_table"
       >
    </render-chart>

 <render-chart
        chart="hc004_chart"  
        table="hc004_table" 
        
       >
    </render-chart>

    <div v-phtext:1p7s></div>

  <render-chart
        chart="hc005_chart"  
    >
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

export default {
    name: 'S01P03',
    methods: {
        
    },
    components: {
        
        RenderChart
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 03',
            displayTable: true,
        }
    }
}
</script>

