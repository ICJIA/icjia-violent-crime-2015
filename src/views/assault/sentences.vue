<template>
  <section>

    <div id="wrapper">
      <!-- Sidebar -->
      <sidebar :segment="segment" />

      <!-- Page Content -->
      <div id="page-content-wrapper">
          <div id="page-context">
              <segment-header :segment="segment" />
            <div class="row">
              <div class="col-md-12">
                <h1 id="sentences"
                class="upper page-head">Sentences</h1>
              </div>


            </div>
              <div class="row">
                <div class="col-md-12">

                  <p>Aggravated assault and aggravated battery sentences vary based on severity of the crime. Class A misdemeanor assaults can result in a fine or up to a year in jail, while Class X felony assaults with certain circumstances can result in a 30- to 60-year sentence. </p>

<p>Illinois Department of Corrections (IDOC) data showed an average of almost 502 people per year in 2012, 2013, and 2014 were admitted to IDOC for an aggravated assault/battery conviction, or 4.7 percent of all persons admitted to IDOC during that period. The average sentence length was 7.49 years for this population, and the median sentence length was 4 years. At the end of June, 2015, 3,508 persons were serving a prison sentence for aggravated assault/battery.</p>



<h3 id="sentences-for-idoc-aggravated-assault-admissions-2012-2014-n15061">Sentences for IDOC Aggravated Assault Admissions, 2012-2014 (N=1,506)<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a></h3>

<!-- <p>hc_Aslt_def_chart_1300 <a href="http://jsfiddle.net/esheridan/0m4qoqjr/">http://jsfiddle.net/esheridan/0m4qoqjr/</a></p> -->

<render-chart
       chart="hc_M_def_chart_1300"
       displayTable = "false"
      >
   </render-chart>

<p><em>Source: ICJIA Analysis of IDOC Data</em></p>



<h2 id="time-served">Time Served</h2>

<p>From 2012 to 2014, an annual average of 481 people were released from an IDOC correctional facility after serving time for aggravated battery. The average time spent in a correctional institution was 3.44 years, and the median length of stay was 1.52 years.</p>



<h3 id="time-served-in-idoc-for-aggravated-assault-offenders-released-2012-2014-n13892">Time Served in IDOC for Aggravated Assault Offenders Released 2012-2014 (N=1,389)<a href="#fn:2" id="fnref:2" title="See footnote" class="footnote">2</a></h3>

<!-- <p>hc_Aslt_def_chart_1400 <a href="http://jsfiddle.net/esheridan/81p1dg0k/">http://jsfiddle.net/esheridan/81p1dg0k/</a></p> -->

<render-chart
       chart="hc_M_def_chart_1400"
       displayTable = "false"
      >
   </render-chart>

   <table class="table table-striped">
   <thead>
      <tr role="row">
         <th class="sorting_asc" tabindex="0" aria-controls="hcb44ec140434d0f52853b6fbd" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 161px;"></th>
         <th class="sorting" tabindex="0" aria-controls="hcb44ec140434d0f52853b6fbd" rowspan="1" colspan="1" aria-label=" Murder offenders released: activate to sort column ascending" style="width: 614px;"> Aggravated Assault offenders released</th>
      </tr>
   </thead>
   <tbody>
      <tr role="row" class="odd">
         <td class="strong sorting_1">0-4.9</td>
         <td> 12 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">5-9.9</td>
         <td> 13 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">10-14.9</td>
         <td> 17 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">15-19.9</td>
         <td> 36 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">20-24.9</td>
         <td> 13 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">25-29.9</td>
         <td> 4 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">30+</td>
         <td> 5 %</td>
      </tr>

   </tbody>
</table>

<p><em>Source: ICJIA Analysis of IDOC Data</em></p>

<div class="footnotes"><hr><ol><li id="fn:1">730 ILCS 5/3-6-3, known as the “Truth-In-Sentencing” Law, establishes sentencing rules in Illinois. It was originally enacted in 1998 and has been updated/added to several times since then. <br>
It says those persons convicted of aggravated battery with a firearm, heinous battery, aggravated battery to a senior citizen, aggravated battery to a child, or aggravated domestic battery are only eligible for 4.5 days of good time credit per month served (essentially, they must serve 85% of their sentence), while those convicted of felony aggravated assault or aggravated battery, are eligible for day-for-day good time credit (must serve 50% of their sentence). <br>
Note: Some aggravated assaults are misdemeanors, and therefore would not result in a prison sentence. <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:2">This chart depicts years spent incarcerated within a state prison. Any time spent in county jail prior to conviction is not included. <a href="#fnref:2" title="Return to article" class="reversefootnote">↩</a></li></ol></div>
                </div>

</div>
<my-footer />
</div>
</div>
</div>

</section>
</template>

<script>


import Sidebar from 'components/Sidebar'
import MyFooter from 'components/Footer'
import RenderChart from 'components/RenderChart.vue'
import SegmentHeader from 'components/SegmentHeader'

export default {
    name: 'AssaultSentences',
    methods: {

    },
    mounted () {
      this.$ga.trackPage(this.$route.path,'ICJIA | ' + this.title)
    },
    metaInfo() {
    return {
      title: this.title

    }
  },
    components: {

        Sidebar,
        MyFooter,
        RenderChart,
        SegmentHeader
    },
    data() {
        return {
            title: 'Assault -- Sentences',
            displayTable: true,
            segment: 'assault'
        }
    }
}
</script>
