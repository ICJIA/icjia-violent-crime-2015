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
                      <div class="col-lg-12">


                        <h1 id="definition" class="upper page-head">Definition</h1>

<p>In Illinois, criminal sexual assault [720 ILCS 5/11-0.1], or rape, is defined as the forcible commission of any sex act against another person or the commission of any sex act against a person who is unable to consent. Physical resistance is not required on the part of the victim to demonstrate lack of consent.</p>

<p>Data for this analysis was collected from FBI and Illinois Uniform Crime Reports, Illinois State Police Criminal History Records Information (CHRI) System, and the Illinois Department of Corrections (IDOC). Rape offenses include criminal sexual assault, aggravated criminal sexual assault, predatory criminal sexual assault of a child, and criminal sexual assault with an object.</p>

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
    name: 'RapeDefinitions',

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
        Citation,
        SegmentHeader

    },
    metaInfo() {
    return {
      title: this.title

    }
  },
    data() {
        return {
            title: 'Rape -- Definition',
            displayTable: true,
            segment: 'rape'

        }
    }
}
</script>
<style>

</style>
