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
      
     <render-chart2 
        chart="hc003_chart"  
        table="hc003_table" 
       >
    </render-chart2>

 <render-chart2
        chart="hc004_chart"  
        table="hc004_table" 
       >
    </render-chart2>

    <div v-phtext:1p7s></div>

  <render-chart2
        chart="hc006_chart"  
    >
    </render-chart2>

    <div v-phtext:2p3s></div>


     </div> 
    </div> 
   </div> 

   <!-- //app root -->
  </div>
</template>

<script>


import RenderChart2 from '../../components/RenderChart2.vue'

export default {
    name: 'S01P01',
    methods: {
        
    },
    components: {
        
        RenderChart2
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01'
        }
    }
}
</script>

