<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <sidebar :segment="segment" />

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div id="page-context">
          <div class="row">
            <div class="col-md-12">
              <h1 id="characteristics-of-murder-victims-and-reported-offenders"
              class="upper page-head">Characteristics</h1>
            </div>


          </div>
            <div class="row">
              <div class="col-lg-12">
                <!-- Main content here -->

              </div>

</div>

<my-footer />
</div>

</div>




</div>

</template>

<script>


import Sidebar from 'components/Sidebar'
import RenderChart from 'components/RenderChart.vue'
import RenderMap from 'components/RenderMap.vue'
import MyFooter from 'components/Footer'

export default {
    name: 'S01P02',
    methods: {

    },
    mounted () {
      $(document).ready(function() {
        $('input[name=tableToggle').change(function(){

            if($(this).is(':checked'))
              {
                  $('.hc-table').removeClass('hide')
                  //console.log('on')
              }
              else
              {
                  $('.hc-table').addClass('hide')
                  //console.log('off')
              }

    });

      });

    },
    components: {

        Sidebar,
        RenderChart,
        MyFooter

    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 02',
            displayTable: true,
            segment: 'robbery'
        }
    }
}
</script>
