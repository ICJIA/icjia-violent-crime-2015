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
    
    // require map data
            function getRequireFile (file) {
                return require ('../maps/' + file)
            }
            let map = '';
            let mapOptions = '';
            let error = false;
            let errorMessage = '';

            try {
                map = getRequireFile('map.js')
                mapOptions = getRequireFile('mapOptions.js')
                error = false;
            }
            catch (e) {
                error = true
                errorMessage = e;
            }
    
    
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
        
        if (!error) {
            this.mapOptions = mapOptions["mapOptions"]
            this.renderId = 'hc' + utils.guid();
        }
        

        },
        mounted: function() {

           
           if (!error) {
                // context switches for document.ready
                let vm = this
                console.log(vm)
                // let mapOptions = this.mapOptions
                // let renderId = this.renderId
                vm.mapOptions.series[0].mapData = map["map"]
                $(document).ready(function() {
                    try {
                        Highcharts.mapChart(vm.renderId, vm.mapOptions)
                        
                    }
                    catch (e) {
                        error = true
                        console.log('Error: ', e)
                        // Hacky. No way to get error message passed to Vue here.
                        $('.error-message').html(e)
                        vm.errorMessage = 'test'
                    }
                });
           } else {
               this.errorMessage = '<b>' + errorMessage + "</b>"
           }

        },

        

        methods: {
            displayError (e) {
                console.log(e)
            }
        },
        watch : {},
        data() {
            return {
                test: '',
                errorMessage: null,
                renderId: null
                
            }
        }
    }

</script>

<style>
.error-message {color: red; padding-top: 0px; padding-bottom: 0px; font-size: 20px; text-transform: uppercase;}
</style>