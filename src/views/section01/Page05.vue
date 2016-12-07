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
   
    <div id="container1" class="hc" style=""></div>
    
  
</div>
</div>

 <div class="row">
     
      
<div v-phtext:1p7s></div>
      
</div>


<div class="row">
<div class="col s12">

    <div id="container2" class="hc"></div>
   
    
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
        
        name: 'S01P05',
        mounted: function() {
            Highcharts.chart('container1', hc1);
            Highcharts.chart('container2', hc2);
        },
        data() {
            return {
                pageTitle: 'Section 01 - Page 05'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
   
</style>