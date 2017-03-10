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
              <h1 id="rates" class="upper page-head">Rates</h1>
            </div>

          </div>

          <div class="row">
            <div class="col-md-12">


<h3 id="aggravated-assault-rates-per-100000-in-americas-10-largest-cities-january-to-june-2016">Aggravated Assault Rates per 100,000 in America’s 10 Largest Cities, January to June 2016</h3>

<!-- <p>hc_Aslt_def_map_100 <a href="https://fiddle.jshell.net/esheridan/haooy8uf/">https://fiddle.jshell.net/esheridan/haooy8uf/</a></p> -->


 <render-map mapFile="map1data.js" optionsFile="map1options.js" :segment="segment"></render-map>

<table id="hc_Aslt_def_table_050">
<thead><tr><th>Rank</th><th>City</th><th>Rate</th></tr></thead><tbody>
 <tr><td>1</td><td>Houston</td><td>262.91</td></tr>
 <tr><td>2</td><td>Philadelphia</td><td>237.46</td></tr>
 <tr><td>3</td><td>San Antonio</td><td>232.54</td></tr>
 <tr><td>4</td><td>Los Angeles</td><td>194.57</td></tr>
 <tr><td>5</td><td>Phoenix</td><td>182.53</td></tr>
 <tr><td>6</td><td>Dallas</td><td>166.14</td></tr>
 <tr><td>7</td><td>New York</td><td>116.09</td></tr>
 <tr><td>8</td><td>San Diego</td><td>114.70</td></tr>
 <tr><td>9</td><td>San Jose</td><td>106.24</td></tr>
 <tr><td>10</td><td>Chicago</td><td>101.12</td></tr>
</tbody></table>

<p><em>Sources: Major Cities Chiefs Association Violent Crime-Survey; Houston Police Department Data; Phoenix Police Department Data; U.S. Census Bureau population estimates, 2015</em></p>



<h3 id="aggravated-assault-rates-per-100000-by-state-2015">Aggravated Assault Rates per 100,000 by State, 2015</h3>

<!-- <p>hc_Aslt_def_map_200 <a href="https://fiddle.jshell.net/esheridan/26zqhjax/">https://fiddle.jshell.net/esheridan/26zqhjax/</a></p> -->

<render-map mapFile="map2data.js" optionsFile="map2options.js" :segment="segment"></render-map>


<p><em>Source: ICJIA Analysis of 2015 FBI Uniform Crime Report Data</em></p>

<p>Illinois ranked 27th across the country in 2015, with an aggravated assault rate of 224.6 per 100,000 population.</p>



<h2 id="prevalence-by-county">Prevalence by County</h2>

<p>In 2015, 27,883 aggravated assaults were reported by law enforcement agencies to the I-UCR program. Of Illinois’ 102 counties, 96 counties reported at least one aggravated assault and four counties reported none (Crime data were not reported by Calhoun and Pope counties).</p>

<p>The population size of cities and towns affect the calculated rate of occurrence. The number of aggravated assault occurrences in Cook County is much greater than in any other county. However, when population size is taken into account, counties with fewer aggravated assaults, such as Alexander, show a much higher assault rate than Cook County.</p>

<p>The chart below depicts the number of aggravated assaults and rate of aggravated assaults from the same counties to illustrate this difference (the counties with the highest five numbers and highest five rates were chosen; Winnebago and Sangamon were in the top five for both numbers and rates).</p>



<h3 id="number-and-rate-of-aggravated-assaults-per-100000-2015">Number and Rate of Aggravated Assaults per 100,000, 2015</h3>

<p>hc_Aslt_def_chart_150 <a href="http://jsfiddle.net/esheridan/8zbpqt1u/">http://jsfiddle.net/esheridan/8zbpqt1u/</a></p>


<render-chart
       chart="hc_Aslt_def_chart_150"
      >
   </render-chart>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h3 id="aggravated-assault-rates-per-100000-by-county-2015">Aggravated Assault Rates per 100,000 by County, 2015</h3>

<!-- <p>hc_Aslt_def_map_300 <a href="https://fiddle.jshell.net/esheridan/zpqgqrwv/">https://fiddle.jshell.net/esheridan/zpqgqrwv/</a></p> -->

<render-map mapFile="map3data.js" optionsFile="map3options.js" :segment="segment"></render-map>


<p><strong>*Calhoun and Pope did not report</strong></p>
<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h4 id="five-illinois-counties-with-highest-aggravated-assault-rates-2015">Five Illinois Counties with Highest Aggravated Assault Rates, 2015</h4>

<table id="hc_Aslt_def_table_200">

