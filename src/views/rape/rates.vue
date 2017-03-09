<template>

<section>

<div id="wrapper">
  <!-- Sidebar -->
  <sidebar :segment="segment" />

  <!-- Page Content -->
  <div id="page-content-wrapper">
      <div id="page-context">
          <div class="row">
            <div class="col-md-12">
              <h1 id="rates" class="upper page-head">Rates<a href="#fn:1" id="fnref:1" title="See footnote" class="footnote">1</a></h1>
            </div>
            <!-- <div class="col-md-2">

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

            </div> -->

          </div>

          <div class="row">
              <div class="col-md-12">

                <!-- page content here -->




<h3 id="rates-of-rape-per-100000-in-americas-10-largest-cities-january-june-2016">Rates of Rape per 100,000 in America’s 10 Largest Cities, January-June 2016</h3>

<!-- <p>hc_Rape_def_map_100 <a href="https://fiddle.jshell.net/esheridan/cn607hy1/">https://fiddle.jshell.net/esheridan/cn607hy1/</a></p> -->

 <render-map mapFile="map1data.js" optionsFile="map1options.js" :segment="segment"></render-map>


<table id="hc_Rape_def_table_100">
<thead><tr><th>Rank</th><th>City</th><th>Rate</th></tr></thead><tbody>
<tr><td>1</td><td>Philadelphia</td><td>40.45</td></tr>
<tr><td>2</td><td>San Antonio</td><td>38.92</td></tr>
<tr><td>3</td><td>Los Angeles</td><td>30.87</td></tr>
<tr><td>4</td><td>Dallas</td><td>29.31</td></tr>
<tr><td>5</td><td>Houston</td><td>26.78</td></tr>
<tr><td>6</td><td>Phoenix</td><td>25.53</td></tr>
<tr><td>7</td><td>Chicago</td><td>24.88</td></tr>
<tr><td>8</td><td>San Jose</td><td>21.42</td></tr>
<tr><td>9</td><td>San Diego</td><td>21.29</td></tr>
<tr><td>10</td><td>New York</td><td>8.14</td></tr>
</tbody></table>

<p><em>Sources: Major Cities Chiefs Association Violent Crime-Survey; Houston Police Department Data; U.S. Census Bureau population estimates, 2015</em></p>



<h3 id="rates-of-rape-per-100000-by-state-2015">Rates of Rape per 100,000 by State, 2015</h3>

<!-- <p>hc_Rape_def_map_200 <a href="https://fiddle.jshell.net/esheridan/h9jkgLhs/">https://fiddle.jshell.net/esheridan/h9jkgLhs/</a></p> -->
<render-map mapFile="map2data.js" optionsFile="map2options.js" :segment="segment"></render-map>



<p><em>Source: ICJIA Analysis of 2015 FBI Uniform Crime Report Data</em></p>

<p>Illinois ranked 30th across the country in 2015, with a rape rate of 37.5 per 100,000 residents.</p>



<h2 id="prevalence-by-county">Prevalence by County</h2>

<p>In 2015, 4,530 rapes were reported by law enforcement agencies to the I-UCR program. Law enforcement agencies in 82 of Illinois' 102 counties reported at least one rape to the I-UCR program; 18 other counties reported zero rape occurrences that year. Calhoun and Pope counties did not report data to the I-UCR program.</p>

<p>Without calculating the rate of rapes per county population, the raw numbers of occurrences provide only partial information. This chart shows the five counties experiencing the highest number of reported rapes and the five counties with the highest rates of rape. As can be seen, the smaller population of Vermilion County actually produces a higher rate of rapes per population than Cook County, which reported a much higher number of rapes.</p>



<h3 id="number-and-rate-of-rapes-per-100000-2015">Number and Rate of Rapes per 100,000, 2015</h3>

<!-- <p>hc_Rape_def_chart_150 <a href="http://jsfiddle.net/esheridan/8h5ssogk/">http://jsfiddle.net/esheridan/8h5ssogk/</a></p> -->

<render-chart
       chart="hc_Rape_def_chart_150"
      >
   </render-chart>


<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h3 id="rates-of-rape-per-100000-by-county-2015">Rates of Rape per 100,000 by County, 2015</h3>

<!-- <p>hc_Rape_def_map_300 <a href="https://fiddle.jshell.net/esheridan/ny9qgejr/">https://fiddle.jshell.net/esheridan/ny9qgejr/</a></p> -->
<render-map mapFile="map3data.js" optionsFile="map3options.js" :segment="segment"></render-map>

<p><strong>* Pope and Calhoun did not report.</strong></p>
<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>

<p>Thirteen counties had rates of rape below 10 per 100,000 population, compared to the state rate of 37.5 per 100,000 population. </p>



<h4 id="five-illinois-counties-with-highest-rape-rates-2015">Five Illinois Counties with Highest Rape Rates, 2015</h4>

