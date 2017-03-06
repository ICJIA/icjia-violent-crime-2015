<template>

<section>

<div id="wrapper">
  <!-- Sidebar -->
  <sidebar segment="murder" />

  <!-- Page Content -->
  <div id="page-content-wrapper">
      <div id="page-context">
          <div class="row">
            <div class="col-md-10">
              <h1 id="rates" class="upper" style="margin: 0; padding: 0">Rates</h1>
            </div>
            <div class="col-md-2">

              <label class="switch-light" onclick="">
            <input type="checkbox" name="tableToggle" checked>
            <strong>
            <span style="text-transform: uppercase">Display Tables</span>
            </strong>
            <div style="height: 15px"></div>

            <span class="well">
            <span>Hide</span>
            <span>Show</span>
            <a class="btn btn-primary"></a>
            </span>
            </label>

            </div>

          </div>

          <div class="row">
              <div class="col-lg-12">



 <div class="card spacerTop50">
   <div class="card-block">
 <h3 id="murder-rates-per-100000-in-americas-10-largest-cities-january-june-2016" class="spacerBottom30">Murder Rates per 100,000 in America’s 10 Largest Cities, January-June 2016</h3>


 <render-map mapFile="map1data.js" optionsFile="map1options.js"></render-map>
 <!-- <p>hc_M_def_map_100 <a href="http://jsfiddle.net/liamhanninen/dfexajwx/">http://jsfiddle.net/liamhanninen/dfexajwx/</a> <br> -->



   <table id="hc_M_def_table_200" class="hc-table">
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

 <em>Sources: Major Cities Chiefs Association Violent Crime-Survey; Houston Police Department Data; U.S. Census Bureau population estimates, 2015</em></p>
</div>
</div>


<div class="card spacerTopBottom50">
  <div class="card-block">

 <h3 id="murder-rates-per-100000-by-state-2015">Murder Rates per 100,000 by State, 2015</h3>

 <!-- <p>hc_M_def_map_200 <a href="http://jsfiddle.net/liamhanninen/h1Lyme1p/">http://jsfiddle.net/liamhanninen/h1Lyme1p/</a></p> -->

 <render-map mapFile="map2data.js" optionsFile="map2options.js"></render-map>


 <p><em>Sources: Major Cities Chiefs Association Violent Crime-Survey; Houston Police Department Data; U.S. Census Bureau population estimates, 2015</em></p>

 <p>Illinois ranked 16th across the country in 2015, with a murder rate of 5.8 per 100,000 population.</p>

</div>
</div>

 <h2 id="prevalence-by-county" class="spacerTop20 hrule">Prevalence by County</h2>

 <p>In 2015, 724 murders were reported by law enforcement agencies to the I-UCR program. Murders were reported in 37 of Illinois’ 102 counties, and of them, 15 reported only a single murder. The counties of Calhoun and Pope did not report crime data to the I-UCR program.</p>

 <p>Without calculating the murder rates per county population, the raw numbers of occurrences provide only partial information. The chart below depicts the number of murders and rate of murders from the same counties to illustrate this difference (the counties with the highest five numbers and highest five rates were chosen; Cook, St. Clair, and Peoria were in the top five for both numbers and rates). As can be seen, when the smaller population of St. Clair County is taken into account, it has a higher murder rate per population than Cook County, although Cook County reported a much higher number of murders.</p>


 <div class="card spacerTopBottom50">
   <div class="card-block">
 <h3 id="number-and-rate-of-murders-per-100000-2015">Number and Rate of Murders per 100,000, 2015</h3>

 <!-- <p>hc_M_def_chart_150 <a href="http://jsfiddle.net/liamhanninen/0juk04Lm/">http://jsfiddle.net/liamhanninen/0juk04Lm/</a></p> -->

 <render-chart
        chart="hc_M_def_chart_150"
       >
    </render-chart>

 <p><em>Source: ICJIA Analysis of 2015 Illinois State Police UCR Data</em></p>
</div>
</div>

<div class="card spacerTopBottom50">
  <div class="card-block">


 <h3 id="murder-rates-per-100000-by-county-2015">Murder Rates per 100,000 by County, 2015</h3>

 <!-- <p>hc_M_def_map_300 <a href="http://jsfiddle.net/liamhanninen/3fvdqtou/">http://jsfiddle.net/liamhanninen/3fvdqtou/</a></p> -->

 <render-map mapFile="map3data.js" optionsFile="map3options.js"></render-map>

 <p><em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

 <p>The overall murder rate in Illinois in 2015 was 5.8 murders per 100,000 residents.</p>


