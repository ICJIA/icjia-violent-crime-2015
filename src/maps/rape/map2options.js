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
        minColor: '#feebe2',
        maxColor: '#7a0177',
       //Max set to two standard deviations above mean
        max: 77.43912297
      },

        series : [{
            data : [{"name":"New Jersey","value":15.3},
{"name":"Connecticut","value":21.5},
{"name":"Vermont","value":21.7},
{"name":"North Carolina","value":26.7},
{"name":"Maryland","value":27.7},
{"name":"Virginia","value":27.9},
{"name":"Wyoming","value":29.5},
{"name":"Massachusetts","value":30.5},
{"name":"New York","value":30.7},
{"name":"Wisconsin","value":30.8},
{"name":"Georgia","value":31.6},
{"name":"California","value":32.7},
{"name":"Pennsylvania","value":33.6},
{"name":"Kentucky","value":33.7},
{"name":"Maine","value":35.7},
{"name":"Delaware","value":36.0},
{"name":"Indiana","value":36.3},
{"name":"West Virginia","value":36.4},
{"name":"Louisiana","value":36.9},
{"name":"Iowa","value":37.0},
{"name":"Florida","value":37.3},
{"name":"Illinois","value":37.5},
{"name":"Washington","value":37.7},
{"name":"Hawaii","value":39.2},
{"name":"Oregon","value":39.5},
{"name":"Mississippi","value":40.2},
{"name":"Tennessee","value":40.5},
{"name":"Idaho","value":41.9},
{"name":"Alabama","value":42.0},
{"name":"Missouri","value":42.0},
{"name":"Minnesota","value":42.3},
{"name":"Rhode Island","value":43.5},
{"name":"Ohio","value":44.3},
{"name":"Texas","value":44.6},
{"name":"Arizona","value":45.5},
{"name":"North Dakota","value":45.6},
{"name":"Nebraska","value":46.0},
{"name":"South Carolina","value":46.9},
{"name":"New Hampshire","value":47.1},
{"name":"Oklahoma","value":47.3},
{"name":"Montana","value":53.0},
{"name":"Utah","value":54.9},
{"name":"Kansas","value":55.5},
{"name":"South Dakota","value":57.7},
{"name":"Nevada","value":58.4},
{"name":"Colorado","value":59.7},
{"name":"Arkansas","value":64.8},
{"name":"Michigan","value":65.0},
{"name":"District of Columbia","value":73.5},
{"name":"New Mexico","value":80.2},
{"name":"Alaska","value":122.0}],
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
