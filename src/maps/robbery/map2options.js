const mapOptions = {

    title: {
      text: ''
    },
    subtitle: {
            text: ''},

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

      colorAxis: {
        minColor: '#edf8fb',
        maxColor: '#005824',
        //Max set to two standard deviations above mean
        max: 246.7055631

      },

        series : [{
            data : [{"name":"Wyoming","value":10.1},
{"name":"Idaho","value":11.6},
{"name":"Vermont","value":16.1},
{"name":"North Dakota","value":19.6},
{"name":"Montana","value":20.3},
{"name":"Maine","value":23.4},
{"name":"South Dakota","value":25.2},
{"name":"Iowa","value":33.5},
{"name":"New Hampshire","value":35.2},
{"name":"West Virginia","value":41.2},
{"name":"Utah","value":44.3},
{"name":"Nebraska","value":52.4},
{"name":"Rhode Island","value":52.6},
{"name":"Virginia","value":53.0},
{"name":"Oregon","value":53.3},
{"name":"Colorado","value":60.9},
{"name":"Kansas","value":62.4},
{"name":"Minnesota","value":68.7},
{"name":"Arkansas","value":70.4},
{"name":"Kentucky","value":74.7},
{"name":"Washington","value":76.0},
{"name":"Mississippi","value":76.7},
{"name":"Oklahoma","value":76.8},
{"name":"Massachusetts","value":77.8},
{"name":"Michigan","value":78.6},
{"name":"South Carolina","value":80.3},
{"name":"Connecticut","value":80.5},
{"name":"Hawaii","value":84.0},
{"name":"North Carolina","value":87.9},
{"name":"Wisconsin","value":90.7},
{"name":"Arizona","value":93.1},
{"name":"Alabama","value":94.9},
{"name":"Pennsylvania","value":101.6},
{"name":"Alaska","value":103.1},
{"name":"Florida","value":104.3},
{"name":"Missouri","value":104.8},
{"name":"Indiana","value":107.4},
{"name":"Ohio","value":108.1},
{"name":"New Jersey","value":108.6},
{"name":"Tennessee","value":113.2},
{"name":"Illinois","value":115.9},
{"name":"Texas","value":116.3},
{"name":"Louisiana","value":118.8},
{"name":"New Mexico","value":119.2},
{"name":"Georgia","value":119.9},
{"name":"New York","value":120.9},
{"name":"Delaware","value":130.6},
{"name":"California","value":135.0},
{"name":"Maryland","value":164.2},
{"name":"Nevada","value":217.5},
{"name":"District of Columbia","value":556.7}],
            joinBy: 'name',
            name: 'Criminal Homicide Rate',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    }

export { mapOptions }
