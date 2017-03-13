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
              class="upper page-head">Characteristics of Murder Victims and Reported Offenders</h1>
            </div>
            <!-- <div class="col-md-2 ">

              <label class="switch-light" onclick="">
            <input type="checkbox" name="tableToggle" checked>
            <strong>
            <span style="text-transform: uppercase">Display Tables</span>
            </strong>
            <div style="height: 15px"></div>

            <span class="well">
            <span class="buttonHide">Hide</span>
            <span class="buttonShow">Show</span>
            <a class="btn btn-primary"></a>
            </span>
            </label>

            </div> -->

          </div>
            <div class="row">
                <div class="col-lg-12">


     <!-- <h1 id="characteristics-of-murder-victims-and-reported-offenders" class="upper"><a href="#menu-toggle" id="menu-toggle"><i class="fa fa-bars "></i></a>&nbsp;&nbsp;Characteristics of Murder Victims and Reported Offenders</h1> -->


 <p>Characteristics of murder victims and the characteristics of those thought to be responsible for the murder are accessible through the national FBI Supplemental Homicide Reporting program. In Illinois, only Chicago and Rockford participated in this data collection program in 2015. Beginning in 2016, all Illinois law enforcement agencies were mandated to report this detailed information on murders. Not all reported alleged offenders are actually arrested for the murder, as the alleged offender must be apprehended with enough evidence to make an arrest.</p>

 <p>The most current program information available dates back to 2014 and includes characteristics of 773 murder victims and 370 reported offenders from Chicago and Rockford.</p>



 <div class="card spacerTop50">
   <div class="card-block">
 <h3 id="gender-of-offenders-in-chicago-and-rockford-2015-n773">Gender of Offenders in Chicago and Rockford, 2015 (n=773)</h3>

 <!-- <p>hc_M_def_chart_300 <a href="http://jsfiddle.net/liamhanninen/fsmw3y3a/">http://jsfiddle.net/liamhanninen/fsmw3y3a/</a></p> -->


<render-chart
       chart="hc_M_def_chart_300"
       displayTable = "false"
      >
   </render-chart>

 <p><em>Source: FBI Supplemental Homicide Reports, 2014</em></p>
</div>
</div>




<div class="card spacerTop50">
  <div class="card-block">
 <h3 id="gender-of-victims-in-chicago-and-rockford-2015-n773">Gender of Victims in Chicago and Rockford, 2015 (n=773)</h3>

 <!-- <p>hc_M_def_chart_400 <a href="http://jsfiddle.net/liamhanninen/dgnaaoy1/">http://jsfiddle.net/liamhanninen/dgnaaoy1/</a></p> -->
 <render-chart
        chart="hc_M_def_chart_400"
        displayTable = "false"
       >
    </render-chart>
 <p><em>Source: FBI Supplemental Homicide Reports, 2014</em></p>
</div>
</div>


<div class="card spacerTop50">
  <div class="card-block">
 <h3 id="race-of-offenders-in-chicago-and-rockford-2015-n773">Race of Offenders in Chicago and Rockford, 2015 (n=773)</h3>

 <!-- <p>hc_M_def_chart_500 <a href="http://jsfiddle.net/liamhanninen/4ob2xkb9/">http://jsfiddle.net/liamhanninen/4ob2xkb9/</a></p> -->

 <render-chart
        chart="hc_M_def_chart_500"
        displayTable = "false"
       >
    </render-chart>
 <p><em>Source: FBI Supplemental Homicide Reports, 2014 </em></p>
 <p>Note: Hispanic is not an option when reporting race into the FBI Supplemental Homicide Report program.</p>
</div>
</div>


<div class="card spacerTop50">
  <div class="card-block">
 <h3 id="race-of-victims-in-chicago-and-rockford-2015-n773">Race of Victims in Chicago and Rockford, 2015 (n=773)</h3>

 <!-- <p>hc_M_def_chart_600 <a href="http://jsfiddle.net/liamhanninen/tbbjyLdz/">http://jsfiddle.net/liamhanninen/tbbjyLdz/</a></p> -->
 <render-chart
        chart="hc_M_def_chart_600"
        displayTable = "false"
       >
    </render-chart>
 <p><em>Source: FBI Supplemental Homicide Reports, 2014</em></p>

 <p>Note: Hispanic is not an option when reporting race into the FBI Supplemental Homicide Report program.</p>
</div>
</div>


