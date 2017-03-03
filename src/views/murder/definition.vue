<template>

  <section>
      <div id="wrapper">

          <!-- Sidebar -->
          <!-- Sidebar -->
          <sidebar segment="murder" />

          <!-- Page Content -->
          <div id="page-content-wrapper">
              <div id="page-context">
                  <div class="row">
                      <div class="col-lg-12">

                        <!-- Rounded switch -->


                          <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>

                          <h1 id="definition" class="upper">Definition</h1>



                          <p>In Illinois, criminal homicide is charged as first degree murder, second degree murder, involuntary manslaughter or reckless homicide. First degree murder is defined as killing another person through an act which is intended to kill them, is likely to kill them, or while committing a forcible felony, such as a robbery or rape.
                              <br> Source: 720 ILCS 5/9-1</p>

                          <p>Second degree murder is defined as killing another person while acting under sudden intense passion resulting from the serious provocation by the person killed, or where the offender believes his or her actions to be justified and the belief is determined later by the criminal justice system not to be reasonable.
                              <br> Source: 720 ILCS 5/9-2</p>

                          <p>Involuntary manslaughter is defined as the unintentional killing of another person without justification, usually through an accident or reckless act; reckless homicide is the term applied to circumstances where the cause of death involved the driving of a motor vehicle.
                              <br> Source: 720 ILCS 7/9-3 </p>

                          <p>First and second degree murder data are available via the Illinois Uniform Crime Reporting (I-UCR) program. Here, murder is defined as the willful killing of one human being by another (first degree murder) or the killing of another person through gross negligence (second degree murder). Any death caused by injuries received in a fight, argument, quarrel, battery, or commission of a crime must be reported as a criminal homicide.
                              <br> Source: Illinois State Police Uniform Crime Report</p>



                      </div>
                  </div>
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
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

import RenderChart from '../../components/RenderChart.vue'
import RenderMap from '../../components/RenderMap.vue'
// Datatables install with webpack: https://gist.github.com/marcstober/c34bb4bdf7ef622cb24d6675723749bd
// https://datatables.net/forums/discussion/32542/datatables-and-webpack
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';


export default {
    name: 'Murder_Definitions',

    mounted () {
      $(document).ready(function() {

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
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
        Navbar,
        Sidebar,
        RenderChart,
        RenderMap
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01',
            displayTable: true,

        }
    }
}
</script>
<style>

</style>
