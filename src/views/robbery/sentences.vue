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
                  <p>Robbery is a Class 2 felony, with a penalty of three to seven years in prison. Aggravated robbery is a Class 1 felony with a penalty of four to 15 years in prison. Under certain circumstances, the sentence for a Class 1 felony can be extended to 15 to 30 years in prison. Armed robbery is a Class X felony with a penalty of a mandatory prison sentence of six to 30 years in prison. Vehicular hijacking is a Class 1 felony, with a penalty of four to 15 years in prison.</p>

  <p>Illinois Department of Corrections (IDOC) data showed an average of almost 870 people per year in 2012, 2013, and 2014 were admitted to IDOC for a robbery conviction, or 8.2 percent of all persons admitted during that time. The average sentence length was 7.77 years, and the median sentence length was 6 years. At the end of June, 2015, 4,272 individuals were serving a prison sentence for robbery.</p>



  <h3 id="sentences-for-idoc-robbery-admissions-2012-2014-n26101">Sentences for IDOC Robbery Admissions, 2012-2014 (N=2,610)<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a></h3>

  <!-- <p>hc_Robb_def_chart_1300 <a href="http://jsfiddle.net/esheridan/b86Lc6dm/">http://jsfiddle.net/esheridan/b86Lc6dm/</a></p> -->
  <render-chart
         chart="hc_Robb_def_chart_1300"
         displayTable = "false"
        >
     </render-chart>

     <table class="table table=striped" role="grid">
   <thead>
      <tr role="row">
         <th class="sorting_asc" tabindex="0" aria-controls="hc913cc2f6d4354c09235d1992" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 146px;"></th>
         <th class="sorting" tabindex="0" aria-controls="hc913cc2f6d4354c09235d1992" rowspan="1" colspan="1" aria-label=" Robbery offenders admitted: activate to sort column ascending" style="width: 595px;"> Robbery offenders admitted</th>
      </tr>
   </thead>
   <tbody>
      <tr role="row" class="odd">
         <td class="strong sorting_1">0-2.9</td>
         <td> 1.4 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">3-5.9</td>
         <td> 43.3 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">6-8.9</td>
         <td> 26.6 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">9-11.9</td>
         <td> 9.5 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">12-14.9</td>
         <td> 6.4 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">15-17.9</td>
         <td> 4.6 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">18-20.9</td>
         <td> 1.9 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">21-23.9</td>
         <td> 4.3 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">24+</td>
         <td> 2 %</td>
      </tr>

   </tbody>
</table>
  <p><em>Source: ICJIA Analysis of IDOC Data</em></p>



  <h2 id="time-served">Time Served</h2>

  <p>From 2012 to 2014, an annual average of 800 people were released from an IDOC correctional facility after serving time for robbery. The average amount of time spent in a correctional institution was 2.16 years, and the median length of stay was 1.57 years.</p>



  <h3 id="time-served-in-idoc-for-robbery-offenders-released-from-2012-to-2014-n23672">Time Served in IDOC for Robbery Offenders Released from 2012 to 2014 (N=2,367)<a href="#fn:2" id="fnref:2" title="See footnote" class="footnote">2</a></h3>

  <!-- <p>hc_Robb_def_chart_1400 <a href="http://jsfiddle.net/esheridan/s5awc5g1/">http://jsfiddle.net/esheridan/s5awc5g1/</a></p> -->

  <render-chart
         chart="hc_Robb_def_chart_1400"
         displayTable = "false"
        >
     </render-chart>

     <table class="table table-striped" role="grid">
   <thead>
      <tr role="row">
         <th class="sorting_asc" tabindex="0" aria-controls="hcbfc67f236226676fc1fcfda6" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 113px;"></th>
         <th class="sorting" tabindex="0" aria-controls="hcbfc67f236226676fc1fcfda6" rowspan="1" colspan="1" aria-label=" Robbery offenders released: activate to sort column ascending" style="width: 628px;"> Robbery offenders released</th>
      </tr>
   </thead>
   <tbody>
      <tr role="row" class="odd">
         <td class="strong sorting_1">0-0.9</td>
         <td> 33 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">1-1.9</td>
         <td> 27 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">2-2.9</td>
         <td> 20 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">3-3.9</td>
         <td> 9 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">4-4.9</td>
         <td> 5 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">5-5.9</td>
         <td> 2 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">6-6.9</td>
         <td> 2 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">7+</td>
         <td> 3 %</td>
      </tr>
   </tbody>
</table>

  <p><em>Source: ICJIA Analysis of IDOC Data</em></p>

  <div class="footnotes"><hr><ol><li id="fn:1">730 ILCS 5/3-6-3, known as the “Truth-In-Sentencing” Law, establishes sentencing rules in Illinois. It was originally enacted in 1998 and has been updated/added to several times since then. <br>
  It says those persons convicted of armed robbery and aggravated vehicular hijacking are only eligible for 4.5 days of good time credit per month served (essentially, they must serve 85% of their sentence), while those convicted of robbery, aggravated robbery, and vehicular hijacking, are eligible for day-for-day good time credit (must serve 50% of their sentence). <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:2">This chart depicts years spent incarcerated within a state prison. Any time spent in county jail prior to conviction is not included. <a href="#fnref:2" title="Return to article" class="reversefootnote">↩</a></li></ol></div>
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
    name: 'RobberySentences',
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
            title: 'Robbery -- Sentences',
            displayTable: true,
            segment: 'robbery'
        }
    }
}
</script>
