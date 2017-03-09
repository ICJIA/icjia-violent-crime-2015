<template>

<section>

<div id="wrapper">
  <!-- Sidebar -->
  <sidebar :segment="segment" />

  <!-- Page Content -->
  <div id="page-content-wrapper">
      <div id="page-context">
          <div class="row">
            <div class="col-md-12">
              <h1 id="rates" class="upper page-head">Rates</h1>
            </div>
            <!-- <div class="col-md-2">

              <label class="switch-light" onclick="">
            <input type="checkbox" name="tableToggle" checked>
            <strong>
            <span style="text-transform: uppercase">Display Tables</span>
            </strong>
            <div style="height: 15px"></div>

            <span class="well">
            <span>Hide</span>
            <span>Show</span>
            <a class="btn btn-primary"></a>
            </span>
            </label>

            </div> -->

          </div>

          <div class="row">
            <div class="col-lg-12">
              <!-- Main content here -->

            </div>
</div>
<my-footer />
</div>
</div>
<!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

   <!-- //app root -->
 </section>
</template>

<script>
const utils = require('../../utils')

import Sidebar from 'components/Sidebar'
import MyFooter from 'components/Footer'
import RenderChart from 'components/RenderChart'
import RenderMap from 'components/RenderMap'

// Datatables install with webpack: https://gist.github.com/marcstober/c34bb4bdf7ef622cb24d6675723749bd
// https://datatables.net/forums/discussion/32542/datatables-and-webpack
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';


export default {
    name: 'Rape_Definitions',

    mounted () {
      $(document).ready(function() {


          // call Datatables to render
          $('#hc_Rape_def_table_100').DataTable(utils.dtConfig);
          $('#hc_Rape_def_table_200').DataTable(utils.dtConfig);
          $('#hc_Rape_def_table_300').DataTable(utils.dtConfig);
          $('#hc_Rape_def_table_400').DataTable(utils.dtConfig);


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
        RenderMap,
        MyFooter
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01',
            displayTable: true,
            segment: 'robbery'

        }
    }
}
</script>
<style scoped>


</style>
