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
              <h1 id="rates" class="upper page-head">Rates</h1>
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
            <div class="col-lg-12">
              <!-- Main content here -->

              <h3 id="robbery-rates-per-100000-in-americas-10-largest-cities-january-to-june-2016">Robbery Rates per 100,000 in America’s 10 Largest Cities, January to June 2016</h3>

<!-- <p>hc_Robb_def_map_100 <a href="https://fiddle.jshell.net/esheridan/nou6ys2n/">https://fiddle.jshell.net/esheridan/nou6ys2n/</a></p> -->

<render-map mapFile="map1data.js" optionsFile="map1options.js" :segment="segment"></render-map>


<table id="hc_Robb_def_table_100">
<thead><tr><th>Rank</th><th>City</th><th>Rate</th></tr></thead><tbody>
 <tr><td>1</td><td>Houston</td><td>207.38</td></tr>
 <tr><td>2</td><td>Chicago</td><td>190.26</td></tr>
 <tr><td>3</td><td>Philadelphia</td><td>184.76</td></tr>
 <tr><td>4</td><td>Dallas</td><td>165.37</td></tr>
 <tr><td>5</td><td>Los Angeles</td><td>125.63</td></tr>
 <tr><td>6</td><td>Phoenix</td><td>92.77</td></tr>
 <tr><td>7</td><td>New York</td><td>85.81</td></tr>
 <tr><td>8</td><td>San Antonio</td><td>71.50</td></tr>
 <tr><td>9</td><td>San Jose</td><td>56.77</td></tr>
 <tr><td>10</td><td>San Diego</td><td>51.83</td></tr>
</tbody></table>

<p><em>Sources: Major Cities Chiefs Association Violent Crime-Survey; Houston Police Department Data; U.S. Census Bureau population estimates, 2015</em></p>



<h3 id="robbery-rates-per-100000-by-state-2015">Robbery Rates per 100,000 by State, 2015</h3>

<!-- <p>hc_Robb_def_map_200 <a href="https://fiddle.jshell.net/esheridan/2gxLvLxs/">https://fiddle.jshell.net/esheridan/2gxLvLxs/</a></p> -->

<render-map mapFile="map2data.js" optionsFile="map2options.js" :segment="segment"></render-map>



<p><em>Sources ICJIA Analysis of 2015 FBI Uniform Crime Report Data</em></p>

<p>Illinois ranked 11th across the country in 2015, with a robbery rate of 115.9 per 100,000 population.</p>



<h2 id="prevalence-by-county">Prevalence by County</h2>

<p>In 2015, 14,706 robberies were reported by law enforcement agencies to the I-UCR program. Of Illinois’ 102 counties, 62 reported at least one robbery, while 38 reported zero robberies. Calhoun and Pope counties did not report their crime statistics to the I-UCR program.</p>

<p>Without calculating the robbery rates per county, the raw numbers of occurrences provides only partial information. The chart below depicts the number of robberies and rate of robberies from the same counties to illustrate this difference (the counties with the highest five numbers and highest five rates were chosen; Cook, Peoria, Sangamon, Vermilion, and Winnebago were in the top five for both numbers and rates). As can be seen, the number of robbery occurrences in Cook County is much greater than in any other county. However, when population size is taken into account, the considerably fewer robberies in Winnebago County produce a very similar rate to Cook County. The numbers of robberies in Peoria and St. Clair are almost identical, although the smaller population size of Peoria County produces a higher robbery rate.</p>



<h3 id="number-and-rate-of-robberies-per-100000-2015">Number and Rate of Robberies per 100,000, 2015</h3>

<!-- <p>hc_Robb_def_chart_150 <a href="http://jsfiddle.net/esheridan/pL9x2719/">http://jsfiddle.net/esheridan/pL9x2719/</a></p> -->

<render-chart
       chart="hc_Robb_def_chart_150"
      >
   </render-chart>


<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h3 id="robbery-rates-per-100000-by-county-2015">Robbery Rates per 100,000 by County, 2015</h3>

<!-- <p>hc_Robb_def_map_300 <a href="https://fiddle.jshell.net/esheridan/0z7p1bpa/">https://fiddle.jshell.net/esheridan/0z7p1bpa/</a></p> -->
<render-map mapFile="map3data.js" optionsFile="map3options.js" :segment="segment"></render-map>