<table id="hc_Rape_def_table_200">
<thead><tr><th>                       County</th><th>Population</th><th>Rape Rate Per 100,000</th></tr></thead>
<tfoot><tr><td><b>Illinois<b></b></b></td><td><b>12,859,995<b></b></b></td><td><b>37.50<b></b></b></td></tr></tfoot>
<tbody>
<tr><td>Vermilion</td><td>         79,728 </td><td>120.41</td></tr>
<tr><td>Jersey</td><td>            22,571 </td><td>101.90</td></tr>
<tr><td>Marion</td><td>      38,571 </td><td>85.56</td></tr>
<tr><td>Richland</td><td>         16,061 </td><td>74.72</td></tr>
<tr><td>Sangamon</td><td>            198,997 </td><td>73.87</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h4 id="rape-rates-for-the-five-largest-illinois-counties-by-population-2015">Rape Rates for the Five Largest Illinois Counties by Population, 2015</h4>

<table id="hc_Rape_def_table_300">

<thead><tr><th>County</th><th>Population</th><th>Rape Rate Per 100,000</th></tr></thead>
<tfoot><tr><td><b>Illinois<b></b></b></td><td><b>12,859,995<b></b></b></td><td><b>37.50<b></b></b></td></tr></tfoot>
<tbody>
<tr><td>Cook</td><td>      5,246,456 </td><td>36.42</td></tr>
<tr><td>DuPage</td><td>         932,708 </td><td>17.05</td></tr>
<tr><td>Lake</td><td>         705,186 </td><td>21.98</td></tr>
<tr><td>Will</td><td>         685,419 </td><td>23.93</td></tr>
<tr><td>Kane</td><td>         527,306 </td><td>22.57</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h2 id="prevalence-by-municipality">Prevalence by Municipality</h2>

<p>The population size of cities and towns will affect the calculated rate of crime occurrence. As an example in Cook County, Chicago did not rank in the top five in rates of rape in the county, even though more rapes occurred there than any other town.</p>



<h4 id="municipalities-with-the-highest-rates-of-rape-in-cook-county-2015">Municipalities with the Highest Rates of Rape in Cook County, 2015</h4>

<table id="hc_Rape_def_table_400">
<thead><tr><th>Rank</th><th>City</th><th>Population</th><th>Number of Rapes</th><th>Rape Rate Per 100,000</th></tr></thead>
<tfoot><tr><td>&nbsp;</td><td><b>Cook County<b></b></b></td><td><b>5,246,456<b></b></b></td><td><b>1,911<b></b></b></td><td><b>36.42<b></b></b></td></tr></tfoot>
<tbody>
<tr><td>1</td><td>Golf</td><td>                                            508 </td><td>                             1 </td><td>196.85</td></tr>
<tr><td>2</td><td>Maywood</td><td>                                              24,141 </td><td>                               24 </td><td>99.42</td></tr>
<tr><td>3</td><td>Harvey</td><td>                                            25,361 </td><td>                               23 </td><td>90.69</td></tr>
<tr><td>4</td><td>Olympia Fields</td><td>                                      5,058 </td><td>                           4 </td><td>79.08</td></tr>
<tr><td>5</td><td>Park Forest (within Cook County)</td><td>                                            18,767 </td><td>                               14 </td><td>74.60</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

<p>The graph and table below show the cities in Illinois whose average three-year (2013, 2014, and 2015) rate of rape was significantly greater than the statewide rate during the same time-period. </p>



<h3 id="cities-in-illinois-with-highest-rates-of-rape-per-100000-2015">Cities in Illinois with Highest Rates of Rape per 100,000, 2015</h3>

<!-- <p>hc_Rape_def_map_400 <a href="https://fiddle.jshell.net/esheridan/0wga6dzc/">https://fiddle.jshell.net/esheridan/0wga6dzc/</a></p> -->

<render-map mapFile="map4data.js" optionsFile="map4options.js" :segment="segment"></render-map>

<table id="hc_Rape_def_table_500" style="">

