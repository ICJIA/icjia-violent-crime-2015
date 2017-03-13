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
              <div class="col-md-12">

                <p>According to the Illinois State Police Criminal History Record Information (CHRI) System, of the 287,629 people arrested in Illinois in 2015, 15,826 were arrested for aggravated assault. Aggravated assaults arrests accounted for approximately 4 percent of all arrests. The statute of limitations on arrests for felony aggravated battery is within three years of the offense.</p>



<h3 id="gender-of-persons-arrested-for-aggravated-assault-2015-n15826">Gender of Persons Arrested for Aggravated Assault, 2015 (N=15,826)</h3>

<!-- <p>hc_Aslt_def_chart_700 <a href="http://jsfiddle.net/esheridan/psnomqch/">http://jsfiddle.net/esheridan/psnomqch/</a></p> -->

<render-chart
       chart="hc_Aslt_def_chart_700"
       displayTable = "false"
      >
   </render-chart>


<p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>



<h3 id="race-of-persons-arrested-for-aggravated-assault-2015-n15826">Race of Persons Arrested for Aggravated Assault, 2015 (N=15,826)</h3>

<!-- <p>hc_Aslt_def_chart_800 <a href="http://jsfiddle.net/esheridan/u8zqjxun/">http://jsfiddle.net/esheridan/u8zqjxun/</a></p> -->

<render-chart
       chart="hc_Aslt_def_chart_800"
       displayTable = "false"
      >
   </render-chart>


<p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>



<h3 id="age-of-persons-arrested-for-aggravated-assault-2015-n15826">Age of Persons Arrested for Aggravated Assault, 2015 (N=15,826)</h3>

<!-- <p>hc_Aslt_def_chart_900 <a href="http://jsfiddle.net/esheridan/ajg9rtn3/">http://jsfiddle.net/esheridan/ajg9rtn3/</a></p> -->

  <img src="/static/assault.png" class="img-responsive center">

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>

<p>The median age of arrest for an aggravated assault arrestee in Illinois in 2015 was 28. </p>



<h2 id="criminal-histories">Criminal Histories</h2>

<p>Of the 15,826 people arrested for aggravated assault in 2015, 83.5 percent had previous arrests recorded in their criminal history records compiled in the CHRI System. Only arrests made in Illinois are submitted to the CHRI System.</p>



<h4 id="most-of-the-15826-persons-arrested-for-aggravated-assaultbattery-in-illinois-in-2015-had-at-least-one-prior-arrest">Most of the 15,826 persons arrested for aggravated assault/battery in Illinois in 2015 had at least one prior arrest:</h4>

<p>83 percent for any type of offense <br>
20 percent for violent/person offenses<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a> <br>
15 percent for property offenses<a href="#fn:2" id="fnref:2" title="See footnote" class="footnote">2</a> <br>
13 percent for other offenses<a href="#fn:3" id="fnref:3" title="See footnote" class="footnote">3</a> <br>
12 percent for motor vehicle/traffic offenses<a href="#fn:4" id="fnref:4" title="See footnote" class="footnote">4</a> <br>
11 percent for public order offenses<a href="#fn:5" id="fnref:5" title="See footnote" class="footnote">5</a> <br>
8 percent for drug offenses<a href="#fn:6" id="fnref:6" title="See footnote" class="footnote">6</a> <br>
2 percent for DUI offenses<a href="#fn:7" id="fnref:7" title="See footnote" class="footnote">7</a> <br>
1 percent for deadly weapons offenses<a href="#fn:8" id="fnref:8" title="See footnote" class="footnote">8</a> <br>
&lt;1 percent for non-violent sex offenses<a href="#fn:9" id="fnref:9" title="See footnote" class="footnote">9</a> <br>
&lt;1 percent for criminal sexual assault/abuse offenses<a href="#fn:10" id="fnref:10" title="See footnote" class="footnote">10</a> <br>
&lt;1 percent for endangering children offenses<a href="#fn:11" id="fnref:11" title="See footnote" class="footnote">11</a> <br>
&lt;1 percent for status offenses<a href="#fn:12" id="fnref:12" title="See footnote" class="footnote">12</a>