</div>
</div>



 <div class="card spacerTopBottom50">
   <div class="card-block">

 <h3 id="five-illinois-counties-with-highest-murder-rates-2015">Five Illinois Counties with Highest Murder Rates, 2015</h3>

 <table id="hc_M_def_table_300">
 <thead><tr><th>                       County</th><th>Population</th><th>Murder Rate Per 100,000</th></tr></thead>
 <tfoot><tr><td><strong>Illinois</strong></td><td><strong>12,859,995</strong></td><td><strong>5.8</strong></td></tr></tfoot>
 <tbody>
  <tr><td>St. Clair</td><td>         265,729 </td><td>12.04</td></tr>
  <tr><td>Marion</td><td>            38,571 </td><td>10.37</td></tr>
  <tr><td>Cook</td><td>      5,246,456 </td><td>10.18</td></tr>
  <tr><td>Peoria</td><td>         187,319 </td><td>8.54</td></tr>
  <tr><td>Marshall</td><td>            12,014 </td><td>8.32</td></tr>

 </tbody></table>



 <h3 id="murder-rates-for-the-five-largest-illinois-counties-by-population-2015">Murder Rates for the Five Largest Illinois Counties by Population, 2015</h3>

 <table id="hc_M_def_table_350">

 <thead><tr><th>County</th><th>Population</th><th>Murder Rate Per 100,000</th></tr></thead>
 <tfoot><tr><td><strong>Illinois</strong></td><td><strong>12,859,995</strong></td><td><strong>5.8</strong></td></tr></tfoot>
 <tbody>
  <tr><td>Cook</td><td>      5,246,456 </td><td>10.18</td></tr>
  <tr><td>Kane</td><td>         527,306 </td><td>2.47</td></tr>
  <tr><td>Will</td><td>         685,419 </td><td>2.63</td></tr>
  <tr><td>Lake</td><td>         705,186 </td><td>1.99</td></tr>
  <tr><td>DuPage</td><td>         932,708 </td><td>0.43</td></tr>

 </tbody></table>
</div>
</div>


 <h2 id="prevalence-by-municipality" class="spacerTop20 hrule">Prevalence by Municipality</h2>

 <p>Murders tend to be concentrated in urban centers within a county. The population size of cities and towns will affect the calculated rate of occurrence. For example, in Cook County, Chicago did not rank first in murder rates in the county, even though more murders occurred there than in any other town.  The three municipalities in Cook County with higher murder rates than Chicago in 2015 were Maywood, Rosemont, and Harvey.</p>



  <div class="card spacerTopBottom50">
    <div class="card-block">
 <h3 id="municipalities-with-the-highest-murder-rates-in-cook-county-2015">Municipalities with the Highest Murder Rates in Cook County, 2015</h3>

 <table id="hc_M_def_table_400">
 <thead><tr><th>Rank</th><th>City</th><th>Total Population</th><th>Number of Murders</th><th>Murder Rate Per 100,000</th></tr></thead>
<tfoot><tr><td>&nbsp;</td><td>Cook County</td><td>5,246,456</td><td>534</td><td>5.8</td></tr></tfoot>

 <tbody>
  <tr><td>1</td><td>Maywood</td><td>                                            24,141 </td><td>                             13 </td><td>53.85</td></tr>
  <tr><td>2</td><td>Rosemont</td><td>                                              4,231 </td><td>                               1 </td><td>23.64</td></tr>
  <tr><td>3</td><td>Harvey</td><td>                                            25,361 </td><td>                               5 </td><td>19.72</td></tr>
  <tr><td>4</td><td>Chicago</td><td>                                      2,728,695 </td><td>                           478 </td><td>17.52</td></tr>
  <tr><td>5</td><td>Midlothian</td><td>                                            14,932 </td><td>                               2 </td><td>13.39</td></tr>

 </tbody></table>

 <p><em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

 <p>The graph and table below show the cities in Illinois whose average 3-year (2013-2015) murder rate was significantly greater than the entire state of Illinois’ average 3-year murder rate.</p>
</div>
</div>



 <div class="card spacerTop50">
   <div class="card-block">
 <h3 id="cities-in-illinois-with-highest-murder-rates-per-100000-2015">Cities in Illinois with Highest Murder Rates per 100,000, 2015</h3>

 <!-- <p>hc_M_def_map_400 <a href="http://jsfiddle.net/liamhanninen/ewpuhj7s/">http://jsfiddle.net/liamhanninen/ewpuhj7s/</a></p> -->

