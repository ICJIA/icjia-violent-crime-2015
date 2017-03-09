<template>

  <section>

      <div id="wrapper">

          <!-- Sidebar -->
          <!-- Sidebar -->
          <sidebar :segment="segment" />

          <!-- Page Content -->

          <div id="page-content-wrapper">

              <div id="page-context">
                <div class="col-md-12">
                  <h1 id="definition" class="upper page-head">Definition</h1>
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

import RenderChart from 'components/RenderChart'
import RenderMap from 'components/RenderMap'
import MyFooter from 'components/Footer.vue'
// Datatables install with webpack: https://gist.github.com/marcstober/c34bb4bdf7ef622cb24d6675723749bd
// https://datatables.net/forums/discussion/32542/datatables-and-webpack
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';


export default {
    name: 'Murder_Definitions',

    mounted () {
      $(document).ready(function() {

        // $("#menu-toggle").click(function(e) {
        //     e.preventDefault();
        //     $("#wrapper").toggleClass("toggled");
        // });
          // call Datatables to render
          $('#hc_M_def_table_100').DataTable(utils.dtConfig);
          $('#hc_M_def_table_200').DataTable(utils.dtConfig);
          $('#hc_M_def_table_300').DataTable(utils.dtConfig);
          $('#hc_M_def_table_350').DataTable(utils.dtConfig);
          $('#hc_M_def_table_400').DataTable(utils.dtConfig);
          $('#hc_M_def_table_450').DataTable(utils.dtConfig);
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
<style>

</style>