</p><p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>



<h3 id="prior-arrests-for-2015-aggravated-assault-arrestees-n15826">Prior Arrests for 2015 Aggravated Assault Arrestees (N=15,826)</h3>

<!-- <p>hc_Aslt_def_chart_1100 <a href="http://jsfiddle.net/esheridan/grr2e0z2/">http://jsfiddle.net/esheridan/grr2e0z2/</a></p> -->

<render-chart
       chart="hc_Aslt_def_chart_1100"
       displayTable = "false"
      >
   </render-chart>

   <table class="table table-striped">
   <thead>
      <tr role="row">
         <th class="sorting_asc" tabindex="0" aria-controls="hc1435ccb103f5f06f6b399862" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 347px;"></th>
         <th class="sorting" tabindex="0" aria-controls="hc1435ccb103f5f06f6b399862" rowspan="1" colspan="1" aria-label=" Prior Arrests: activate to sort column ascending" style="width: 428px;"> Prior Arrests</th>
      </tr>
   </thead>
   <tbody>
      <tr role="row" class="odd">
         <td class="strong sorting_1">0 priors</td>
         <td> 15.7 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">1 prior</td>
         <td> 10.5 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">2-5 priors</td>
         <td> 25.9 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">6-10 priors</td>
         <td> 18.4 %</td>
      </tr>
      <tr role="row" class="odd">
         <td class="strong sorting_1">11-15 priors</td>
         <td> 10.7 %</td>
      </tr>
      <tr role="row" class="even">
         <td class="strong sorting_1">16-20 priors</td>
         <td> 6.8 %</td>
      </tr>

      <tr role="row" class="even">
         <td class="strong sorting_1">21+ priors</td>
         <td> 12 %</td>
      </tr>

   </tbody>
</table>

<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>

<div class="footnotes"><hr><ol><li id="fn:1">Homicide/Murder, Robbery, Battery, Assault, Home Invasion, Stalking, Kidnapping, etc. <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:2">Burglary, Theft, Arson, Forgery, Fraud, Criminal Trespass, etc. <a href="#fnref:2" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:3">All other criminal offenses not included in a specific category; other offense includes Suicide and Other Public Complaints. <a href="#fnref:3" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:4">Reckless Driving, No Driver’s License, No Registration, Speeding, etc. <a href="#fnref:4" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:5">Gambling, False Police Report, Looting, Perjury, Bribery, etc. <a href="#fnref:5" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:6">Possession or Delivery of Cannabis, Possession or Delivery of a Controlled Substance, Sale or Possession of Hypodermic Syringes or Needles, etc. <a href="#fnref:6" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:7">Driving Under the Influence of Alcohol &amp; Driving Under the Influence of Drugs <a href="#fnref:7" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:8">Unlawful Use of Weapon, Unlawful Possession of a Weapon, Reckless Discharge of a Firearm, Armed Violence, etc. <a href="#fnref:8" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:9">Prostitution, Pimping, Obscenity, Public Indecency, Bigamy, Child Pornography, etc. <a href="#fnref:9" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:10">Criminal Sexual Assault, Criminal Sexual Abuse, Sexual Exploitation of a Child, etc. <a href="#fnref:10" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:11">Endangering the Life or Health of a Child, Child Abandonment, Fail to Pay Child Support, Neglect of Child, etc. <a href="#fnref:11" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:12">Curfew, Truancy, Runaway, Illegal Possession or Consumption of Alcohol by a Minor, etc. <a href="#fnref:12" title="Return to article" class="reversefootnote">↩</a></li></ol></div>


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
    name: 'S01P02',
    methods: {

    },
    mounted () {
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
            pageTitle: 'Section 01 - Page 02',
            displayTable: true,
            segment: 'assault'
        }
    }
}
</script>
