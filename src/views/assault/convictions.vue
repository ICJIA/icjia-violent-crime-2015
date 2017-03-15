<template>
<div class="app">
   <!-- app root -->
   <div id="wrapper">
     <!-- Sidebar -->
    <sidebar :segment="segment" />

     <!-- Page Content -->
     <div id="page-content-wrapper">
         <div id="page-context">
             <segment-header :segment="segment" />
           <div class="row">
             <div class="col-md-12">
               <h1 id="rates" class="upper page-head">Convictions</h1>
             </div>


           </div>
             <div class="row">
               <div class="col-md-12">

                 <p>Outcome information on arrest incidents that resulted in a court case is entered into CHRI by county circuit court clerks. Since felony aggravated assault/battery cases can take time to resolve, court disposition information for 2012, 2013, and 2014 were examined to provide a more complete picture of aggravated assault case outcomes.</p>

<p>Between 2012 and 2014, researchers were able to find records for 36,590 court cases for aggravated assault/battery that were adjudicated in Illinois criminal courts. Of those, at least one-third resulted in a guilty verdict.</p>



<h3 id="court-dispositions-on-aggravated-assault-cases-2012-2014-n365901">Court Dispositions on Aggravated Assault Cases, 2012-2014 (n=36,590)<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a></h3>

<!-- <p>hc_Aslt_def_chart_1200 <a href="http://jsfiddle.net/esheridan/mtL53tnr/">http://jsfiddle.net/esheridan/mtL53tnr/</a></p> -->

<render-chart
       chart="hc_M_def_chart_1200"
       displayTable = "false"
      >
   </render-chart>

<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data, 2012-2014</em></p>

<div class="footnotes"><hr><ol><li id="fn:1"><strong>Disposition</strong>: Outcome/Decision/Ruling;  <br>
<strong>Nolle Prosequi</strong>: Latin term which essentially means the prosecutor will no longer pursue the charges; <br>
<strong>Other</strong>: No Bill, Transferred/No Jurisdiction, Non-Suit, Stricken Off with Leave to Reinstate, Death Suggested/Cause Abated, Charge Amended/Reduced, Merged with Another Offense, Delinquency Petition (Decided not to prosecute), Not Proven/Not Adjudicated Delinquent (Not Guilty) (Juvenile Only), 30 Day Notice of CNT CT Date/Forfeit Pending, Judgment on Forfeiture, Withhold Judgment/1410 Probation, Withhold Judgment/Supervision, Juvenile Continuance Under Supervision, Unfit to Stand Trial, Sexually Dangerous, Mistrial, Warrant Issued, Warrant Quashed/Withdrawn, BFW Issued, Revocation/Vacate Probation, Revocation/Vacate Conditional Discharge, Revocation/Vacate Supervision, Revocation/Vacate 1410 Probation, Modified/Trial Court, Vacated/Trial Court, Probation Terminated, Conditional Discharge Terminated, Paid in Full/Compliance of 705 Ch. 995-6-306-D2, Terminated Unsatisfied, Terminated Satisfied, Reversed/Reviewing Court, Remanded/Reviewing Court, Modified/Reviewing Court, Vacated/Reviewing Court <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li></ol></div>

               </div>

</div>
</div>
<citation />
</div>
<my-footer />
</div>
</div>
   <!-- //app root -->
  </div>
</template>

<script>

import Citation from 'components/Citation'
import Sidebar from 'components/Sidebar'
import RenderChart from 'components/RenderChart'
// import TableToggle from '../../components/TableToggle.vue'
import MyFooter from 'components/Footer'
import SegmentHeader from 'components/SegmentHeader'
export default {
    name: 'AssaultConvictions',
    methods: {

    },
    mounted () {
      this.$ga.trackPage(this.$route.path,'ICJIA | ' + this.title)
      $(document).ready(function() {

      });

    },
    components: {

        RenderChart,
        Sidebar,
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
            title: 'Assault -- Convictions',
            displayTable: true,
            segment: 'assault'
        }
    }
}
</script>
