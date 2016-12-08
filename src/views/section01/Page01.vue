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


  <!--
  {{seriesData | formatNumber}}
  -->
  


    <div id="container2" class="hc z-depth-4"></div>

  
   
    
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
        update: function () {
           
            // this.seriesData = hc1.series[0].data;
        },
        mounted: function() {

            // Defer Highcharts render: http://jsfiddle.net/highcharts/8YVUb/

            Highcharts.chart('container1', hc1);
            Highcharts.chart('container2', hc2);
            

        //     (function (H) {
        //         function deferRender (proceed) {
        //     var series = this, 
        //     $renderTo = $(this.chart.container.parentNode);

        //     // It is appeared, render it
        //     if ($renderTo.is(':appeared') || !series.options.animation) {
        //     proceed.call(series);
            
        //     // It is not appeared, halt renering until appear
        //     } else  {
        //         $renderTo.appear(); // Initialize appear plugin
        //         $renderTo.on('appear', function () {
        //         proceed.call(series);
        //         });
        //         }
        //     };
        //     H.wrap(H.Series.prototype, 'render', deferRender);
    
        //  }(Highcharts));
            
            $('.carousel.carousel-slider').carousel({full_width: true});
            // var numeral = require('numeral');
            // console.log('Unformatted: ',JSON.stringify(this.seriesData))
            // var plusone = this.seriesData.map((n) => numeral(n).format('0,0'));
            // console.log('Formatted: ',JSON.stringify(plusone))
            
        },
        data() {
            return {
                pageTitle: 'Section 01 - Page 01',
                seriesData: [2000,3000,4000,5000]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
   
</style>