<p><strong>*Calhoun and Pope did not report</strong></p>
<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h4 id="five-illinois-counties-with-highest-robbery-rates-2015">Five Illinois Counties with Highest Robbery Rates, 2015</h4>

<table id="hc_Robb_def_table_200">

<thead><tr><th>                       County</th><th>Population</th><th>Rate Per 100,000</th></tr></thead>
<tfoot><tr><td><b>Illinois<b></b></b></td><td><b>12,859,995<b></b></b></td><td><b>115.90<b></b></b></td></tr>
</tfoot><tbody>
 <tr><td>Cook</td><td>         5,246,456 </td><td>213.80</td></tr>
 <tr><td>Winnebago</td><td>            288,542 </td><td>195.12</td></tr>
 <tr><td>Peoria</td><td>      187,319 </td><td>177.77</td></tr>
 <tr><td>Sangamon</td><td>         198,997 </td><td>138.70</td></tr>
 <tr><td>Vermilion</td><td>            79,728 </td><td>120.41</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h4 id="robbery-rates-of-the-five-largest-illinois-counties-by-population-2015">Robbery Rates of the Five Largest Illinois Counties by Population, 2015</h4>

<table id="hc_Robb_def_table_300">

<thead><tr><th>County</th><th>Population</th><th>Rate Per 100,000</th></tr></thead>
<tfoot><tr><td><b>Illinois<b></b></b></td><td><b>12,859,995<b></b></b></td><td><b>115.90<b></b></b></td></tr></tfoot>
<tbody>
 <tr><td>Cook</td><td>      5,246,456 </td><td>213.80</td></tr>
 <tr><td>DuPage</td><td>         932,708 </td><td>23.80</td></tr>
 <tr><td>Lake</td><td>         705,186 </td><td>38.15</td></tr>
 <tr><td>Will</td><td>         685,419 </td><td>33.26</td></tr>
 <tr><td>Kane</td><td>         527,306 </td><td>42.67</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of 2015 Illinois State Police Uniform Crime Report Data</em></p>



<h2 id="prevalence-by-municipality">Prevalence by Municipality</h2>

<p>Robberies tend to be concentrated in urban centers within a county. The population size of cities and towns will affect the calculated rate of occurrence. For example, in Cook County, Chicago did not rank first in robbery rates, even though more robberies occurred there than in any other town. The two municipalities in Cook County with higher robbery rates than Chicago in 2015 were Deerfield (within Cook County) and Harvey.</p>



<h3 id="municipalities-with-the-highest-robbery-rates-in-cook-county-2015">
  Municipalities with the Highest Robbery Rates in Cook County, 2015</h3>

<table id="hc_Robb_def_table_400">
<thead><tr><th>Rank</th><th>City</th><th>Population</th><th>Number of Robberies</th><th>Robbery Rate Per 100,000</th></tr></thead>
<tfoot><tr><td>&nbsp;</td><td><b>Cook County<b></b></b></td><td><b>5,246,456<b></b></b></td><td><b>11,217<b></b></b></td><td><b>213.80<b></b></b></td></tr></tfoot>
<tbody>
 <tr><td>1</td><td>Deerfield (within Cook County)</td><td>                                            176 </td><td>                             2</td><td>1,136.36</td></tr>
 <tr><td>2</td><td>Harvey</td><td>                                              25,361 </td><td>                               149 </td><td>587.52</td></tr>
 <tr><td>3</td><td>Chicago</td><td>                                            2,728,695 </td><td>                               9,649 </td><td>353.61</td></tr>
 <tr><td>4</td><td>Maywood</td><td>                                      24,141 </td><td>                           85 </td><td>352.10</td></tr>
 <tr><td>5</td><td>Chicago Heights</td><td>                                            30,461 </td><td>                               105 </td><td>344.70</td></tr>
</tbody></table>

<p><em>Source: ICJIA Analysis of Illinois State Police Uniform Crime Report Data</em></p>

<p>The graph and table below show the cities in Illinois whose average three-year (2013, 2014, and 2015) robbery rates were significantly greater than the state’s average. </p>



<h3 id="cities-in-illinois-with-highest-robbery-rates-per-100000-2015">Cities in Illinois with Highest Robbery Rates per 100,000, 2015</h3>

<!-- <p>hc_Robb_def_map_400 <a href="https://fiddle.jshell.net/esheridan/qf3488ou/">https://fiddle.jshell.net/esheridan/qf3488ou/</a></p> -->

