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
data: [{"City":"Mccook","lat":41.798265,"lon":-87.841592,"County":"Cook","Region":"Northern","value":1006.99},
{"City":"Rockford","lat":42.258836,"lon":-89.064553,"County":"Winnebago","Region":"Northern","value":998.70},
{"City":"Deerfield (MCA)","lat":42.166069,"lon":-87.852467,"County":"Cook","Region":"Northern","value":951.34},
{"City":"Seneca (MCA)","lat":41.286602,"lon":-88.627812,"County":"Lasalle","Region":"Northern","value":751.33},
{"City":"Godley (MCA)","lat":41.241336,"lon":-88.240551,"County":"Grundy","Region":"Northern","value":584.80},
{"City":"East Dubuque","lat":42.488331,"lon":-90.624224,"County":"Jo Daviess","Region":"Northern","value":553.94},
{"City":"Chicago","lat":41.837551,"lon":-87.681844,"County":"Cook","Region":"Northern","value":461.75},
{"City":"Harvey","lat":41.607583,"lon":-87.65199,"County":"Cook","Region":"Northern","value":442.58},
{"City":"Riverside","lat":41.830956,"lon":-87.815854,"County":"Cook","Region":"Northern","value":442.36},
{"City":"Maywood","lat":41.879781,"lon":-87.844181,"County":"Cook","Region":"Northern","value":433.13},
{"City":"Cherry Valley (MCA)","lat":42.235178,"lon":-88.975113,"County":"Winnebago","Region":"Northern","value":396.86}]},
//CENTRAL
{
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Central',

data: [{"City":"London Mills (MCA)","lat":40.710609,"lon":-90.266118,"County":"Fulton","Region":"Central","value":2302.22},
{"City":"Danville","lat":40.142628,"lon":-87.610707,"County":"Vermilion","Region":"Central","value":833.59},
{"City":"Springfield","lat":39.791063,"lon":-89.644572,"County":"Sangamon","Region":"Central","value":740.30},
{"City":"Beardstown","lat":40.009905,"lon":-90.431595,"County":"Cass","Region":"Central","value":647.35},
{"City":"Southern View","lat":39.756022,"lon":-89.651114,"County":"Sangamon","Region":"Central","value":644.16},
{"City":"Tuscola","lat":39.798248,"lon":-88.275285,"County":"Douglas","Region":"Central","value":606.21},
{"City":"Thomasboro","lat":40.243791,"lon":-88.187629,"County":"Champaign","Region":"Central","value":558.63},
{"City":"Champaign","lat":40.115057,"lon":-88.273652,"County":"Champaign","Region":"Central","value":540.71},
{"City":"South Pekin","lat":40.495899,"lon":-89.652469,"County":"Tazewell","Region":"Central","value":494.38},
{"City":"Hoopeston","lat":40.460824,"lon":-87.663572,"County":"Vermilion","Region":"Central","value":457.39},
{"City":"Havana","lat":40.295109,"lon":-90.05781,"County":"Mason","Region":"Central","value":433.44},
{"City":"Riverton","lat":39.846145,"lon":-89.536364,"County":"Sangamon","Region":"Central","value":431.71},
{"City":"Jerome","lat":39.767773,"lon":-89.678403,"County":"Sangamon","Region":"Central","value":423.95},
{"City":"Hillsboro","lat":39.169587,"lon":-89.476486,"County":"Montgomery","Region":"Central","value":393.79}]
        },
//SOUTHERN
{
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Southern',

data: [{"City":"Cairo","lat":37.006288,"lon":-89.18288,"County":"Alexander","Region":"South","value":3643.11},
{"City":"East St. Louis","lat":38.616361,"lon":-90.130528,"County":"St. Clair","Region":"South","value":2931.10},
{"City":"Sauget","lat":38.591998,"lon":-90.163094,"County":"St. Clair","Region":"South","value":2161.76},
{"City":"Washington Park","lat":38.628433,"lon":-90.092751,"County":"St. Clair","Region":"South","value":1569.81},
{"City":"Mt Vernon","lat":38.314202,"lon":-88.917529,"County":"Jefferson","Region":"South","value":1013.40},
{"City":"Caseyville","lat":38.630282,"lon":-90.034097,"County":"St. Clair","Region":"South","value":863.18},
{"City":"Greenup","lat":39.247946,"lon":-88.160025,"County":"Cumberland","Region":"South","value":801.72},
{"City":"Dupo","lat":38.516124,"lon":-90.217599,"County":"St. Clair","Region":"South","value":669.01},
{"City":"West City","lat":37.996016,"lon":-88.948894,"County":"Franklin","Region":"South","value":662.53},
{"City":"Palestine","lat":39.001641,"lon":-87.612629,"County":"Crawford","Region":"South","value":652.63},
{"City":"Oblong","lat":39.002301,"lon":-87.910526,"County":"Crawford","Region":"South","value":652.45},
{"City":"Grayville (MCA)","lat":38.255135,"lon":-87.996927,"County":"White","Region":"South","value":616.55},
{"City":"Centralia (MCA)","lat":38.522073,"lon":-89.123541,"County":"Marion","Region":"South","value":601.00},
{"City":"Washington Co So","lat":38.3989,"lon":-89.3227,"County":"Washington","Region":"South","value":489.74},
{"City":"Cobden","lat":37.533392,"lon":-89.254353,"County":"Union","Region":"South","value":468.87},
{"City":"Nashville","lat":38.343478,"lon":-89.39088,"County":"Washington","Region":"South","value":467.72},
{"City":"Metropolis","lat":37.149574,"lon":-88.687277,"County":"Massac","Region":"South","value":462.44},
{"City":"Harrisburg","lat":37.737717,"lon":-88.545818,"County":"Saline","Region":"South","value":423.09},
{"City":"Grayville (MCA)","lat":38.255135,"lon":-87.996927,"County":"Edwards","Region":"South","value":413.24},
{"City":"Royalton","lat":37.877644,"lon":-89.113572,"County":"Franklin","Region":"South","value":408.95}]},

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
