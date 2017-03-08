<template>
<div class="app">
   <!-- app root -->
   <div id="wrapper">
     <!-- Sidebar -->
    <sidebar segment="rape" />

     <!-- Page Content -->
     <div id="page-content-wrapper">
         <div id="page-context">
           <div class="row">
             <div class="col-md-12">
               <h1 id="rates" class="upper page-head">Convictions</h1>
             </div>


           </div>
             <div class="row">
                 <div class="col-lg-12">

                   <p>Outcome information on arrest incidents that resulted in a court case is entered into CHRI by county circuit court clerks. Since criminal sexual assault cases are felonies that can take time to resolve, court disposition information for 2012, 2013, and 2014 were examined to provide a more complete picture of criminal sexual assault case outcomes.</p>

<p>Researchers were able to find records for 1,646 court cases for rape that were adjudicated in Illinois criminal courts between 2012 and 2014. Of those, 42 percent resulted in a guilty verdict.</p>



<h2 id="court-dispositions-on-rape-cases-2012-2014-n16461">Court Dispositions on Rape Cases, 2012-2014 (n=1,646)<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a></h2>

<!-- <p>hc_Rape_def_chart_1200 <a href="http://jsfiddle.net/esheridan/85sru5L3/">http://jsfiddle.net/esheridan/85sru5L3/</a></p> -->
<render-chart
       chart="hc_Rape_def_chart_1200"
       displayTable = "false"
      >
   </render-chart>
<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data, 2012-2014</em></p>

<div class="footnotes"><hr><ol><li id="fn:1"><strong>Disposition</strong>: Outcome/Decision/Ruling; <br>
<strong>Nolle Prosequi</strong>: Latin term which essentially means the prosecutor will no longer pursue the charges; <br>
<strong>Other</strong>: Transferred/No Jurisdiction, Death Suggested/Cause Abated, Charges Amended/Reduced, Merged with Another Offense, 30 Day Notice of CNT CT Date/Forfeit Pending, Judgment on Forfeiture, Withhold Judgment/Supervision, Unfit to Stand Trial, Sexually Dangerous, Mistrial, Warrant Issued, Warrant Quashed/Withdrawn, BFW Issued, Revocation/Vacate Probation, Modified/Trial Court, Vacated/Trial Court, Probation Terminated, Terminated Unsatisfied, Terminated Satisfied, Reversed/Reviewing Court, Remanded/Reviewing Court, Vacated/Reviewing Court <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li></ol></div>

                 </div>

</div>
</div>
</div>
<my-footer />
</div>
</div>
   <!-- //app root -->
  </div>
</template>

<script>


import Sidebar from 'components/Sidebar'
import RenderChart from 'components/RenderChart'
// import TableToggle from '../../components/TableToggle.vue'
import MyFooter from 'components/Footer'
export default {
    name: 'S01P03',
    methods: {

    },
    mounted () {
      $(document).ready(function() {

      });

    },
    components: {

        RenderChart,
        Sidebar,
        MyFooter

    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 03',
            displayTable: true,
        }
    }
}
</script>
