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
