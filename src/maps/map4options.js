const mapOptions = {

    title: {
      text: ''
    },
    subtitle: {
            text: ''},

    mapNavigation: {
      enabled: false
    },

    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.City}</b><br>Rate: {point.value}<br> Region: {point.Region}'
    },

    series: [{
        // Use the gb-all map with no data as a basemap

        name: 'Basemap',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
      },

      {
        name: 'Separators',
        type: 'mapline',
        data: [],
        color: '#707070',
        showInLegend: false,
        enableMouseTracking: false
      },
      //NORTHERN
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Northern',

        //events: {
        //    mouseOver: function () {
        //    $('.toggle1').toggleClass('highlight1');
        //  }
        //},
        data: [{
          "City": "Maywood",
          "lat": 41.879781,
          "lon": -87.844181,
          "County": "Cook",
          "Region": "Northern",
          "value": 37.25
        }, {
          "City": "Harvey",
          "lat": 41.607583,
          "lon": -87.65199,
          "County": "Cook",
          "Region": "Northern",
          "value": 28.89
        }, {
          "City": "Sauk Village (MCA)",
          "lat": 41.490094,
          "lon": -87.570624,
          "County": "Cook",
          "Region": "Northern",
          "value": 18.93
        }, {
          "City": "Oglesby",
          "lat": 41.295964,
          "lon": -89.069271,
          "County": "LaSalle",
          "Region": "Northern",
          "value": 18.06
        }, {
          "City": "Posen",
          "lat": 41.629067,
          "lon": -87.685843,
          "County": "Cook",
          "Region": "Northern",
          "value": 16.58
        }, {
          "City": "Chicago",
          "lat": 41.837551,
          "lon": -87.681844,
          "County": "Cook",
          "Region": "Northern",
          "value": 15.97
        }, {
          "City": "Riverdale",
          "lat": 41.642695,
          "lon": -87.63564,
          "County": "Cook",
          "Region": "Northern",
          "value": 14.67
        }, {
          "City": "Zion",
          "lat": 42.459909,
          "lon": -87.851121,
          "County": "Lake",
          "Region": "Northern",
          "value": 12.34
        }, {
          "City": "Rockford",
          "lat": 42.258836,
          "lon": -89.064553,
          "County": "Winnebago",
          "Region": "Northern",
          "value": 12.28
        }]
      },
      //CENTRAL
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Central',

        data: [{
          "City": "Warsaw",
          "lat": 40.351045,
          "lon": -91.428019,
          "County": "Hancock",
          "Region": "Central",
          "value": 21.51
        }, {
          "City": "Rochester",
          "lat": 39.754544,
          "lon": -89.532357,
          "County": "Sangamon",
          "Region": "Central",
          "value": 17.61
        }, {
          "City": "Kankakee",
          "lat": 41.101654,
          "lon": -87.86369,
          "County": "Kankakee",
          "Region": "Central",
          "value": 16.03
        }, {
          "City": "Henry",
          "lat": 41.117508,
          "lon": -89.354835,
          "County": "Marshall",
          "Region": "Central",
          "value": 14.01
        }, {
          "City": "Carrollton",
          "lat": 39.294493,
          "lon": -90.406894,
          "County": "Greene",
          "Region": "Central",
          "value": 13.84
        }]
      },
      //SOUTHERN
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Southern',

        data: [{"City":"Sauget PD","lat":38.591998,"lon":-90.163094,"County":"St. Clair","Region":"Southern","value":219.30},
{"City":"East St. Louis PD","lat":38.616361,"lon":-90.130528,"County":"St. Clair","Region":"Southern","value":89.04},
{"City":"Breese PD","lat":38.613802,"lon":-89.523713,"County":"Clinton","Region":"Southern","value":73.45},
{"City":"Cairo PD","lat":37.006288,"lon":-89.18288,"County":"Alexander","Region":"Southern","value":64.32},
{"City":"Washington Park PD","lat":38.628433,"lon":-90.092751,"County":"St. Clair","Region":"Southern","value":57.56},
{"City":"Caseyville PD","lat":38.630282,"lon":-90.034097,"County":"St. Clair","Region":"Southern","value":24.63}]
      },

      {
        type: "mappoint", //switch to mappoint
        lineWidth: 2,
        color: "#000000",
        showInLegend: false,
        marker: {
          radius: 0
        },
        data: [{
          lat: 41.294920381228366,
          lon: -87.53213980438565
        }, {
          lat: 41.297281579975085,
          lon: -88.00953362522027
        }, {
          lat: 41.211346653050605,
          lon: -88.00453422781008
        }, {
          lat: 41.20769447305218,
          lon: -88.24827643891444
        }, {
          lat: 41.10952190703776,
          lon: -88.24299353153047
        }, {
          lat: 41.108012636854106,
          lon: -88.9304624288108
        }, {
          lat: 40.927564877991955,
          lon: -88.9234384264007
        }, {
          lat: 40.930956142839186,
          lon: -89.04751988758007
        }, {
          lat: 41.107402741090915,
          lon: -89.03860584195715
        }, {
          lat: 41.10664939436167,
          lon: -89.15209546457763
        }, {
          lat: 41.58114980246358,
          lon: -89.16352080732256
        }, {
          lat: 41.58379683465002,
          lon: -90.20043813933113
        }, {
          lat: 41.59935260674253,
          lon: -90.17892318503341
        }, {
          lat: 41.64580751492487,
          lon: -90.17496691754836
        }, {
          lat: 41.67512505781475,
          lon: -90.24228151104485
        }, {
          lat: 41.700070031959434,
          lon: -90.25614966772784
        }, {
          lat: 41.73860934566035,
          lon: -90.244161052284
        }, {
          lat: 41.778328458931675,
          lon: -90.25336445385139
        }]
      }, {
        type: "mappoint",
        lineWidth: 2,
        color: "#000000",
        showInLegend: false,
        marker: {
          radius: 0
        },
        data: [{
          lat: 39.40175636563767,
          lon: -90.93199367782715
        }, {
          lat: 39.40155471823835,
          lon: -90.62551016977203
        }, {
          lat: 39.20332818566966,
          lon: -90.59013173776096
        }, {
          lat: 39.151149310905936,
          lon: -90.61736073765205
        }, {
          lat: 39.11912024130385,
          lon: -90.60779171685854
        }, {
          lat: 39.17750560122174,
          lon: -90.57682244105558
        }, {
          lat: 39.191582896974126,
          lon: -90.53587044028257
        }, {
          lat: 39.176076415734755,
          lon: -90.49005342747833
        }, {
          lat: 39.17607942350156,
          lon: -90.31726040515751
        }, {
          lat: 39.22427186452861,
          lon: -90.31006986056892
        }, {
          lat: 39.22917132868715,
          lon: -90.19908721337185
        }, {
          lat: 39.26131177877971,
          lon: -90.20388615980967
        }, {
          lat: 39.26523274367358,
          lon: -90.1500459941706
        }, {
          lat: 38.99904389722912,
          lon: -90.13928491393027
        }, {
          lat: 38.99881076368726,
          lon: -89.6988503210962
        }, {
          lat: 39.000103748719496,
          lon: -89.5835196890489
        }, {
          lat: 39.02577246130369,
          lon: -89.58000435819682
        }, {
          lat: 39.03187071438888,
          lon: -89.24637649031533
        }, {
          lat: 39.218016039975645,
          lon: -89.24878294169721
        }, {
          lat: 39.21832777977445,
          lon: -88.46470086258016
        }, {
          lat: 39.37905664675399,
          lon: -88.46932320776233
        }, {
          lat: 39.381766371496106,
          lon: -88.013946013709
        }, {
          lat: 39.478424500212405,
          lon: -88.01350442279876
        }, {
          lat: 39.49598500184919,
          lon: -87.686018121065
        }, {
          lat: 39.47348388050093,
          lon: -87.68622670204412
        }, {
          lat: 39.48221544495885,
          lon: -87.52841614880703
        }]
      }

    ]
  }


  export { mapOptions }
