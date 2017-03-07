const mapOptions = {

  // Prepare demo data


  // Initiate the chart


  title: {
    text: ''
  },
  subtitle: {
          text: ''},

      mapNavigation: {
          enabled: false,
          enableMouseWheelZoom: false,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },

      colorAxis: {
      min: 0,
      max: 16,
      minColor: '#F5F5F5',
      maxColor: '#000080',
      stops: [
        [0, '#F5F5F5'],
        [0.25, '#4169E1'],
        [0.75, '#000080'],
        [1, '#000080']
      ]
      },

      series : [{
          data : [
            {"name":"New Hampshire","value":1.1},
 {"name":"Hawaii","value":1.3},
 {"name":"Vermont","value":1.6},
 {"name":"Maine","value":1.7},
 {"name":"Utah","value":1.8},
 {"name":"Idaho","value":1.9},
 {"name":"Massachusetts","value":1.9},
 {"name":"Iowa","value":2.3},
 {"name":"Minnesota","value":2.4},
 {"name":"Oregon","value":2.5},
 {"name":"Rhode Island","value":2.7},
 {"name":"Wyoming","value":2.7},
 {"name":"North Dakota","value":2.8},
 {"name":"Washington","value":2.9},
 {"name":"New York","value":3.1},
 {"name":"Colorado","value":3.2},
 {"name":"Connecticut","value":3.3},
 {"name":"Nebraska","value":3.3},
 {"name":"Montana","value":3.5},
 {"name":"South Dakota","value":3.7},
 {"name":"West Virginia","value":3.8},
 {"name":"New Jersey","value":4.1},
 {"name":"Wisconsin","value":4.2},
 {"name":"Ohio","value":4.3},
 {"name":"Kansas","value":4.4},
 {"name":"Arizona","value":4.5},
 {"name":"Virginia","value":4.6},
 {"name":"Kentucky","value":4.7},
 {"name":"California","value":4.8},
 {"name":"Texas","value":4.8},
 {"name":"Florida","value":5.1},
 {"name":"North Carolina","value":5.1},
 {"name":"Pennsylvania","value":5.1},
 {"name":"Indiana","value":5.6},
 {"name":"New Mexico","value":5.6},
 {"name":"Illinois","value":5.8},
 {"name":"Michigan","value":5.8},
 {"name":"Georgia","value":6.0},
 {"name":"Oklahoma","value":6.0},
 {"name":"Arkansas","value":6.1},
 {"name":"Nevada","value":6.2},
 {"name":"Tennessee","value":6.2},
 {"name":"Delaware","value":6.7},
 {"name":"Alabama","value":7.2},
 {"name":"Alaska","value":8.0},
 {"name":"South Carolina","value":8.1},
 {"name":"Missouri","value":8.3},
 {"name":"Maryland","value":8.6},
 {"name":"Mississippi","value":8.7},
 {"name":"Louisiana","value":10.3},
 {"name":"District of Columbia","value":24.1}
          ],
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
