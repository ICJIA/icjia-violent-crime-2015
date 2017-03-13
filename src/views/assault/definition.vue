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
                      <div class="col-md-12">


<p>Illinois law defines aggravated assault [720 ILCS 5.0/12-2] as when a person puts another person in reasonable apprehension of receiving a battery, with the intention of causing serious injury, or while using a weapon or an object used as a weapon. Aggravated battery [720 ILCS 5.0/12-3.05] is defined as when a person causes serious bodily harm to another person, makes physical contact while intending to cause serious harm, or makes physical contact while using a weapon or an object used as a weapon. </p>

<p>Law enforcement agencies are required to report to the Illinois Uniform Crime Reporting (I-UCR) program occurrences of aggravated battery, heinous battery, aggravated battery of a child, aggravated domestic battery, ritual mutilation, aggravated battery of a senior citizen, aggravated assault, attempted first degree murder, and attempted second degree murder in their jurisdictions. This data was collected and examined. <br>
<em>Source: Illinois State Police Uniform Crime Report</em></p>

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
import SegmentHeader from 'components/SegmentHeader'


export default {
    name: 'Murder_Definitions',

    mounted () {
      $(document).ready(function() {

        // $("#menu-toggle").click(function(e) {
        //     e.preventDefault();
        //     $("#wrapper").toggleClass("toggled");
        // });
          // call Datatables to render

      });

    },
    components: {

        Sidebar,
        RenderChart,
        RenderMap,
        MyFooter,
        SegmentHeader

    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01',
            displayTable: true,
            segment: 'assault'

        }
    }
}
</script>
<style>

</style>
