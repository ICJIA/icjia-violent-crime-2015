<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <sidebar :segment="segment" />

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div id="page-context">
          <segment-header :segment="segment" />
          <div class="row">
            <div class="col-md-12">
              <h1 id="characteristics-of-murder-victims-and-reported-offenders"
              class="upper page-head">Characteristics</h1>
            </div>


          </div>
            <div class="row">
              <div class="col-lg-12">
                <!-- Main content here -->

                <p>According to the Illinois State Police Criminal History Record Information (CHRI) System, 3,327 of the 287,629 persons arrested in Illinois in 2015, were arrested for robbery, accounting for approximately one percent (0.94%) of all arrests. The statute of limitations on arrests for robbery is within three years of the offense.</p>



<h3 id="gender-of-persons-arrested-for-robbery-2015-n3327">Gender of Persons Arrested for Robbery, 2015 (N=3,327)</h3>

<!-- <p>hc_Robb_def_chart_700 <a href="http://jsfiddle.net/esheridan/qLzqheff/">http://jsfiddle.net/esheridan/qLzqheff/</a></p> -->

<render-chart
       chart="hc_Robb_def_chart_700"
       displayTable = "false"
      >
   </render-chart>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>



<h3 id="race-of-persons-arrested-for-robbery-2015-n3327">Race of Persons Arrested for Robbery, 2015 (N=3,327)</h3>

<!-- <p>hc_Robb_def_chart_800 <a href="http://jsfiddle.net/esheridan/mo8wfxz9/">http://jsfiddle.net/esheridan/mo8wfxz9/</a></p> -->

<render-chart
       chart="hc_Robb_def_chart_800"
       displayTable = "false"
      >
   </render-chart>


<p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>



<h3 id="age-of-persons-arrested-for-robbery-2015-n3327">Age of Persons Arrested for Robbery, 2015 (N=3,327)</h3>

<!-- <p>hc_Robb_def_chart_900 <a href="http://jsfiddle.net/esheridan/rpeyypo2/">http://jsfiddle.net/esheridan/rpeyypo2/</a></p> -->

<img src="/static/robbery.png" class="img-responsive center">


<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>

<p>The median age of a person arrested for robbery in Illinois was 20 in 2015. </p>



<h2 id="criminal-histories">Criminal Histories</h2>

<p>Of the 3,327 people arrested for robbery in 2015, 84 percent had previous arrests recorded in the CHRI System. Only arrests made in Illinois are submitted to the CHRI System.</p>



<h4 id="most-of-the-3327-persons-arrested-for-robbery-in-illinois-in-2015-had-at-least-one-prior-arrest">Most of the 3,327 persons arrested for robbery in Illinois in 2015 had at least one prior arrest:</h4>

<p><strong>84 percent</strong> for any type of offense <br>
<strong>33 percent</strong> for property offenses<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a> <br>
<strong>25 percent</strong> for violent/person offenses<a href="#fn:2" id="fnref:2" title="See footnote" class="footnote">2</a> <br>
 <strong>&nbsp;&nbsp;9 percent</strong> for drug offenses<a href="#fn:3" id="fnref:3" title="See footnote" class="footnote">3</a> <br>
 <strong>&nbsp;&nbsp;6 percent</strong> for other offenses<a href="#fn:4" id="fnref:4" title="See footnote" class="footnote">4</a> <br>
 <strong>&nbsp;&nbsp;5 percent</strong> for public order offenses<a href="#fn:5" id="fnref:5" title="See footnote" class="footnote">5</a> <br>
 <strong>&nbsp;&nbsp;3 percent</strong> for motor vehicle/traffic offenses<a href="#fn:6" id="fnref:6" title="See footnote" class="footnote">6</a> <br>
 <strong>&nbsp;&nbsp;2 percent</strong> for deadly weapons offenses<a href="#fn:7" id="fnref:7" title="See footnote" class="footnote">7</a> <br>
<strong>&lt;1 percent</strong> for criminal sexual assault/abuse offenses<a href="#fn:8" id="fnref:8" title="See footnote" class="footnote">8</a> <br>
<strong>&lt;1 percent</strong> for DUI offenses<a href="#fn:9" id="fnref:9" title="See footnote" class="footnote">9</a> <br>
<strong>&lt;1 percent</strong> for status offenses<a href="#fn:10" id="fnref:10" title="See footnote" class="footnote">10</a> <br>
<strong>&lt;1 percent</strong> for non-violent sex offenses<a href="#fn:11" id="fnref:11" title="See footnote" class="footnote">11</a> <br>
<strong>&lt;1 percent</strong> for endangering children offenses<a href="#fn:12" id="fnref:12" title="See footnote" class="footnote">12</a>

