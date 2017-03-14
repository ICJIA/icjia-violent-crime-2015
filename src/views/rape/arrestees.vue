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


<p>According to the CHRI System, of the 287,629 persons arrested in Illinois in 2015, just 432 were arrested for rape, accounting for less than one percent of all arrests. The statute of limitations on arrests for criminal sexual assault in Illinois varies by the severity of the crime and the age of the victim, but is not less than 10 years if the victim was at least 18 years old and reported the crime within three years of its occurrence. As a result, crimes for the arrests recorded may not have occurred in 2015.</p>

<h2 id="gender-of-persons-arrested-for-rape-2015-n432">Gender of Persons Arrested for Rape, 2015 (N=432)</h2>

<!-- <p>hc_Rape_def_chart_700 <a href="http://jsfiddle.net/esheridan/x0bmdtye/">http://jsfiddle.net/esheridan/x0bmdtye/</a></p> -->

<render-chart
       chart="hc_Rape_def_chart_700"
       displayTable = "false"
      >
   </render-chart>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>

<h2 id="race-of-persons-arrested-for-rape-2015-n432">Race of Persons Arrested for Rape, 2015 (N=432)</h2>

<!-- <p>hc_Rape_def_chart_800 <a href="http://jsfiddle.net/esheridan/8gsvxreb/">http://jsfiddle.net/esheridan/8gsvxreb/</a></p> -->

<render-chart
       chart="hc_Rape_def_chart_800"
       displayTable = "false"
      >
   </render-chart>


<p><em>Source: ICJIA Analysis of 2015 Illinois State Police CHRI Data</em></p>

<h2 id="age-of-persons-arrested-for-rape-2015-n432">Age of Persons Arrested for Rape, 2015 (N=432)</h2>

<!-- <p>hc_Rape_def_chart_900 <a href="http://jsfiddle.net/esheridan/xonwu5q7/">http://jsfiddle.net/esheridan/xonwu5q7/</a></p> -->

<!-- <render-chart
       chart="hc_Rape_def_chart_900"
       displayTable = "false"
      >
   </render-chart> -->


   <img src="/static/rape.png" class="img-responsive center" >


<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>

<p>The median age of those arrested for rape in Illinois was 28 in 2015. </p>

<h2 id="criminal-histories">Criminal Histories</h2>

<p>One-third of those arrested for rape in 2015 had no previous arrests recorded in the CHRI System (37 percent). Only arrests made in Illinois are submitted to the CHRI System.</p>



<h3 id="more-than-half-of-the-432-persons-arrested-for-rape-in-illinois-in-2015-had-at-least-one-prior-arrest">More than half of the 432 persons arrested for rape in Illinois in 2015 had at least one prior arrest:</h3>

<p><strong>63 percent</strong> for any type of offense <br>
<strong>38 percent</strong> for violent/person offenses<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a> <br>
<strong>38 percent</strong> for property offenses<a href="#fn:2" id="fnref:2" title="See footnote" class="footnote">2</a> <br>
<strong>30 percent</strong> for other offenses<a href="#fn:3" id="fnref:3" title="See footnote" class="footnote">3</a> <br>
<strong>28 percent</strong> for public order offenses<a href="#fn:4" id="fnref:4" title="See footnote" class="footnote">4</a> <br>
<strong>26 percent</strong> for motor vehicle/traffic offenses<a href="#fn:5" id="fnref:5" title="See footnote" class="footnote">5</a> <br>
<strong>25 percent</strong> for drug offenses<a href="#fn:6" id="fnref:6" title="See footnote" class="footnote">6</a> <br>
<strong>12 percent</strong> for criminal sexual assault/abuse offenses<a href="#fn:7" id="fnref:7" title="See footnote" class="footnote">7</a> <br>
<strong>11 percent</strong> for DUI offenses<a href="#fn:8" id="fnref:8" title="See footnote" class="footnote">8</a> <br>
<strong>10 percent</strong> for deadly weapons offenses<a href="#fn:9" id="fnref:9" title="See footnote" class="footnote">9</a> <br>
<strong>&nbsp;&nbsp;7 percent</strong> for non-violent sex offenses<a href="#fn:10" id="fnref:10" title="See footnote" class="footnote">10</a> <br>
<strong>&nbsp;&nbsp;3 percent</strong> for endangering children offenses<a href="#fn:11" id="fnref:11" title="See footnote" class="footnote">11</a> <br>
<strong>&lt;1</strong> percent</strong> for status offenses<a href="#fn:12" id="fnref:12" title="See footnote" class="footnote">12</a>

</p><p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>



<h3 id="prior-arrests-for-2015-rape-arrestees-n432">Prior Arrests for 2015 Rape Arrestees (N=432)</h3>

<!-- <p>hc_Rape_def_chart_1100 <a href="https://jsfiddle.net/esheridan/kgjb9tub/">https://jsfiddle.net/esheridan/kgjb9tub/</a></p> -->

<render-chart
       chart="hc_Rape_def_chart_1100"
       displayTable = "false"
      >
   </render-chart>



<p><em>Source: ICJIA Analysis of Illinois State Police CHRI Data</em></p>

<div class="footnotes"><hr><ol><li id="fn:1">Homicide/Murder, Robbery, Battery, Assault, Home Invasion, Stalking, Kidnapping, etc. <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:2">Burglary, Theft, Arson, Forgery, Fraud, Criminal Trespass, etc. <a href="#fnref:2" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:3">All other criminal offenses not included in a specific category; other offense includes Suicide and Other Public Complaints. <a href="#fnref:3" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:4">Gambling, False Police Report, Looting, Perjury, Bribery, etc. <a href="#fnref:4" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:5">Reckless Driving, No Driver’s License, No Registration, Speeding, etc. <a href="#fnref:5" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:6">Possession or Delivery of Cannabis, Possession or Delivery of a Controlled Substance, Sale or Possession of Hypodermic Syringes or Needles, etc. <a href="#fnref:6" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:7">Criminal Sexual Assault, Criminal Sexual Abuse, Sexual Exploitation of a Child, etc. <a href="#fnref:7" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:8">Driving Under the Influence of Alcohol &amp; Driving Under the Influence of Drugs <a href="#fnref:8" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:9">Unlawful Use of Weapon, Unlawful Possession of a Weapon, Reckless Discharge of a Firearm, Armed Violence, etc. <a href="#fnref:9" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:10">Prostitution, Pimping, Obscenity, Public Indecency, Bigamy, Child Pornography, etc. <a href="#fnref:10" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:11">Endangering the Life or Health of a Child, Child Abandonment, Fail to Pay Child Support, Neglect of Child, etc. <a href="#fnref:11" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:12">Curfew, Truancy, Runaway, Illegal Possession or Consumption of Alcohol by a Minor, etc. <a href="#fnref:12" title="Return to article" class="reversefootnote">↩</a></li></ol></div>


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
    name: 'Rape -- Arrestees',
    methods: {

    },
    metaInfo() {
    return {
      title: this.title

    }
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
            title: 'Rape -- Arrestees',
            displayTable: true,
            segment: 'rape'
        }
    }
}
</script>
