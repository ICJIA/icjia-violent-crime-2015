const mapOptions = {
    chart: {
      renderTo: 'container'
    },

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
data: [{"City":"Harvey ","lat":41.607583,"lon":-87.65199,"County":"Cook","Region":"Northern","value":824.58},
{"City":"Deerfield  (MCA)","lat":42.166069,"lon":-87.852467,"County":"Cook","Region":"Northern","value":571.47},
{"City":"Riverdale ","lat":41.642695,"lon":-87.63564,"County":"Cook","Region":"Northern","value":552.68},
{"City":"Chicago Heights ","lat":41.510685,"lon":-87.634672,"County":"Cook","Region":"Northern","value":389.77},
{"City":"Calumet City ","lat":41.596493,"lon":-87.538572,"County":"Cook","Region":"Northern","value":385.44},
{"City":"Chicago ","lat":41.837551,"lon":-87.681844,"County":"Cook","Region":"Northern","value":382.68},
{"City":"Maywood ","lat":41.879781,"lon":-87.844181,"County":"Cook","Region":"Northern","value":354.48},
{"City":"Rockford ","lat":42.258836,"lon":-89.064553,"County":"Winnebago","Region":"Northern","value":292.62},
{"City":"Hazel Crest ","lat":41.574164,"lon":-87.689295,"County":"Cook","Region":"Northern","value":274.40},
{"City":"Steger  (MCA)","lat":41.472248,"lon":-87.617706,"County":"Will","Region":"Northern","value":220.44},
{"City":"Phoenix ","lat":41.611781,"lon":-87.630852,"County":"Cook","Region":"Northern","value":219.47},
{"City":"Broadview ","lat":41.85837,"lon":-87.856191,"County":"Cook","Region":"Northern","value":196.52},
{"City":"Lansing ","lat":41.565004,"lon":-87.546004,"County":"Cook","Region":"Northern","value":189.21},
{"City":"Waukegan ","lat":42.369447,"lon":-87.870898,"County":"Lake","Region":"Northern","value":181.33},
{"City":"Orland Park  (MCA)","lat":41.608145,"lon":-87.85929,"County":"Will","Region":"Northern","value":177.30},
{"City":"Southern Holland ","lat":41.598163,"lon":-87.602659,"County":"Cook","Region":"Northern","value":174.32},
{"City":"Bellwood ","lat":41.882901,"lon":-87.876172,"County":"Cook","Region":"Northern","value":172.18},
{"City":"Sauk Village  (MCA)","lat":41.490094,"lon":-87.570624,"County":"Cook","Region":"Northern","value":170.40},
{"City":"Matteson ","lat":41.508871,"lon":-87.746044,"County":"Cook","Region":"Northern","value":170.25},
{"City":"Richton Park ","lat":41.480679,"lon":-87.735603,"County":"Cook","Region":"Northern","value":169.33},
{"City":"Park Forest  (MCA)","lat":41.481748,"lon":-87.686797,"County":"Cook","Region":"Northern","value":168.72},
{"City":"Cicero ","lat":41.844537,"lon":-87.759289,"County":"Cook","Region":"Northern","value":155.15},
{"City":"Southern Chicago Heights ","lat":41.483406,"lon":-87.637201,"County":"Cook","Region":"Northern","value":152.18},
{"City":"Cherry Valley  (MCA)","lat":42.235178,"lon":-88.975113,"County":"Winnebago","Region":"Northern","value":144.64},
{"City":"Zion ","lat":42.459909,"lon":-87.851121,"County":"Lake","Region":"Northern","value":142.66},
{"City":"Forest Park ","lat":41.868369,"lon":-87.815663,"County":"Cook","Region":"Northern","value":138.32},
{"City":"Glenwood ","lat":41.540499,"lon":-87.610973,"County":"Cook","Region":"Northern","value":136.14},
{"City":"Country Club Hills ","lat":41.563453,"lon":-87.725409,"County":"Cook","Region":"Northern","value":133.67},
{"City":"Summit ","lat":41.788452,"lon":-87.813921,"County":"Cook","Region":"Northern","value":129.70},
{"City":"North Chicago ","lat":42.316696,"lon":-87.859201,"County":"Lake","Region":"Northern","value":129.00},
{"City":"Homewood ","lat":41.559422,"lon":-87.662025,"County":"Cook","Region":"Northern","value":128.44},
{"City":"Midlothian ","lat":41.625428,"lon":-87.724233,"County":"Cook","Region":"Northern","value":125.00},
{"City":"North Riverside ","lat":41.846142,"lon":-87.826283,"County":"Cook","Region":"Northern","value":119.32},
{"City":"Hillside ","lat":41.867484,"lon":-87.901902,"County":"Cook","Region":"Northern","value":117.79}]},
//CENTRAL
{
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Central',

data: [{"City":"Kankakee ","lat":41.101654,"lon":-87.86369,"County":"Kankakee","Region":"Central","value":274.00},
{"City":"Danville ","lat":40.142628,"lon":-87.610707,"County":"Vermilion","Region":"Central","value":252.67},
{"City":"Peoria ","lat":40.751516,"lon":-89.61736,"County":"Peoria","Region":"Central","value":233.66},
{"City":"Springfield ","lat":39.791063,"lon":-89.644572,"County":"Sangamon","Region":"Central","value":228.24},
{"City":"Champaign ","lat":40.115057,"lon":-88.273652,"County":"Champaign","Region":"Central","value":154.87},
{"City":"Urbana ","lat":40.110126,"lon":-88.197323,"County":"Champaign","Region":"Central","value":142.64},
{"City":"Decatur ","lat":39.855983,"lon":-88.933746,"County":"Macon","Region":"Central","value":133.34}]
        },
//SOUTHERN
{
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Southern',

data: [{"City":"Sauget ","lat":38.591998,"lon":-90.163094,"County":"St. Clair","Region":"Southern","value":1083.70},
{"City":"East St. Louis ","lat":38.616361,"lon":-90.130528,"County":"St. Clair","Region":"Southern","value":728.45},
{"City":"Washington Park ","lat":38.628433,"lon":-90.092751,"County":"St. Clair","Region":"Southern","value":592.10},
{"City":"Mt Vernon ","lat":38.314202,"lon":-88.917529,"County":"Jefferson","Region":"Southern","value":195.27},
{"City":"Murphysboro ","lat":37.768386,"lon":-89.332407,"County":"Jackson","Region":"Southern","value":191.75},
{"City":"Carbondale ","lat":37.722062,"lon":-89.223664,"County":"Jackson","Region":"Southern","value":173.62},
{"City":"Cairo ","lat":37.006288,"lon":-89.18288,"County":"Alexander","Region":"Southern","value":168.34},
{"City":"Belleville ","lat":38.515973,"lon":-89.989779,"County":"St. Clair","Region":"Southern","value":122.24},
{"City":"Alton ","lat":38.902125,"lon":-90.154083,"County":"Madison","Region":"Southern","value":116.64}]},

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
