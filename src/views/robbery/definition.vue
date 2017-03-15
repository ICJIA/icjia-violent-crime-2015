<template>

  <section>

      <div id="wrapper">

          <!-- Sidebar -->
          <!-- Sidebar -->
          <sidebar :segment="segment" />

          <!-- Page Content -->

          <div id="page-content-wrapper">

              <div id="page-context">
                <segment-header :segment="segment" />
                <div class="row">
                <div class="col-md-12">
                  <h1 id="definition" class="upper page-head">Definition</h1>
                </div>
              </div>
                  <div class="row">
                      <div class="col-lg-12">
                        <!-- Main content here -->
                        <p>In Illinois, robbery is defined as the taking or attempting
                           to take anything of value from the care,

                           custody, or control of a person or persons by force,
                            threat of force, violence, and/or putting the victim in fear
                             [720 ILCS 5/18].  Aggravated robbery occurs when the perpetrator either falsely indicates that they have a dangerous weapon while committing the crime, or when it cannot be determined whether the perpetrator had a weapon at the time of the incident. Armed robbery occurs if, during the commission of the robbery, the perpetrator has a dangerous weapon on or about his person. Vehicular hijacking involves the taking of a motor vehicle from another through the use or threat of force.</p>

<p>Law enforcement agencies are to report to the Illinois Uniform Crime Reporting (I-UCR) program occurrences of robbery, armed robbery, vehicular hijacking, aggravated vehicular hijacking, and aggravated robbery. <br>
<em>Source: Illinois State Police Uniform Crime Report</em></p>
<citation />
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
import Citation from 'components/Citation'
import RenderChart from 'components/RenderChart'
import RenderMap from 'components/RenderMap'
import MyFooter from 'components/Footer.vue'
// Datatables install with webpack: https://gist.github.com/marcstober/c34bb4bdf7ef622cb24d6675723749bd
// https://datatables.net/forums/discussion/32542/datatables-and-webpack
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import SegmentHeader from 'components/SegmentHeader'


export default {
    name: 'RobberyDefinition',

    mounted () {
      this.$ga.trackPage(this.$route.path,'ICJIA | ' + this.title)
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
        MyFooter,
        SegmentHeader,
        Citation

    },
    metaInfo() {
    return {
      title: this.title

    }
  },
    data() {
        return {
            title: 'Robbery -- Definition',
            displayTable: true,
            segment: 'robbery'

        }
    }
}
</script>
<style>

</style>