<render-map mapFile="map4data.js" optionsFile="map4options.js"></render-map>
<table id="hc_M_def_table_450" class="hc-table">

  <thead>
    <tr>
      <th>City</th>
      <th>County</th>
      <th>Average Homicides 2013-2015</th>
      <th>Average Population 2013-2015</th>
      <th>Rate 2013-2015 Per 100,000</th>
      <th>SDs from the Mean</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>Sauget</td>
      <td>St. Clair</td>
      <td>0.33</td>
      <td>153.67</td>
      <td>219.30</td>
      <td>21.12</td>
    </tr>
    <tr>
      <td>East St. Louis</td>
      <td>St. Clair</td>
      <td>23.67</td>
      <td>26585.00</td>
      <td>89.04</td>
      <td>8.46</td>
    </tr>
    <tr>
      <td>Breese</td>
      <td>Clinton</td>
      <td>3.33</td>
      <td>4525.67</td>
      <td>73.45</td>
      <td>6.94</td>
    </tr>
    <tr>
      <td>Cairo</td>
      <td>Alexander</td>
      <td>1.67</td>
      <td>2569.00</td>
      <td>64.32</td>
      <td>6.06</td>
    </tr>
    <tr>
      <td>Washington Park</td>
      <td>St. Clair</td>
      <td>2.33</td>
      <td>4048.00</td>
      <td>57.56</td>
      <td>5.40</td>
    </tr>
    <tr>
      <td>Maywood</td>
      <td>Cook</td>
      <td>9.00</td>
      <td>24166.33</td>
      <td>37.25</td>
      <td>3.43</td>
    </tr>
    <tr>
      <td>Harvey</td>
      <td>Cook</td>
      <td>7.33</td>
      <td>25382.00</td>
      <td>28.89</td>
      <td>2.61</td>
    </tr>
    <tr>
      <td>Caseyville</td>
      <td>St. Clair</td>
      <td>1.00</td>
      <td>4108.00</td>
      <td>24.63</td>
      <td>2.20</td>
    </tr>
    <tr>
      <td>Warsaw</td>
      <td>Hancock</td>
      <td>0.33</td>
      <td>1556.67</td>
      <td>21.51</td>
      <td>1.90</td>
    </tr>
    <tr>
      <td>Sauk Village (MCA)</td>
      <td>Cook</td>
      <td>2.00</td>
      <td>10562.00</td>
      <td>18.93</td>
      <td>1.65</td>
    </tr>
    <tr>
      <td>Oglesby</td>
      <td>LaSalle</td>
      <td>0.67</td>
      <td>3694.67</td>
      <td>18.06</td>
      <td>1.56</td>
    </tr>
    <tr>
      <td>Rochester</td>
      <td>Sangamon</td>
      <td>0.67</td>
      <td>3786.67</td>
      <td>17.61</td>
      <td>1.52</td>
    </tr>
    <tr>
      <td>Posen</td>
      <td>Cook</td>
      <td>1.00</td>
      <td>6031.33</td>
      <td>16.58</td>
      <td>1.42</td>
    </tr>
    <tr>
      <td>Kankakee</td>
      <td>Kankakee</td>
      <td>4.33</td>
      <td>27002.33</td>
      <td>16.03</td>
      <td>1.36</td>
    </tr>
    <tr>
      <td>Chicago</td>
      <td>Cook</td>
      <td>435.00</td>
      <td>2724456.67</td>
      <td>15.97</td>
      <td>1.36</td>
    </tr>
    <tr>
      <td>Riverdale</td>
      <td>Cook</td>
      <td>2.00</td>
      <td>13626.67</td>
      <td>14.67</td>
      <td>1.23</td>
    </tr>
    <tr>
      <td>Henry</td>
      <td>Marshall</td>
      <td>0.33</td>
      <td>2341.00</td>
      <td>14.01</td>
      <td>1.17</td>
    </tr>
    <tr>
      <td>Carrollton</td>
      <td>Greene</td>
      <td>0.33</td>
      <td>2408.67</td>
      <td>13.84</td>
      <td>1.15</td>
    </tr>
    <tr>
      <td>Zion</td>
      <td>Lake</td>
      <td>3.00</td>
      <td>24297.67</td>
      <td>12.34</td>
      <td>1.01</td>
    </tr>
    <tr>
      <td>Rockford</td>
      <td>Winnebago</td>
      <td>18.33</td>
      <td>149322.33</td>
      <td>12.28</td>
      <td>1.00</td>
    </tr>
    <!-- <tr>
      <td>Illinois Mean Criminal Homicide Rate = 2.00</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td></td>
    </tr> -->
  </tbody>

</table>
<div>
  <em>"MCA" = multiple county agency </em>
</div>

 <p><em>Source: ICJIA Analysis of Illinois State Police Uniform Report Data</em></p>

 </div>
 </div>

</div>
</div>
<my-footer />
</div>
</div>
<!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

   <!-- //app root -->
 </section>
</template>

<script>
const utils = require('../../utils')

import Sidebar from 'components/Sidebar'
import MyFooter from 'components/Footer'
import RenderChart from 'components/RenderChart'
import RenderMap from 'components/RenderMap'

// Datatables install with webpack: https://gist.github.com/marcstober/c34bb4bdf7ef622cb24d6675723749bd
// https://datatables.net/forums/discussion/32542/datatables-and-webpack
import dt from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';


export default {
    name: 'Murder_Definitions',

    mounted () {
      $(document).ready(function() {


          // call Datatables to render
          $('#hc_M_def_table_100').DataTable(utils.dtConfig);
          $('#hc_M_def_table_200').DataTable(utils.dtConfig);
          $('#hc_M_def_table_300').DataTable(utils.dtConfig);
          $('#hc_M_def_table_350').DataTable(utils.dtConfig);
          $('#hc_M_def_table_400').DataTable(utils.dtConfig);
          $('#hc_M_def_table_450').DataTable(utils.dtConfig);


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
        RenderMap,
        MyFooter
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01',
            displayTable: true,

        }
    }
}
</script>
<style scoped>


</style>
