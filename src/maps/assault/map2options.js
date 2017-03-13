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
        minColor: '#ffffd4',
        maxColor: '#cc4c02',
        max: 470.619152
       //Max set to two standard deviations above mean
      },

        series : [{
            data : [{"name":"Maine","value":69.3},
{"name":"Vermont","value":78.6},
{"name":"Kentucky","value":105.5},
{"name":"Virginia","value":110.2},
{"name":"Connecticut","value":113.1},
{"name":"New Hampshire","value":116.0},
{"name":"New Jersey","value":127.4},
{"name":"Minnesota","value":129.2},
{"name":"Ohio","value":135.1},
{"name":"Utah","value":135.1},
{"name":"Rhode Island","value":143.7},
{"name":"Mississippi","value":150.3},
{"name":"Idaho","value":160.1},
{"name":"Oregon","value":164.6},
{"name":"Washington","value":167.8},
{"name":"Hawaii","value":168.9},
{"name":"North Dakota","value":171.5},
{"name":"Nebraska","value":173.1},
{"name":"Pennsylvania","value":174.8},
{"name":"Wyoming","value":179.8},
{"name":"Wisconsin","value":180.1},
{"name":"Colorado","value":197.2},
{"name":"Iowa","value":213.2},
{"name":"Georgia","value":220.8},
{"name":"Illinois","value":224.6},
{"name":"New York","value":225.0},
{"name":"North Carolina","value":227.3},
{"name":"Indiana","value":238.2},
{"name":"Texas","value":246.6},
{"name":"California","value":253.8},
{"name":"West Virginia","value":256.4},
{"name":"Maryland","value":256.7},
{"name":"Michigan","value":266.2},
{"name":"Arizona","value":267.1},
{"name":"Kansas","value":267.6},
{"name":"Montana","value":272.8},
{"name":"Massachusetts","value":280.7},
{"name":"Oklahoma","value":291.9},
{"name":"South Dakota","value":296.6},
{"name":"Florida","value":315.2},
{"name":"Delaware","value":325.7},
{"name":"Alabama","value":328.3},
{"name":"Missouri","value":342.4},
{"name":"South Carolina","value":369.1},
{"name":"Louisiana","value":373.7},
{"name":"Arkansas","value":380.0},
{"name":"Nevada","value":413.9},
{"name":"New Mexico","value":451.2},
{"name":"Tennessee","value":452.2},
{"name":"Alaska","value":497.1},
{"name":"District of Columbia","value":614.8}],
            mapData: [],
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
