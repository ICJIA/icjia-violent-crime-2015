<template>
<div class="app">
   <!-- app root -->
   <div id="wrapper">
     <!-- Sidebar -->
    <sidebar :segment="segment" />

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
                 <!-- Main content here -->
                 <p>Outcome information on arrest incidents that resulted in a court case also is entered into CHRI by county circuit court clerks. Since robbery cases can take time to resolve, court disposition information for 2012, 2013, and 2014 were examined to provide a more complete picture of robbery case outcomes. </p>

<p>Between 2012 and 2014, researchers were able to find records for 9,588 court cases for robbery that were adjudicated in Illinois criminal courts. Of those, at least half resulted in a guilty verdict.</p>



<h3 id="court-dispositions-on-robbery-cases-2012-2014-n95881">Court Dispositions on Robbery Cases, 2012-2014 (n=9,588)<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a></h3>

<!-- <p>hc_Robb_def_chart_1200 <a href="http://jsfiddle.net/esheridan/dcu4oj30/">http://jsfiddle.net/esheridan/dcu4oj30/</a></p> -->
<render-chart
       chart="hc_Robb_def_chart_1200"
       displayTable = "false"
      >
   </render-chart>
<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data, 2012-2014</em></p>

<div class="footnotes"><hr><ol><li id="fn:1"><strong>Disposition</strong>: Outcome/Decision/Ruling;  <br>
<strong>Nolle Prosequi</strong>: Latin term which essentially means the prosecutor will no longer pursue the charges; <br>
<strong>Other</strong>: No Bill, Transferred/No Jurisdiction, Stricken Off with Leave to Reinstate, Death Suggested/Cause Abated, Charge Amended/Reduced, Governor’s Pardon, Merged with Another Offense, Delinquency Petition (Decided not to prosecute), Not Proven/Not Adjudicated Delinquent (Not Guilty) (Juvenile Only), 30 Day Notice of CNT CT Date/Forfeit Pending, Judgment on Forfeiture, Withhold Judgement/710 Probation, Withhold Judgment/1410 Probation, Withhold Judgment/Supervision, Juvenile Continuance Under Supervision, Unfit to Stand Trial, Mistrial, Warrant Issued, Warrant Quashed/Withdrawn, BFW Issued, Revocation/Vacate Probation, Revocation/Vacate Conditional Discharge, Revocation/Vacate 1410 Probation, Modified/Trial Court, Vacated/Trial Court, Probation Terminated, Conditional Discharge Terminated, Paid in Full/Compliance of 705 Ch. 995-6-306-D2, Terminated Unsatisfied, Terminated Satisfied, Remanded/Reviewing Court, Modified/Reviewing Court, Vacated/Reviewing Court <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li></ol></div>

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
            segment: 'robbery'
        }
    }
}
</script>