</p><p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>



<h3 id="prior-arrests-for-2015-robbery-arrestees-n3327">Prior Arrests for 2015 Robbery Arrestees (N=3,327)</h3>

<!-- <p>hc_Robb_def_chart_1100 <a href="http://jsfiddle.net/esheridan/e4s282s3/">http://jsfiddle.net/esheridan/e4s282s3/</a></p> -->

<render-chart
       chart="hc_Robb_def_chart_1100"
       displayTable = "false"
      >
   </render-chart>

   <table class="table table-striped" role="grid">
   <thead>
      <tr role="row">
         <th class="sorting_asc" tabindex="0" aria-controls="hcfea16c716e5964c702f1fe5c" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 361px;"></th>
         <th class="sorting" tabindex="0" aria-controls="hcfea16c716e5964c702f1fe5c" rowspan="1" colspan="1" aria-label=" Prior Arrests: activate to sort column ascending" style="width: 446px;"> Prior Arrests</th>
      </tr>
   </thead>
   <tbody>
      <tr role="row" class="odd">
         <td class="strong sorting_1">0 priors</td>
         <td> 15.5 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">1 prior</td>
         <td> 10.6 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">2-5 priors</td>
         <td> 27.8 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">6-10 priors</td>
         <td> 19.1 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">11-15 priors</td>
         <td> 10.4 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">16-20 priors</td>
         <td> 6.6 %</td>
      </tr>

      <tr role="row" class="even">
         <td class="strong sorting_1">21+ priors</td>
         <td> 10 %</td>
      </tr>

   </tbody>
</table>

<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>

<div class="footnotes"><hr><ol><li id="fn:1">Burglary, Theft, Arson, Forgery, Fraud, Criminal Trespass, etc. <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:2">Homicide, Robbery, Battery, Assault, Home Invasion, Stalking, Kidnapping, etc. <a href="#fnref:2" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:3">Possession or Delivery of Cannabis, Possession or Delivery of a Controlled Substance, Sale or Possession of Hypodermic Syringes or Needles, etc. <a href="#fnref:3" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:4">All other criminal offenses not included in a specific category; other offense includes Suicide and Other Public Complaints. <a href="#fnref:4" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:5">Gambling, False Police Report, Looting, Perjury, Bribery, etc. <a href="#fnref:5" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:6">Reckless Driving, No Driver’s License, No Registration, Speeding, etc. <a href="#fnref:6" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:7">Unlawful Use of Weapon, Unlawful Possession of a Weapon, Reckless Discharge of a Firearm, Armed Violence, etc. <a href="#fnref:7" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:8">Criminal Sexual Assault, Criminal Sexual Abuse, Sexual Exploitation of a Child, etc. <a href="#fnref:8" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:9">Driving Under the Influence of Alcohol &amp; Driving Under the Influence of Drugs <a href="#fnref:9" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:10">Curfew, Truancy, Runaway, Illegal Possession or Consumption of Alcohol by a Minor, etc. <a href="#fnref:10" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:11">Prostitution, Pimping, Obscenity, Public Indecency, Bigamy, Child Pornography, etc. <a href="#fnref:11" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:12">Endangering the Life or Health of a Child, Child Abandonment, Fail to Pay Child Support, Neglect of Child, etc. <a href="#fnref:12" title="Return to article" class="reversefootnote">↩</a></li></ol></div>

              </div>

</div>

<my-footer />
</div>

</div>




</div>

</template>

<script>


import Sidebar from 'components/Sidebar'
import RenderChart from 'components/RenderChart.vue'
import RenderMap from 'components/RenderMap.vue'
import MyFooter from 'components/Footer'
import SegmentHeader from 'components/SegmentHeader'

export default {
    name: 'RobberyArrestees',
    methods: {

    },
    metaInfo() {
    return {
      title: this.title

    }
  },
    mounted () {
      this.$ga.trackPage(this.$route.path,'ICJIA | ' + this.title)
      $(document).ready(function() {
        $('input[name=tableToggle').change(function(){

            if($(this).is(':checked'))
              {
                  $('.hc-table').removeClass('hide')
                  //console.log('on')
              }
              else
              {
                  $('.hc-table').addClass('hide')
                  //console.log('off')
              }

    });

      });

    },
    components: {

        Sidebar,
        RenderChart,
        MyFooter,
        SegmentHeader

    },
    data() {
        return {
            title: 'Robbery -- Arrestees',
            displayTable: true,
            segment: 'robbery'
        }
    }
}
</script>