<div class="card spacerTop50">
  <div class="card-block">
 <h2 id="characteristics-of-persons-arrested-for-murder-in-illinois">Characteristics of Persons Arrested for Murder in Illinois</h2>

 <p>According to the Illinois State Police Criminal History Record Information (CHRI) System, of the 287,629 persons arrested in Illinois in 2015, 541 were arrested for murder; murder arrests accounted for just 0.14 percent of all arrests. No statute of limitations exists on arrests for murder and the crimes for which the arrests were made may not have occurred in 2015.</p>



 <h3 id="gender-of-persons-arrested-for-murder-2015-n541">Gender of Persons Arrested for Murder, 2015 (N=541)</h3>
 <render-chart
        chart="hc_M_def_chart_700"
        displayTable = "false"
       >
    </render-chart>
 <!-- <p>hc_M_def_chart_700
   <a href="http://jsfiddle.net/liamhanninen/2g0hzzzz/">http://jsfiddle.net/liamhanninen/2g0hzzzz/</a>
 </p> -->

 <p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>
</div>
</div>

<div class="card spacerTop50">
  <div class="card-block">
 <h3 id="race-of-persons-arrested-for-murder-2015-n541">Race of Persons Arrested for Murder, 2015 (N=541)</h3>

 <!-- <p>hc_M_def_chart_800 <a href="http://jsfiddle.net/liamhanninen/e7r1w7b8/">http://jsfiddle.net/liamhanninen/e7r1w7b8/</a></p> -->

 <render-chart
        chart="hc_M_def_chart_800"
        displayTable = "false"
       >
    </render-chart>
 <p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>
</div>
</div>


<div class="card spacerTop50">
  <div class="card-block">
 <h3 id="age-of-persons-arrested-for-murder-2015-n541">Age of Persons Arrested for Murder, 2015 (N=541)</h3>

 <!-- <p>hc_M_def_chart_900 <a href="http://jsfiddle.net/liamhanninen/d1ce8h31/">http://jsfiddle.net/liamhanninen/d1ce8h31/</a></p> -->

 <!-- <render-chart
        chart="hc_M_def_chart_900"
        displayTable = "false"
       >
    </render-chart> -->

    <img src="/static/murder.png" class="img-responsive center">
 <p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data </em></p>

 <p>The median age of a person arrested for murder in Illinois in 2015 was 25.</p>

</div>
</div>

 <h2 id="criminal-histories" class="hrule">Criminal Histories</h2>

 <p>Of the 541 people arrested for murder in 2015, 9 percent did not have any previous arrests recorded in the CHRI System. Only arrests made in Illinois are submitted to the CHRI System.</p>


 <div class="card spacerTop50">
   <div class="card-block">
 <h3 id="most-of-the-541-persons-arrested-for-murder-in-illinois-in-2015-had-at-least-one-prior-arrest">Most of the 541 persons arrested for murder in Illinois in 2015 had at least one prior arrest:</h3>

 <p>
   <strong>&nbsp;91 percent</strong> for any type of offense <br>
  <strong>&nbsp;76 percent</strong> for violent/person offenses, including murder<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a> <br>
  <strong>&nbsp;69 percent</strong> for property offenses<a href="#fn:2" id="fnref:2" title="See footnote" class="footnote">2</a> <br>
  <strong>&nbsp;56 percent</strong> for drug offenses<a href="#fn:3" id="fnref:3" title="See footnote" class="footnote">3</a> <br>
  <strong>&nbsp;54 percent</strong> for other offenses<a href="#fn:4" id="fnref:4" title="See footnote" class="footnote">4</a> <br>
  <strong>&nbsp;48 percent</strong> for public order offenses<a href="#fn:5" id="fnref:5" title="See footnote" class="footnote">5</a> <br>
  <strong>&nbsp;36 percent</strong> for deadly weapons offenses<a href="#fn:6" id="fnref:6" title="See footnote" class="footnote">6</a> <br>
  <strong>&nbsp;32 percent</strong> for motor vehicle/traffic offenses<a href="#fn:7" id="fnref:7" title="See footnote" class="footnote">7</a> <br>
  <strong>&nbsp;&nbsp;7 percent</strong> for DUI offenses<a href="#fn:8" id="fnref:8" title="See footnote" class="footnote">8</a> <br>
   <strong>&nbsp;&nbsp;3 percent</strong> for criminal sexual assault/abuse offenses<a href="#fn:9" id="fnref:9" title="See footnote" class="footnote">9</a> <br>
  <strong>&lt;2 percent</strong> for non-violent sex offenses<a href="#fn:10" id="fnref:10" title="See footnote" class="footnote">10</a> <br>
  <strong>&lt;2 percent</strong> for status offenses<a href="#fn:11" id="fnref:11" title="See footnote" class="footnote">11</a> <br>
   <strong>&lt;2 percent</strong> for endangering children offenses<a href="#fn:12" id="fnref:12" title="See footnote" class="footnote">12</a>

 </p><p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data </em></p>
