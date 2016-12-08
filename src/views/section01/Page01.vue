<template>

  <div class="app" style="margin-top: 50px">

  

    <!-- .container is main centered wrapper -->
  <div class="container">
  <div class="row">
  <div class="col s12">
  <div class="center">
  <h3 class="light">{{pageTitle}}</h3>
  </div>
  </div>
  </div>

    <div class="row">
     
       <div v-phtext:3p4s></div>

</div>




<div class="row">
<div class="col s12">
   
    <div id="container1" class="hc z-depth-4" style=""></div>
   
  
</div>
</div>

 <div class="row">
     
      
<div v-phtext:1p7s></div>
      
</div>


<div class="row">
<div class="col s12">

<div class="carousel carousel-slider center z-depth-4" data-indicators="true">
    
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

   <!-- <div id="container2" class="hc"></div>-->
   
    
</div>
</div>


 <div class="row">
     
      <div class="col s12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui leo. Quisque consequat dolor sem, vel sollicitudin risus venenatis id. Aliquam sit amet gravida urna. Suspendisse tempor dui eu libero fringilla, eget molestie arcu sodales. Vivamus porta eros a ipsum finibus, maximus auctor nisl ornare. Nunc pharetra volutpat dictum. In hac habitasse platea dictumst. Curabitur urna eros, elementum sit amet pretium nec, bibendum at neque. Duis est orci, commodo eget enim vitae, dictum condimentum elit. Mauris tempus venenatis nunc, vitae luctus tortor feugiat sollicitudin.
      </div>
      

      
</div>




    </div>



  </div>



  </div>
</template>

<script>
    var Highcharts = require('highcharts');
    require('highcharts/modules/data')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    
    import {
        
        hc1,
        hc2
    } from '../../charts/section01.js'
    
    export default {
        
        name: 'S01P01',
        created: function () {
        //$('.carousel.carousel-slider').carousel({full_width: true});
        this.seriesData = hc1.series[0].data;
        },
        mounted: function() {
            Highcharts.chart('container1', hc1);
            //Highcharts.chart('container2', hc2);
            $('.carousel.carousel-slider').carousel({full_width: true});
        },
        data() {
            return {
                pageTitle: 'Section 01 - Page 01',
                seriesData: []
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
   
</style>