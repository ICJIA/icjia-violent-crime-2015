const mapOptions = {


    title: {
      text: 'Rape 2013-2015'
    },
    subtitle: {
            text: 'Rate per 100,000'},

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
data: [{"City":"Godley (MCA)","lat":41.241336,"lon":-88.240551,"County":"Grundy","Region":"Northern","value":606.06},
{"City":"Mccook ","lat":41.798265,"lon":-87.841592,"County":"Cook","Region":"Northern","value":287.98},
{"City":"Streator (MCA)","lat":41.125178,"lon":-88.830745,"County":"Lasalle","Region":"Northern","value":113.98},
{"City":"Godley (MCA)","lat":41.241336,"lon":-88.240551,"County":"Grundy","Region":"Northern","value":606.06},
{"City":"Winthrop Harbor ","lat":42.480614,"lon":-87.829557,"County":"Lake","Region":"Northern","value":104.09},
{"City":"Dekalb ","lat":41.929793,"lon":-88.748525,"County":"DeKalb","Region":"Northern","value":97.26},
{"City":"Rockford ","lat":42.258836,"lon":-89.064553,"County":"Winnebago","Region":"Northern","value":94.66}]},
//CENTRAL
{
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Central',

data: [{"City":"London Mills (MCA)","lat":40.710609,"lon":-90.266118,"County":"Fulton","Region":"Central","value":177.31},
{"City":"Thomasboro ","lat":40.243791,"lon":-88.187629,"County":"Champaign","Region":"Central","value":175.70},
{"City":"Danville ","lat":40.142628,"lon":-87.610707,"County":"Vermilion","Region":"Central","value":143.39},
{"City":"Hoopeston ","lat":40.460824,"lon":-87.663572,"County":"Vermilion","Region":"Central","value":139.74},
{"City":"Tilton ","lat":40.094736,"lon":-87.639042,"County":"Vermilion","Region":"Central","value":125.67},
{"City":"Rantoul ","lat":40.30256,"lon":-88.15488,"County":"Champaign","Region":"Central","value":115.07},
{"City":"Clinton ","lat":40.146702,"lon":-88.96251,"County":"De Witt","Region":"Central","value":112.58},
{"City":"Kewanee ","lat":41.239087,"lon":-89.92566,"County":"Henry","Region":"Central","value":108.37},
{"City":"Peoria Heights ","lat":40.746696,"lon":-89.570031,"County":"Peoria","Region":"Central","value":93.99}]
        },
//SOUTHERN
{
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Southern',

data: [{"City":"Sauget ","lat":38.591998,"lon":-90.163094,"County":"St. Clair","Region":"Southern","value":1508.17},
{"City":"East St. Louis ","lat":38.616361,"lon":-90.130528,"County":"St. Clair","Region":"Southern","value":219.44},
{"City":"Southern Roxana ","lat":38.820837,"lon":-90.065079,"County":"Madison","Region":"Southern","value":199.82},
{"City":"Roxana ","lat":38.821582,"lon":-90.045848,"County":"Madison","Region":"Southern","value":155.56},
{"City":"Centralia (MCA)","lat":38.522073,"lon":-89.123541,"County":"Clinton","Region":"Southern","value":129.64},
{"City":"Mt Vernon ","lat":38.314202,"lon":-88.917529,"County":"Jefferson","Region":"Southern","value":129.41},
{"City":"East Alton ","lat":38.88412,"lon":-90.107943,"County":"Madison","Region":"Southern","value":118.72},
{"City":"Bethalto ","lat":38.902967,"lon":-90.053468,"County":"Madison","Region":"Southern","value":109.87},
{"City":"Cairo ","lat":37.006288,"lon":-89.18288,"County":"Alexander","Region":"Southern","value":104.02},
{"City":"Jerseyville ","lat":39.117994,"lon":-90.327455,"County":"Jersey","Region":"Southern","value":101.46},
{"City":"Palestine ","lat":39.001641,"lon":-87.612629,"County":"Crawford","Region":"Southern","value":100.55},
{"City":"Metropolis ","lat":37.149574,"lon":-88.687277,"County":"Massac","Region":"Southern","value":98.75},
{"City":"Fayetteville ","lat":38.377813,"lon":-89.797089,"County":"St. Clair","Region":"Southern","value":96.34},
{"City":"Centralia (MCA)","lat":38.522073,"lon":-89.123541,"County":"Clinton","Region":"Southern","value":129.64},
{"City":"Collinsville (MCA)","lat":38.676825,"lon":-90.005749,"County":"St. Clair","Region":"Southern","value":93.25}]},

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