<thead><tr><th>                       County</th><th>Population</th><th>Rate Per 100,000</th></tr></thead>
<tfoot><tr><td><b>Illinois<b></b></b></td><td><b>12,859,995<b></b></b></td><td><b>224.60<b></b></b></td></tr></tfoot>
<tbody>
 <tr><td>Alexander</td><td>         7,492</td><td>1,348.10</td></tr>
 <tr><td>Winnebago</td><td>            288,542 </td><td>661.95</td></tr>
 <tr><td>Washington</td><td>      14,337</td><td>551.02</td></tr>
 <tr><td>Sangamon</td><td>         198,997 </td><td>535.18</td></tr>
 <tr><td>Vermilion</td><td>            79,728 </td><td>529.30</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h4 id="aggravated-assault-rates-for-the-five-largest-illinois-counties-by-population-2015">Aggravated Assault Rates for the Five Largest Illinois Counties by Population, 2015</h4>

<table id="hc_Aslt_def_table_300">

<thead><tr><th>County</th><th>Population</th><th>Rate Per 100,000</th></tr></thead>
<tfoot><tr><td><b>Illinois<b></b></b></td><td><b>12,859,995<b></b></b></td><td><b>224.60<b></b></b></td></tr></tfoot>
<tbody>
 <tr><td>Cook</td><td>      5,246,456 </td><td>288.37</td></tr>
 <tr><td>DuPage</td><td>         932,708 </td><td>48.03</td></tr>
 <tr><td>Lake</td><td>         705,186 </td><td>84.80</td></tr>
 <tr><td>Will</td><td>         685,419 </td><td>91.19</td></tr>
 <tr><td>Kane</td><td>         527,306 </td><td>121.75</td></tr>
 </tbody></table>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h2 id="prevalence-by-municipality">Prevalence by Municipality</h2>

<p>The population size of cities and towns will affect the calculated rate of occurrence. For example, in Cook County, Chicago did not rank first in rate of reported assaults even though more assaults occurred there than in any other city. Ranking higher in rate were Deerfield (within Cook County), McCook, Riverside, Rosemont, and Harvey.</p>



<h4 id="municipalities-with-the-highest-aggravated-assault-rates-in-cook-county-2015">Municipalities with the Highest Aggravated Assault Rates in Cook County, 2015</h4>

<table id="hc_Aslt_def_table_400">
<thead><tr><th>Rank</th><th>City</th><th>Population</th><th>Number of Agg Aslts</th><th>Agg Aslt Rate Per 100,000</th></tr></thead><tfoot>
 <tr><td>&nbsp;</td><td><b>Cook County<b></b></b></td><td><b>5,246,456<b></b></b></td><td><b>15,129<b></b></b></td><td><b>288.37<b></b></b></td></tr></tfoot>
<tbody>
 <tr><td>1</td><td>Deerfield (within Cook County)</td><td>                                            176 </td><td>                             3</td><td>1,704.55</td></tr>
 <tr><td>2</td><td>McCook</td><td>                                              232 </td><td>                               2 </td><td>862.07</td></tr>
 <tr><td>3</td><td>Riverside</td><td>                                            8,882 </td><td>                               57 </td><td>641.75</td></tr>
 <tr><td>4</td><td>Rosemont</td><td>                                      4,231 </td><td>                           27 </td><td>638.15</td></tr>
 <tr><td>5</td><td>Harvey</td><td>                                            25,361 </td><td>                               122 </td><td>481.05</td></tr>
 <tr><td>6</td><td>Chicago</td><td>                                            2,728,695 </td><td>                               13,104 </td><td>480.23</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

<p>The graph and table below show the cities in Illinois whose average three-year (2013-2015) aggravated assault rate was significantly greater than the entire state of Illinois’ average three-year aggravated assault rate.</p>



<h3 id="cities-in-illinois-with-highest-aggravated-assault-rates-per-100000-2015">Cities in Illinois with Highest Aggravated Assault Rates per 100,000, 2015</h3>

<!-- <p>hc_Aslt_def_map_400 <a href="https://fiddle.jshell.net/esheridan/7s827qw0/">https://fiddle.jshell.net/esheridan/7s827qw0/</a></p> -->
<render-map mapFile="map4data.js" optionsFile="map4options.js" :segment="segment"></render-map>

<p><em>“MCA” = multiple county agency</em> <br>
<em>“SD” = standard deviation</em> <br>
<em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>


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
          $('#hc_Aslt_def_table_050').DataTable(utils.dtConfig);
          $('#hc_Aslt_def_table_100').DataTable(utils.dtConfig);
          $('#hc_Aslt_def_table_200').DataTable(utils.dtConfig);
          $('#hc_Aslt_def_table_300').DataTable(utils.dtConfig);
          $('#hc_Aslt_def_table_400').DataTable(utils.dtConfig);
          $('#hc_Aslt_def_table_500').DataTable(utils.dtConfig);


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
            segment: 'assault'

        }
    }
}
</script>
<style scoped>


</style>