</div>
</div>



<div class="card spacerTop50">
  <div class="card-block">


 <h3 id="prior-arrests-for-2015-murder-arrestees-n541">Prior Arrests for 2015 Murder Arrestees (N=541)</h3>

 <!-- <p>hc_M_def_chart_1100 <a href="http://jsfiddle.net/liamhanninen/nwpnbrjn/">http://jsfiddle.net/liamhanninen/nwpnbrjn/</a></p> -->

 <render-chart
        chart="hc_M_def_chart_1100"
        displayTable = "false"
       >
    </render-chart>

    <table class="table table-striped hc-table">
    <thead>
        <tr role="row">
            <th class="sorting_asc" tabindex="0" aria-controls="hc0d75748925f54263f736ff00" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 447px;"></th>
            <th class="sorting" tabindex="0" aria-controls="hc0d75748925f54263f736ff00" rowspan="1" colspan="1" aria-label=" Prior Arrests: activate to sort column ascending" style="width: 549px;"> Prior Arrests</th>
        </tr>
    </thead>
    <tbody>

        <tr role="row" class="odd">
            <td class="strong sorting_1">0 priors</td>
            <td> 9.1% </td>
        </tr>
        <tr role="row" class="even">
            <td class="strong sorting_1">1 prior</td>
            <td> 9.4% </td>
        </tr>
        <tr role="row" class="odd">
            <td class="strong sorting_1">2-5 priors</td>
            <td> 25.5% </td>
        </tr>
        <tr role="row" class="odd">
            <td class="strong sorting_1">6-10 priors</td>
            <td> 21.6% </td>
        </tr>
        <tr role="row" class="odd">
            <td class="strong sorting_1">11-15 priors</td>
            <td> 12.6%</td>
        </tr>
        <tr role="row" class="even">
            <td class="strong sorting_1">16-20 priors</td>
            <td> 7.6% </td>
        </tr>

        <tr role="row" class="even">
            <td class="strong sorting_1">21+ priors</td>
            <td> 14.2% </td>
        </tr>

    </tbody>
</table>
 <p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>

</div>
</div>

 <div class="footnotes"><hr><ol><li id="fn:1">Homicide/Murder, Robbery, Battery, Assault, Home Invasion, Stalking, Kidnapping, etc. <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:2">Burglary, Theft, Arson, Forgery, Fraud, Criminal Trespass, etc. <a href="#fnref:2" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:3">Possession or Delivery of Cannabis, Possession or Delivery of a Controlled Substance, Sale or Possession of Hypodermic Syringes or Needles, etc. <a href="#fnref:3" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:4">All other criminal offenses not included in a specific category; other offense includes Suicide and Other Public Complaints. <a href="#fnref:4" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:5">Gambling, False Police Report, Looting, Perjury, Bribery, etc. <a href="#fnref:5" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:6">Unlawful Use of Weapon, Unlawful Possession of a Weapon, Reckless Discharge of a Firearm, Armed Violence, etc. <a href="#fnref:6" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:7">Reckless Driving, No Driver’s License, No Registration, Speeding, etc. <a href="#fnref:7" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:8">Driving Under the Influence of Alcohol &amp; Driving Under the Influence of Drugs <a href="#fnref:8" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:9">Criminal Sexual Assault, Criminal Sexual Abuse, Sexual Exploitation of a Child, etc. <a href="#fnref:9" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:10">Prostitution, Pimping, Obscenity, Public Indecency, Bigamy, Child Pornography, etc. <a href="#fnref:10" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:11">Curfew, Truancy, Runaway, Illegal Possession or Consumption of Alcohol by a Minor, etc. <a href="#fnref:11" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:12">Endangering the Life or Health of a Child, Child Abandonment, Fail to Pay Child Support, Neglect of Child, etc. <a href="#fnref:12" title="Return to article" class="reversefootnote">↩</a></li></ol></div>
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
            segment: 'murder'
        }
    }
}
</script>
