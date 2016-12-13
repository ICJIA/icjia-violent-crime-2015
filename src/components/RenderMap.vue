<template>
<div>
<div class="graphic-container z-depth-2">
<div id="renderId12" style="padding-left: 20px; padding-right: 20px; padding-bottom: 30px; margin: 0 auto;" ></div>
<div v-html="error" style="margin-top: 30px;"></div>
</div>
</div>
</template>

<script>
    const utils = require('../utils')
    
    const Highcharts = require('highcharts');
    require('highcharts/modules/data')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    require('highcharts/modules/map')(Highcharts);
    
    // require map data
    const map = require('../maps/map.js')
    const mapOptions = require('../maps/mapOptions.js')

    
    export default {
        props: {
            map: {
                type: String,
                required: true,
                default: ''
            },
            options: {
                type: String,
                required: false,
                default: ''
            }
           
        },
        created() {

           this.mapOptions = mapOptions["mapOptions"]

        },
        mounted: function() {
            
            let mapOptions = this.mapOptions
            $(document).ready(function() {
                mapOptions.series[0].mapData = map["map"]
                Highcharts.mapChart('renderId12', mapOptions)
            });

        },

        methods: {},
        watch : {},
        data() {
            return {
                test: {},
                
            }
        }
    }

</script>

<style>


</style>