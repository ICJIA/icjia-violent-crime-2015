<template>
<div>
    <div class="graphic-container z-depth-2">
        <div    v-html="errorMessage" 
                class="center align error-message" 
                style="">
        </div>
        <div    :id="renderId" 
                class="map-container" >
        </div>
</div>
</div>
</template>

<script>

    const utils = require('../utils')
    const Highcharts = require('highcharts');
    require('highcharts/modules/data')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    require('highcharts/modules/map')(Highcharts);
    
    export default {

        ///////////////////////////////////////////////////////////////////////////////
        //
        // The props below specify the *file modules* for the maps.
        // One file is for the mapdata, the other is for the options
        // Adding the '.js' extension is optional
        //
        // Ex: 
        // mapFile: 'hm001.js' (data for the map object)
        // optionsFile: 'hm001options.js' (data for the map's options')
        //
        // Tag example:
        // <render-map mapFile="hm001.js" optionsFile="hm001options.js"></render-map>
        //
        // the mapdata module should export a 'map' object
        // the options module must export a 'mapOptions' object
        // 
        ///////////////////////////////////////////////////////////////////////////////


        props: {
            mapFile: {
                type: String,
                required: true,
                default: ''
            },
            optionsFile: {
                type: String,
                required: true,
                default: ''
            }
           
        },



        created() {

       
        let map, mapOptions

        function getRequireFile (filename) {
                return require ('../maps/' + filename)
                // .js extension is implied
            }
        
        try {
            map = getRequireFile(this.mapFile)
            mapOptions = getRequireFile(this.optionsFile)
            this.error = false
        } 
        catch (e) {
            console.log(e)
            this.errorMessage = e
            this.error = true
        }
       
        
        if (!this.error) {
            this.mapOptions = mapOptions["mapOptions"]

            // create a unique ID for the map container
            this.renderId = 'hc' + utils.guid();

            // inject the map data into the map
            this.mapOptions.series[0].mapData = map["map"]
        }
        

        },
        mounted: function() {

           
           if (!this.error) {

                // context switch for document.ready
                let vm = this

                // document ready handler
                let mapRenderHandler = function() {
                    try {
                        Highcharts.mapChart(vm.renderId, vm.mapOptions)
                    }
                    catch (e) {
                        vm.error = true
                        vm.errorMessage = e
                        // Hacky, but works.
                        $('.error-message').html(e)
                        
                }}

                //jquery doc ready
                $(mapRenderHandler)
                
           } else {
               this.errorMessage = '<b>' + this.errorMessage + "</b>"
           }
          
        },

        

        methods: {
           
        },
        watch : {},
        data() {
            return {
                test: '',
                errorMessage: null,
                renderId: null,
                testOptions: '',
                testMap: '',
                options: '',
                map: '',
                error: false,
                mapOptions: ''
                
            }
        }
    }

</script>

<style>
.error-message {color: red; padding-top: 0px; padding-bottom: 0px; font-size: 20px; text-transform: uppercase;}
.map-container {padding-left: 20px; padding-right: 20px; padding-bottom: 30px; margin: 0 auto;}
</style>