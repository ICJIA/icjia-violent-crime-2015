<template>
<div class="app">
   <!-- app root -->
   <div id="wrapper">
     <!-- Sidebar -->
    <sidebar segment="murder" />

     <!-- Page Content -->
     <div id="page-content-wrapper">
         <div id="page-context">
             <div class="row">
                 <div class="col-lg-12">
                     <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
   <h1 id="convictions" class="upper">Convictions</h1>

<p>Outcome information on arrest incidents that resulted in a court case is also entered into CHRI by circuit court clerks. Since murder cases can take years to resolve, court disposition information for 2012, 2013, and 2014 were examined to provide a more complete picture of murder case outcomes. </p>

<p>Researchers were able to find records for 1,538 court cases for murder that were adjudicated in Illinois criminal courts between 2012 and 2014. Of those, at least half resulted in a guilty verdict.</p>


<div class="card spacerTop50">
  <div class="card-block">

<h3 id="court-dispositions-on-murder-cases-2012-2014-n15381">Court Dispositions on Murder Cases, 2012-2014 (n=1,538)<a href="#fn:13" id="fnref:13" title="See footnote" class="footnote">1</a></h3>

<!-- <p>hc_M_def_chart_1200 <a href="http://jsfiddle.net/liamhanninen/m4qdgqec/">http://jsfiddle.net/liamhanninen/m4qdgqec/</a></p> -->
<render-chart
       chart="hc_M_def_chart_1200"
       displayTable = "false"
      >  </render-chart>
<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data, 2012-2014</em></p>

</div>
</div>

<div class="footnotes"><hr><ol><li id="fn:13"><strong>Disposition</strong>: Outcome/Decision/Ruling;  <br>
<strong>Nolle Prosequi</strong>: Latin term which essentially means the prosecutor will no longer pursue the charges; <br>
<strong>Other</strong>: No Bill, Death Suggested/Cause Abated, Charge Amended/Reduced, Merged with Another Offense, Forfeit Pending, Unfit to Stand Trial, Mistrial, Warrant Issued, Warrant Quashed/Withdrawn, Modified/Trial Court, Vacated/Trial Court, Probation Terminated, Reversed/Reviewing Court, Remanded/Reviewing Court, Modified/Reviewing Court, Vacated/Reviewing Court <a href="#fnref:13" title="Return to article" class="reversefootnote">↩</a></li></ol></div>

</div>

</div>
</div>
</div>
</div>
</div>
   <!-- //app root -->
  </div>
</template>

<script>

import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import RenderChart from '../../components/RenderChart.vue'

export default {
    name: 'S01P03',
    methods: {

    },
    mounted () {
      $(document).ready(function() {

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

      });

    },
    components: {
        Navbar,
        RenderChart,
        Sidebar
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 03',
            displayTable: true,
        }
    }
}
</script>
