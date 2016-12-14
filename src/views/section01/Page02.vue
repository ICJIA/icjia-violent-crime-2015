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

  <div class="carousel carousel-slider center" data-indicators="true">
    <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2">button</a>
    </div>
    <div class="carousel-item red white-text" href="#one!">
      <h2>First Panel</h2>
      <p class="white-text">This is the first panel</p>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">This is the second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <h2>Third Panel</h2>
      <p class="white-text">This is the third panel</p>
    </div>
    <div class="carousel-item blue white-text" href="#four!">
      <h2>Fourth Panel</h2>
      <p class="white-text">This is the fourth panel</p>
    </div>
  </div>
        

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
    name: 'S01P02',
    methods: {
        
    },
    
    components: {
        
        RenderChart
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 02',
            displayTable: true,
        }
    }
}
</script>

