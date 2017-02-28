<template>
<div class="app">
    <navbar/>
    <h1 id="definition">Definition</h1>

 <p>In Illinois, criminal homicide is charged as first degree murder, second degree murder, involuntary manslaughter or reckless homicide. First degree murder is defined as killing another person through an act which is intended to kill them, is likely to kill them, or while committing a forcible felony, such as a robbery or rape. <br>
 Source: 720 ILCS 5/9-1</p>

 <p>Second degree murder is defined as killing another person while acting under sudden intense passion resulting from the serious provocation by the person killed, or where the offender believes his or her actions to be justified and the belief is determined later by the criminal justice system not to be reasonable. <br>
 Source: 720 ILCS 5/9-2</p>

 <p>Involuntary manslaughter is defined as the unintentional killing of another person without justification, usually through an accident or reckless act; reckless homicide is the term applied to circumstances where the cause of death involved the driving of a motor vehicle. <br>
 Source: 720 ILCS 7/9-3 </p>

 <p>First and second degree murder data are available via the Illinois Uniform Crime Reporting (I-UCR) program. Here, murder is defined as the willful killing of one human being by another (first degree murder) or the killing of another person through gross negligence (second degree murder). Any death caused by injuries received in a fight, argument, quarrel, battery, or commission of a crime must be reported as a criminal homicide. <br>
 Source: Illinois State Police Uniform Crime Report</p>



 <h2 id="rates">Rates</h2>



 <h3 id="murder-rates-per-100000-in-americas-10-largest-cities-january-june-2016">Murder Rates per 100,000 in America’s 10 Largest Cities, January-June 2016</h3>

 <p>hc_M_def_map_100 <a href="http://jsfiddle.net/liamhanninen/dfexajwx/">http://jsfiddle.net/liamhanninen/dfexajwx/</a> <br>
 <em>Sources: Major Cities Chiefs Association Violent Crime-Survey; Houston Police Department Data; U.S. Census Bureau population estimates, 2015</em></p>



 <h3 id="murder-rates-per-100000-by-state-2015">Murder Rates per 100,000 by State, 2015</h3>

 <p>hc_M_def_map_200 <a href="http://jsfiddle.net/liamhanninen/h1Lyme1p/">http://jsfiddle.net/liamhanninen/h1Lyme1p/</a></p>

 <table>
 <thead><tr><th>Rank</th><th>City</th><th>Rate</th></tr></thead><tbody>
  <tr><td>1</td><td>Chicago</td><td>11.62</td></tr>
  <tr><td>2</td><td>Philadelphia</td><td>7.78</td></tr>
  <tr><td>3</td><td>Houston</td><td>6.88</td></tr>
  <tr><td>4</td><td>Dallas</td><td>6.38</td></tr>
  <tr><td>5</td><td>Phoenix</td><td>4.99</td></tr>
  <tr><td>6</td><td>San Antonio</td><td>4.76</td></tr>
  <tr><td>7</td><td>Los Angeles</td><td>3.37</td></tr>
  <tr><td>8</td><td>San Jose</td><td>2.43</td></tr>
  <tr><td>9</td><td>New York</td><td>1.88</td></tr>
  <tr><td>10</td><td>San Diego</td><td>1.72</td></tr>
 </tbody></table>

 <p><em>Sources: Major Cities Chiefs Association Violent Crime-Survey; Houston Police Department Data; U.S. Census Bureau population estimates, 2015</em></p>

 <p>Illinois ranked 16th across the country in 2015, with a murder rate of 5.8 per 100,000 population.</p>



 <h2 id="prevalence-by-county">Prevalence by County</h2>

 <p>In 2015, 724 murders were reported by law enforcement agencies to the I-UCR program. Murders were reported in 37 of Illinois’ 102 counties, and of them, 15 reported only a single murder. The counties of Calhoun and Pope did not report crime data to the I-UCR program.</p>

 <p>Without calculating the murder rates per county population, the raw numbers of occurrences provide only partial information. The chart below depicts the number of murders and rate of murders from the same counties to illustrate this difference (the counties with the highest five numbers and highest five rates were chosen; Cook, St. Clair, and Peoria were in the top five for both numbers and rates). As can be seen, when the smaller population of St. Clair County is taken into account, it has a higher murder rate per population than Cook County, although Cook County reported a much higher number of murders.</p>



 <h3 id="number-and-rate-of-murders-per-100000-2015">Number and Rate of Murders per 100,000, 2015</h3>

 <!-- <p>hc_M_def_chart_150 <a href="http://jsfiddle.net/liamhanninen/0juk04Lm/">http://jsfiddle.net/liamhanninen/0juk04Lm/</a></p> -->

 <render-chart
        chart="hc_M_def_chart_150"
       >
    </render-chart>

 <p><em>Source: ICJIA Analysis of 2015 Illinois State Police UCR Data</em></p>



 <h3 id="murder-rates-per-100000-by-county-2015">Murder Rates per 100,000 by County, 2015</h3>

 <p>hc_M_def_map_300 <a href="http://jsfiddle.net/liamhanninen/3fvdqtou/">http://jsfiddle.net/liamhanninen/3fvdqtou/</a></p>

 <p><em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

 <p>The overall murder rate in Illinois in 2015 was 5.8 murders per 100,000 residents.</p>



 <h4 id="five-illinois-counties-with-highest-murder-rates-2015">Five Illinois Counties with Highest Murder Rates, 2015</h4>

 <table id="hc_M_def_table_200">
 <thead><tr><th>                       County</th><th>Population</th><th>Murder Rate Per 100,000</th></tr></thead><tbody>
  <tr><td>St. Clair</td><td>         265,729 </td><td>12.04</td></tr>
  <tr><td>Marion</td><td>            38,571 </td><td>10.37</td></tr>
  <tr><td>Cook</td><td>      5,246,456 </td><td>10.18</td></tr>
  <tr><td>Peoria</td><td>         187,319 </td><td>8.54</td></tr>
  <tr><td>Marshall</td><td>            12,014 </td><td>8.32</td></tr>
  <tr><td>Illinois</td><td>12,859,995</td><td>5.8</td></tr>
 </tbody></table>



 <h4 id="murder-rates-for-the-five-largest-illinois-counties-by-population-2015">Murder Rates for the Five Largest Illinois Counties by Population, 2015</h4>

 <table id="hc_M_def_table_300">

 <thead><tr><th>County</th><th>Population</th><th>Murder Rate Per 100,000</th></tr></thead><tbody>
  <tr><td>Cook</td><td>      5,246,456 </td><td>10.18</td></tr>
  <tr><td>Kane</td><td>         527,306 </td><td>2.47</td></tr>
  <tr><td>Will</td><td>         685,419 </td><td>2.63</td></tr>
  <tr><td>Lake</td><td>         705,186 </td><td>1.99</td></tr>
  <tr><td>DuPage</td><td>         932,708 </td><td>0.43</td></tr>
  <tr><td>Illinois</td><td>12,859,995</td><td>5.8</td></tr>
 </tbody></table>



 <h2 id="prevalence-by-municipality">Prevalence by Municipality</h2>

 <p>Murders tend to be concentrated in urban centers within a county. The population size of cities and towns will affect the calculated rate of occurrence. For example, in Cook County, Chicago did not rank first in murder rates in the county, even though more murders occurred there than in any other town.  The three municipalities in Cook County with higher murder rates than Chicago in 2015 were Maywood, Rosemont, and Harvey.</p>



 <h4 id="municipalities-with-the-highest-murder-rates-in-cook-county-2015">Municipalities with the Highest Murder Rates in Cook County, 2015</h4>

 <table id="hc_M_def_table_400">
 <thead><tr><th>Rank</th><th>City</th><th>Total Population</th><th>Number of Murders</th><th>Murder Rate Per 100,000</th></tr></thead><tbody>
  <tr><td>1</td><td>Maywood</td><td>                                            24,141 </td><td>                             13 </td><td>53.85</td></tr>
  <tr><td>2</td><td>Rosemont</td><td>                                              4,231 </td><td>                               1 </td><td>23.64</td></tr>
  <tr><td>3</td><td>Harvey</td><td>                                            25,361 </td><td>                               5 </td><td>19.72</td></tr>
  <tr><td>4</td><td>Chicago</td><td>                                      2,728,695 </td><td>                           478 </td><td>17.52</td></tr>
  <tr><td>5</td><td>Midlothian</td><td>                                            14,932 </td><td>                               2 </td><td>13.39</td></tr>
  <tr><td>&nbsp;</td><td>Cook County</td><td>5,246,456</td><td>534</td><td>5.8</td></tr>
 </tbody></table>

 <p><em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

 <p>The graph and table below show the cities in Illinois whose average 3-year (2013-2015) murder rate was significantly greater than the entire state of Illinois’ average 3-year murder rate.</p>



 <h3 id="cities-in-illinois-with-highest-murder-rates-per-100000-2015">Cities in Illinois with Highest Murder Rates per 100,000, 2015</h3>

 <p>hc_M_def_map_400 <a href="http://jsfiddle.net/liamhanninen/ewpuhj7s/">http://jsfiddle.net/liamhanninen/ewpuhj7s/</a></p>

 <p><em>Source: ICJIA Analysis of Illinois State Police Uniform Report Data</em></p>
   <!-- //app root -->
  </div>
</template>

<script>

import Navbar from '../../components/Navbar'
import RenderChart from '../../components/RenderChart.vue'
import RenderMap from '../../components/RenderMap.vue'

export default {
    name: 'S01P01',
    methods: {

    },
    components: {
        Navbar,
        RenderChart,
        RenderMap
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01',
            displayTable: true,

        }
    }
}
</script>
