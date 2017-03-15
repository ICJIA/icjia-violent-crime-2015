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
                <div class="col-lg-12">
                  <p>The penalty for criminal sexual assault in Illinois varies by the severity of the offense in terms of age and bodily harm to the victim. For example, criminal sexual assault is a Class 1 felony punishable by 4 to 30 years imprisonment and a fine of up to $25,000.00. Offenders convicted of a second offense may be sentenced to life in prison. Aggravated criminal sexual assault is a Class X felony, punishable by six to 60 years in prison and even life imprisonment.</p>

<p>Illinois Department of Corrections data showed an average of 192 people per year in 2012, 2013, and 2014 were admitted to prison for criminal sexual assault convictions, or about 1.8 percent of all IDOC admissions each year. The average sentence length was 11.84 years among those not receiving a life sentence. At the end of June 2015, 3,631 individuals were serving a sentence for criminal sexual assault, 129 of which were serving a life sentence.</p>



<h3 id="sentences-for-idoc-rape-admissions-2012-2014-n5751">Sentences for IDOC Rape Admissions, 2012-2014 (N=575)<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a></h3>

<!-- <p>hc_Rape_def_chart_1300 <a href="http://jsfiddle.net/esheridan/jtjfhvqg/">http://jsfiddle.net/esheridan/jtjfhvqg/</a></p> -->

<render-chart
       chart="hc_Rape_def_chart_1300"
       displayTable = "false"
      >
   </render-chart>

<p><em>Source: ICJIA Analysis of IDOC Data</em></p>



<h2 id="time-served">Time Served</h2>

<p>From 2012 to 2014, an annual average of 252 people were released from an IDOC correctional facility after serving time for criminal sexual assault. The average amount of time spent in a correctional institution was 7.02 years, and the median length of stay was 6.09 years.</p>



<h3 id="time-served-in-idoc-by-rape-offenders-released-2012-2014-n7562">Time Served in IDOC by Rape Offenders Released 2012-2014 (N=756)<a href="#fn:2" id="fnref:2" title="See footnote" class="footnote">2</a></h3>

<!-- <p>hc_Rape_def_chart_1400 <a href="http://jsfiddle.net/esheridan/u75ec7mn/">http://jsfiddle.net/esheridan/u75ec7mn/</a></p> -->

<render-chart
       chart="hc_Rape_def_chart_1400"
       displayTable = "false"
      >
   </render-chart>

   <table id="" class="table table-striped" role="grid">
    <thead>
       <tr role="row">
          <th class="sorting_asc" tabindex="0" aria-controls="hcf5a60b74e5a54269eaabfc62" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 369px;"></th>
          <th class="sorting" tabindex="0" aria-controls="hcf5a60b74e5a54269eaabfc62" rowspan="1" colspan="1" aria-label=" Rape offenders released: activate to sort column ascending" style="width: 1192px;"> Rape offenders released</th>
       </tr>
    </thead>
    <tbody>
       <tr role="row" class="odd">
          <td class="strong sorting_1">0-1.9</td>
          <td> 4 % </td>
       </tr>

       <tr role="row" class="odd">
          <td class="strong sorting_1">2-3.9</td>
          <td> 21 % </td>
       </tr>
       <tr role="row" class="even">
          <td class="strong sorting_1">4-5.9</td>
          <td> 24 % </td>
       </tr>
       <tr role="row" class="odd">
          <td class="strong sorting_1">6-7.9</td>
          <td> 19 % </td>
       </tr>
       <tr role="row" class="even">
          <td class="strong sorting_1">8-9.9</td>
          <td> 13 % </td>
       </tr>
       <tr role="row" class="even">
          <td class="strong sorting_1">10-11.9</td>
          <td> 8 % </td>
       </tr>
       <tr role="row" class="odd">
          <td class="strong sorting_1">12-13.9</td>
          <td> 5 % </td>
       </tr>
       <tr role="row" class="even">
          <td class="strong sorting_1">14+</td>
          <td> 7 % </td>
       </tr>
    </tbody>
 </table>

<p><em>Source: ICJIA Analysis of IDOC Data</em></p>

<div class="footnotes"><hr><ol><li id="fn:1">730 ILCS 5/3-6-3, known as the “Truth-In-Sentencing” Law, establishes sentencing rules in Illinois. It was originally enacted in 1998 and has been updated/added to several times since then. <br>
It says those persons convicted of criminal sexual assault, aggravated criminal sexual assault, or predatory criminal sexual assault of a child, are only eligible for 4.5 days of good time credit per month served (essentially, they must serve 85% of their sentence), while those convicted of criminal sexual assault with an object are eligible for day-for-day good time credit (must serve 50% of their sentence). <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:2">This chart depicts years spent incarcerated within a state prison. Any time spent in county jail prior to conviction is not included. <a href="#fnref:2" title="Return to article" class="reversefootnote">↩</a></li></ol></div>
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
    name: 'RapeSentences',
    methods: {

    },
    metaInfo() {
    return {
      title: this.title

    }
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
    data() {
        return {
            title: 'Rape -- Sentences',
            displayTable: true,
            segment: 'rape'
        }
    }
}
</script>