<thead><tr><th>City</th><th>County</th><th>Average Rapes 2013-2015</th><th>Average Population 2013-2015</th><th>Rate 2013-2015 Per 100,000</th><th>SDs from the Mean</th></tr></thead><tbody>
 <tr><td>Sauget</td><td>St. Clair</td><td>2.3</td><td>153.7</td><td>1508.17</td><td>21.92</td></tr>
 <tr><td>Godley (MCA)</td><td>Grundy</td><td>0.3</td><td>55.0</td><td>606.06</td><td>8.58</td></tr>
 <tr><td>Mccook</td><td>Cook</td><td>0.7</td><td>231.7</td><td>287.98</td><td>3.88</td></tr>
 <tr><td>East St. Louis</td><td>St. Clair</td><td>58.3</td><td>26585.0</td><td>219.44</td><td>2.87</td></tr>
 <tr><td>South Roxana</td><td>Madison</td><td>4.0</td><td>2005.0</td><td>199.82</td><td>2.58</td></tr>
 <tr><td>London Mills (MCA)</td><td>Fulton</td><td>0.7</td><td>374.7</td><td>177.31</td><td>2.24</td></tr>
 <tr><td>Thomasboro</td><td>Champaign</td><td>2.0</td><td>1137.0</td><td>175.70</td><td>2.22</td></tr>
 <tr><td>Roxana</td><td>Madison</td><td>2.3</td><td>1497.3</td><td>155.56</td><td>1.92</td></tr>
 <tr><td>Danville</td><td>Vermilion</td><td>46.3</td><td>32330.7</td><td>143.39</td><td>1.74</td></tr>
 <tr><td>Hoopeston</td><td>Vermilion</td><td>7.3</td><td>5247.7</td><td>139.74</td><td>1.69</td></tr>
 <tr><td>Centralia (MCA)</td><td>Clinton</td><td>3.3</td><td>2575.0</td><td>129.64</td><td>1.54</td></tr>
 <tr><td>Mt Vernon</td><td>Jefferson</td><td>19.7</td><td>15196.3</td><td>129.41</td><td>1.54</td></tr>
 <tr><td>Tilton</td><td>Vermilion</td><td>3.3</td><td>2652.3</td><td>125.67</td><td>1.48</td></tr>
 <tr><td>East Alton</td><td>Madison</td><td>7.3</td><td>6172.3</td><td>118.72</td><td>1.38</td></tr>
 <tr><td>Rantoul</td><td>Champaign</td><td>15.0</td><td>13043.7</td><td>115.07</td><td>1.32</td></tr>
 <tr><td>Streator (MCA)</td><td>Lasalle</td><td>15.0</td><td>13254.0</td><td>113.98</td><td>1.31</td></tr>
 <tr><td>Clinton</td><td>De Witt</td><td>8.0</td><td>7108.7</td><td>112.58</td><td>1.29</td></tr>
 <tr><td>Bethalto</td><td>Madison</td><td>10.3</td><td>9399.3</td><td>109.87</td><td>1.25</td></tr>
 <tr><td>Kewanee</td><td>Henry</td><td>13.7</td><td>12627.3</td><td>108.37</td><td>1.22</td></tr>
 <tr><td>Godley (MCA)</td><td>Will</td><td>0.7</td><td>616.7</td><td>108.21</td><td>1.22</td></tr>
 <tr><td>Winthrop Harbor</td><td>Lake</td><td>7.0</td><td>6725.3</td><td>104.09</td><td>1.16</td></tr>
 <tr><td>Cairo</td><td>Alexander</td><td>2.7</td><td>2569.0</td><td>104.02</td><td>1.16</td></tr>
 <tr><td>Jerseyville</td><td>Jersey</td><td>8.7</td><td>8543.0</td><td>101.46</td><td>1.12</td></tr>
 <tr><td>Palestine</td><td>Crawford</td><td>1.3</td><td>1329.7</td><td>100.55</td><td>1.11</td></tr>
 <tr><td>Metropolis</td><td>Massac</td><td>6.3</td><td>6415.3</td><td>98.75</td><td>1.08</td></tr>
 <tr><td>Dekalb</td><td>DeKalb</td><td>42.7</td><td>43867.3</td><td>97.26</td><td>1.06</td></tr>
 <tr><td>Fayetteville</td><td>St. Clair</td><td>0.3</td><td>347.3</td><td>96.34</td><td>1.05</td></tr>
 <tr><td>Centralia (MCA)</td><td>Marion</td><td>9.7</td><td>10154.7</td><td>95.28</td><td>1.03</td></tr>
 <tr><td>Rockford</td><td>Winnebago</td><td>141.3</td><td>149322.3</td><td>94.66</td><td>1.02</td></tr>
 <tr><td>Peoria Heights</td><td>Peoria</td><td>5.7</td><td>6042.7</td><td>93.99</td><td>1.01</td></tr>
 <tr><td>Collinsville (MCA)</td><td>St. Clair</td><td>2.7</td><td>2892.0</td><td>93.25</td><td>1.00</td></tr>
</tbody></table>

<p><em>“MCA” = multiple county agency</em> <br>
<em>“SD” = standard deviation</em> <br>
<em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

<div class="footnotes"><hr><ol><li id="fn:1">This article focuses on data from the Federal and Illinois Uniform Crime Report, Illinois’ Criminal History Records Information (CHRI), and the Illinois Department of Corrections (IDOC) data. The Jeanne Clery Act requires colleges and universities to collect and report crime data, including data on rapes, and is an additional source of information for those interested. <a href="#fnref:1" title="Return to article" class="reversefootnote">↩</a></li></ol></div>





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
    name: 'Rape_Definitions',

    mounted () {
      $(document).ready(function() {


          // call Datatables to render
          $('#hc_Rape_def_table_100').DataTable(utils.dtConfig);
          $('#hc_Rape_def_table_200').DataTable(utils.dtConfig);
          $('#hc_Rape_def_table_300').DataTable(utils.dtConfig);
          $('#hc_Rape_def_table_400').DataTable(utils.dtConfig);
          $('#hc_Rape_def_table_500').DataTable(utils.dtConfig);



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
            segment: 'rape'

        }
    }
}
</script>
<style scoped>


</style>