<render-map mapFile="map4data.js" optionsFile="map4options.js" :segment="segment"></render-map>

<table id="hc_Robb_def_table_500" style="">

<thead><tr><th>City</th><th>County</th><th>Average Robberies 2013-2015</th><th>Average Population 2013-2015</th><th>Robbery 2013-2015 Per 100,000</th><th>SDs from the Mean</th></tr></thead><tbody>
 <tr><td>Sauget</td><td>St. Clair</td><td>1.7</td><td>153.7</td><td>1083.7</td><td>12.6</td></tr>
 <tr><td>Harvey</td><td>Cook</td><td>209.3</td><td>25382.0</td><td>824.6</td><td>9.5</td></tr>
 <tr><td>East St. Louis</td><td>St. Clair</td><td>193.7</td><td>26585.0</td><td>728.4</td><td>8.4</td></tr>
 <tr><td>Washington Park</td><td>St. Clair</td><td>24.0</td><td>4048.0</td><td>592.1</td><td>6.7</td></tr>
 <tr><td>Deerfield (MCA)</td><td>Cook</td><td>1.0</td><td>174.7</td><td>571.5</td><td>6.5</td></tr>
 <tr><td>Riverdale</td><td>Cook</td><td>75.3</td><td>13626.7</td><td>552.7</td><td>6.2</td></tr>
 <tr><td>Chicago Heights</td><td>Cook</td><td>118.7</td><td>30447.0</td><td>389.8</td><td>4.3</td></tr>
 <tr><td>Calumet City</td><td>Cook</td><td>143.7</td><td>37270.7</td><td>385.4</td><td>4.2</td></tr>
 <tr><td>Chicago</td><td>Cook</td><td>10425.0</td><td>2724456.7</td><td>382.7</td><td>4.2</td></tr>
 <tr><td>Maywood</td><td>Cook</td><td>85.7</td><td>24166.3</td><td>354.5</td><td>3.9</td></tr>
 <tr><td>Rockford</td><td>Winnebago</td><td>436.7</td><td>149322.3</td><td>292.6</td><td>3.1</td></tr>
 <tr><td>Hazel Crest</td><td>Cook</td><td>39.0</td><td>14210.3</td><td>274.4</td><td>2.9</td></tr>
 <tr><td>Kankakee</td><td>Kankakee</td><td>74.0</td><td>27002.3</td><td>274.0</td><td>2.9</td></tr>
 <tr><td>Danville</td><td>Vermilion</td><td>81.7</td><td>32330.7</td><td>252.7</td><td>2.7</td></tr>
 <tr><td>Peoria</td><td>Peoria</td><td>271.7</td><td>116314.0</td><td>233.7</td><td>2.4</td></tr>
 <tr><td>Springfield</td><td>Sangamon</td><td>267.3</td><td>117120.0</td><td>228.2</td><td>2.4</td></tr>
 <tr><td>Steger (MCA)</td><td>Will</td><td>12.0</td><td>5441.0</td><td>220.4</td><td>2.3</td></tr>
 <tr><td>Phoenix</td><td>Cook</td><td>4.3</td><td>1974.7</td><td>219.5</td><td>2.3</td></tr>
 <tr><td>Broadview</td><td>Cook</td><td>15.7</td><td>7972.0</td><td>196.5</td><td>2.0</td></tr>
 <tr><td>Mt Vernon</td><td>Jefferson</td><td>29.7</td><td>15196.3</td><td>195.3</td><td>2.0</td></tr>
 <tr><td>Murphysboro</td><td>Jackson</td><td>15.0</td><td>7816.3</td><td>191.8</td><td>1.9</td></tr>
 <tr><td>Lansing</td><td>Cook</td><td>54.0</td><td>28540.7</td><td>189.2</td><td>1.9</td></tr>
 <tr><td>Waukegan</td><td>Lake</td><td>161.0</td><td>88788.3</td><td>181.3</td><td>1.8</td></tr>
 <tr><td>Orland Park (MCA)</td><td>Will</td><td>0.3</td><td>186.0</td><td>177.3</td><td>1.7</td></tr>
 <tr><td>South Holland</td><td>Cook</td><td>38.7</td><td>22182.7</td><td>174.3</td><td>1.7</td></tr>
 <tr><td>Carbondale</td><td>Jackson</td><td>45.7</td><td>26293.0</td><td>173.6</td><td>1.7</td></tr>
 <tr><td>Bellwood</td><td>Cook</td><td>33.0</td><td>19168.7</td><td>172.2</td><td>1.7</td></tr>
 <tr><td>Sauk Village (MCA)</td><td>Cook</td><td>18.0</td><td>10562.0</td><td>170.4</td><td>1.7</td></tr>
 <tr><td>Matteson</td><td>Cook</td><td>32.7</td><td>19186.7</td><td>170.3</td><td>1.7</td></tr>
 <tr><td>Richton Park</td><td>Cook</td><td>23.3</td><td>13778.3</td><td>169.3</td><td>1.7</td></tr>
 <tr><td>Park Forest (MCA)</td><td>Cook</td><td>31.7</td><td>18771.7</td><td>168.7</td><td>1.6</td></tr>
 <tr><td>Cairo</td><td>Alexander</td><td>4.3</td><td>2569.0</td><td>168.3</td><td>1.6</td></tr>
 <tr><td>Cicero</td><td>Cook</td><td>130.7</td><td>84242.0</td><td>155.1</td><td>1.5</td></tr>
 <tr><td>Champaign</td><td>Champaign</td><td>130.3</td><td>84107.7</td><td>154.9</td><td>1.5</td></tr>
 <tr><td>South Chicago Heights</td><td>Cook</td><td>6.3</td><td>4161.7</td><td>152.2</td><td>1.4</td></tr>
 <tr><td>Cherry Valley (MCA)</td><td>Winnebago</td><td>4.0</td><td>2770.3</td><td>144.6</td><td>1.4</td></tr>
 <tr><td>Zion</td><td>Lake</td><td>34.7</td><td>24297.7</td><td>142.7</td><td>1.3</td></tr>
 <tr><td>Urbana</td><td>Champaign</td><td>59.7</td><td>41857.3</td><td>142.6</td><td>1.3</td></tr>
 <tr><td>Forest Park</td><td>Cook</td><td>19.7</td><td>14219.3</td><td>138.3</td><td>1.3</td></tr>
 <tr><td>Glenwood</td><td>Cook</td><td>12.3</td><td>9057.3</td><td>136.1</td><td>1.3</td></tr>
 <tr><td>Country Club Hills</td><td>Cook</td><td>22.7</td><td>16955.7</td><td>133.7</td><td>1.2</td></tr>
 <tr><td>Decatur</td><td>Macon</td><td>99.0</td><td>74354.0</td><td>133.3</td><td>1.2</td></tr>
 <tr><td>Summit</td><td>Cook</td><td>15.0</td><td>11562.3</td><td>129.7</td><td>1.2</td></tr>
 <tr><td>North Chicago</td><td>Lake</td><td>37.7</td><td>29378.7</td><td>129.0</td><td>1.2</td></tr>
 <tr><td>Homewood</td><td>Cook</td><td>25.0</td><td>19470.3</td><td>128.4</td><td>1.2</td></tr>
 <tr><td>Midlothian</td><td>Cook</td><td>18.7</td><td>14932.7</td><td>125.0</td><td>1.1</td></tr>
 <tr><td>Belleville</td><td>St. Clair</td><td>52.3</td><td>42760.7</td><td>122.2</td><td>1.1</td></tr>
 <tr><td>North Riverside</td><td>Cook</td><td>8.0</td><td>6704.3</td><td>119.3</td><td>1.1</td></tr>
 <tr><td>Hillside</td><td>Cook</td><td>9.7</td><td>8206.0</td><td>117.8</td><td>1.0</td></tr>
 <tr><td>Alton</td><td>Madison</td><td>31.7</td><td>27145.7</td><td>116.6</td><td>1.0</td></tr>
</tbody></table>

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
import SegmentHeader from 'components/SegmentHeader'


export default {
    name: 'Rape_Definitions',

    mounted () {
      $(document).ready(function() {


          // call Datatables to render
          $('#hc_Robb_def_table_100').DataTable(utils.dtConfig);
          $('#hc_Robb_def_table_200').DataTable(utils.dtConfig);
          $('#hc_Robb_def_table_300').DataTable(utils.dtConfig);
          $('#hc_Robb_def_table_400').DataTable(utils.dtConfig);
          $('#hc_Robb_def_table_500').DataTable(utils.dtConfig);


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
        MyFooter,
        SegmentHeader
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01',
            displayTable: true,
            segment: 'robbery'

        }
    }
}
</script>
<style scoped>


</style>
