<template>

  <div class="s01p01" style="margin-top: 50px">

  

    <!-- .container is main centered wrapper -->
  <div class="container">
  <div class="row">
  <div class="col s12">
  <h2>Section 01 - Page 1</h2>
  </div>
  </div>

    <div class="row">
     
      <div class="col s6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui leo. Quisque consequat dolor sem, vel sollicitudin risus venenatis id. Aliquam sit amet gravida urna. Suspendisse tempor dui eu libero fringilla, eget molestie arcu sodales. Vivamus porta eros a ipsum finibus, maximus auctor nisl ornare. Nunc pharetra volutpat dictum. In hac habitasse platea dictumst. Curabitur urna eros, elementum sit amet pretium nec, bibendum at neque. Duis est orci, commodo eget enim vitae, dictum condimentum elit. Mauris tempus venenatis nunc, vitae luctus tortor feugiat sollicitudin.
      </div>
      <div class="col s6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui leo. Quisque consequat dolor sem, vel sollicitudin risus venenatis id. Aliquam sit amet gravida urna. Suspendisse tempor dui eu libero fringilla, eget molestie arcu sodales. Vivamus porta eros a ipsum finibus, maximus auctor nisl ornare. Nunc pharetra volutpat dictum. In hac habitasse platea dictumst. Curabitur urna eros, elementum sit amet pretium nec, bibendum at neque. Duis est orci, commodo eget enim vitae, dictum condimentum elit. Mauris tempus venenatis nunc, vitae luctus tortor feugiat sollicitudin.
      </div>

      
</div>




<div class="row">
<div class="col s12">
    <div id="container1" class="hc"></div>
  
</div>
</div>

 <div class="row">
     
      <div class="col s6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui leo. Quisque consequat dolor sem, vel sollicitudin risus venenatis id. Aliquam sit amet gravida urna. Suspendisse tempor dui eu libero fringilla, eget molestie arcu sodales. Vivamus porta eros a ipsum finibus, maximus auctor nisl ornare. Nunc pharetra volutpat dictum. In hac habitasse platea dictumst. Curabitur urna eros, elementum sit amet pretium nec, bibendum at neque. Duis est orci, commodo eget enim vitae, dictum condimentum elit. Mauris tempus venenatis nunc, vitae luctus tortor feugiat sollicitudin.
      </div>
      <div class="col s6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui leo. Quisque consequat dolor sem, vel sollicitudin risus venenatis id. Aliquam sit amet gravida urna. Suspendisse tempor dui eu libero fringilla, eget molestie arcu sodales. Vivamus porta eros a ipsum finibus, maximus auctor nisl ornare. Nunc pharetra volutpat dictum. In hac habitasse platea dictumst. Curabitur urna eros, elementum sit amet pretium nec, bibendum at neque. Duis est orci, commodo eget enim vitae, dictum condimentum elit. Mauris tempus venenatis nunc, vitae luctus tortor feugiat sollicitudin.
      </div>

      
</div>


<div class="row">
<div class="col s12">
    <div id="container2" class="hc"></div>
    
</div>
</div>


 <div class="row">
     
      <div class="col s6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui leo. Quisque consequat dolor sem, vel sollicitudin risus venenatis id. Aliquam sit amet gravida urna. Suspendisse tempor dui eu libero fringilla, eget molestie arcu sodales. Vivamus porta eros a ipsum finibus, maximus auctor nisl ornare. Nunc pharetra volutpat dictum. In hac habitasse platea dictumst. Curabitur urna eros, elementum sit amet pretium nec, bibendum at neque. Duis est orci, commodo eget enim vitae, dictum condimentum elit. Mauris tempus venenatis nunc, vitae luctus tortor feugiat sollicitudin.
      </div>
      <div class="col s6">
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
        name: 's01p01',
        mounted: function() {
            Highcharts.chart('container1', hc1);
            Highcharts.chart('container2', hc2);
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
    
    .hc {
        margin-top: 50px;
        margin-bottom: 150px
    }
    
    .hc.last {
        margin-bottom: 50px
    }
</style>