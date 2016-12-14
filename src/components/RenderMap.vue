<template>
<div>
<div class="graphic-container z-depth-2">



    <div v-html="errorMessage" class="center align error-message" style=""></div>

<div :id="renderId" style="padding-left: 20px; padding-right: 20px; padding-bottom: 30px; margin: 0 auto;" ></div>

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

        ///////////////////////////////////////////////////////////////
        //
        // props specify the file modules for the maps.
        // One file is for the mapdata, the other is for the options
        //
        // the mapdata module should export a 'map' object
        // the options module must export a 'mapOptions' object
        // 
        ///////////////////////////////////////////////////////////////


        // props: {
        //     map: {
        //         type: String,
        //         required: true,
        //         default: 'map'
        //     },
        //     options: {
        //         type: String,
        //         required: false,
        //         default: 'mapOptions'
        //     }
           
        // },



        created() {

        // hard coded props for testing
        this.options = 'hm001options.js'
        this.map = 'hm001.js'

        
        let map, mapOptions

        function getRequireFile (filename) {
                return require ('../maps/' + filename)
            }
        
        try {
            map = getRequireFile(this.map)
            mapOptions = getRequireFile(this.options)
            this.error = false
        } 
        catch (e) {
            console.log(e)
            this.errorMessage = e
            this.error = true
        }
       
        
        if (!this.error) {
            this.mapOptions = mapOptions["mapOptions"]
            this.renderId = 'hc' + utils.guid();
            this.mapOptions.series[0].mapData = map["map"]
        }
        

        },
        mounted: function() {

           
           if (!this.error) {

                // context switch for document.ready
                let vm = this

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
                error: false
                
            }
        }
    }

</script>

<style>
.error-message {color: red; padding-top: 0px; padding-bottom: 0px; font-size: 20px; text-transform: uppercase;}
</style>