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
                  <div class="col-lg-12">



   <!-- <h1 id="sentences" class="upper"><a href="#menu-toggle" id="menu-toggle"><i class="fa fa-bars "></i></a>&nbsp;&nbsp;Sentences</h1> -->
   <h1 id="sentences" class="upper page-head">Sentences</h1>

<p>The penalty for first degree murder in Illinois is a minimum of 20 years in prison and a maximum of a life sentence. The penalty for second degree murder is between 4 and 20 years in prison. The death penalty was abolished in Illinois in 2011.</p>

<p>IDOC data showed an average of almost 180 people per year in 2012, 2013, and 2014 were admitted to IDOC for first or second degree murder, or 1.7 percent of all persons admitted to IDOC in those years for any offense. The average sentence length for those admitted to IDOC for first or second degree murder, among those who did not receive a life sentence, was 35.89 years. At the end of June, 2015, 1,320 persons were serving a life sentence for first degree murder.</p>

<div class="card spacerTop50">
  <div class="card-block">

<h3 id="sentences-for-idoc-murder-admissions-2012-2014-n5371">Sentences for IDOC Murder Admissions, 2012-2014 (N=537)<a href="#fn:14" id="fnref:14" title="See footnote" class="footnote">1</a></h3>

<!-- <p>hc_M_def_chart_1300 <a href="http://jsfiddle.net/liamhanninen/hztb078b/">http://jsfiddle.net/liamhanninen/hztb078b/</a></p> -->
<render-chart
       chart="hc_M_def_chart_1300"
       displayTable = "false"
      >  </render-chart>
<p><em>Source: ICJIA Analysis of IDOC Data</em></p>
<p>* Average sentence length = <strong>35.89 years</strong></p>
</div>
</div>


<h2 id="time-served" class="hrule spacerTop30">Time Served</h2>

<p>From 2012 to 2014, an annual average of 234 people were released from an IDOC correctional facility after serving time for either first or second degree murder. The average amount of time spent in a correctional institution was 15.56 years, and the median length of stay was 16.18 years.</p>

<div class="card spacerTop50">
  <div class="card-block">

<h3 id="time-served-in-idoc-for-murder-offenders-released-2012-2014-n6992">Time Served in IDOC for Murder Offenders Released 2012-2014 (N=699)<a href="#fn:15" id="fnref:15" title="See footnote" class="footnote">2</a></h3>

<!-- <p>hc_M_def_chart_1400 <a href="http://jsfiddle.net/liamhanninen/y5nq8efs/">http://jsfiddle.net/liamhanninen/y5nq8efs/</a></p> -->
<render-chart
       chart="hc_M_def_chart_1400"
       displayTable = "false"
      >  </render-chart>

      <table class="table table-striped">
    <thead>
        <tr role="row">
            <th class="sorting_asc" tabindex="0" aria-controls="hc7578c1c2604e56477b42bc3f" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 146px;"></th>
            <th class="sorting" tabindex="0" aria-controls="hc7578c1c2604e56477b42bc3f" rowspan="1" colspan="1" aria-label=" Murder offenders released: activate to sort column ascending" style="width: 565.6px;"> Murder offenders released</th>
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

</div>
</div>

<div class="footnotes"><hr><ol><li id="fn:14">730 ILCS 5/3-6-3, known as the “Truth-In-Sentencing” Law, establishes sentencing rules in Illinois. It was originally enacted in 1998 and has been updated/added to several times since then. <br>
It says that those persons convicted of first degree murder must serve all of their imposed sentence, while those convicted of second degree murder are eligible for day-for-day good time credit (must serve 50% of their sentence). <a href="#fnref:14" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:15">This chart depicts years spent incarcerated within a state prison. Any time spent in county jail prior to conviction is not included. <a href="#fnref:15" title="Return to article" class="reversefootnote">↩</a></li></ol></div>
<citation />
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
import Citation from 'components/Citation'

export default {
    name: 'MurderSentences',
    methods: {

    },
    mounted () {
      this.$ga.trackPage(this.$route.path,'ICJIA | ' + this.title)
    },
    components: {

        Sidebar,
        MyFooter,
        RenderChart,
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
            title: 'Murder -- Sentences',
            displayTable: true,
            segment: 'murder'
        }
    }
}
</script>
