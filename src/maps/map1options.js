const mapOptions = {

    xAxis: {
      //maxZoom: 10
      minRange: 1

    },
    yAxis: {
      //maxZoom: 10
      minRange: 1

    },

    title: {
      text: ""
    },
    subtitle: {
            text: ''},

    mapNavigation: {
      enabled: false
    },

    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br>Rate per 100,000: {point.CriminalHomicideRate}'
    },

    series: [{
        // Use the gb-all map with no data as a basemap

        name: 'Basemap',
        //allAreas: false,
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
      },

      {
        name: 'Separators',
        type: 'mapline',
        enableMouseWheelZoom: false,
        data: [],
        color: '#707070',
        showInLegend: false,
        enableMouseTracking: false
      }, {
              type: 'mappoint',
        name: 'San Diego',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true",
        verticalAlign: "top"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 3,
        },
        data: [{"name":"San Diego","lat":32.715738,"lon":-117.161084,"CriminalHomicideRate":1.72},
]
},
{
              type: 'mappoint',
        name: 'New York',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 4,
        },
        data: [{"name":"New York","lat":40.712784,"lon":-74.005941,"CriminalHomicideRate":1.88},

]
},
{
              type: 'mappoint',
        name: 'San Jose',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 5,
        },
        data: [{"name":"San Jose","lat":37.338208,"lon":-121.886329,"CriminalHomicideRate":2.43},


]
},{
              type: 'mappoint',
        name: 'Los Angeles',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 6,
        },
        data: [{"name":"Los Angeles","lat":34.052234,"lon":-118.243685,"CriminalHomicideRate":3.37},


]
},{
              type: 'mappoint',
        name: 'San Antonio',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true",
        align: "right"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 7,
        },
        data: [{"name":"San Antonio","lat":29.424122,"lon":-98.493628,"CriminalHomicideRate":4.76},


]
},{
              type: 'mappoint',
        name: 'Houston',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 8,
        },
        data: [{"name":"Houston","lat":29.760427,"lon":-95.369803,"CriminalHomicideRate":6.88},


]
},{
              type: 'mappoint',
        name: 'Phoenix',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 9,
        },
        data: [{"name":"Phoenix","lat":33.448377,"lon":-112.074037,"CriminalHomicideRate":4.99},


]
},{
              type: 'mappoint',
        name: 'Dallas',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 10,
        },
        data: [{"name":"Dallas","lat":32.776664,"lon":-96.796988,"CriminalHomicideRate":6.38},


]
},{
              type: 'mappoint',
        name: 'Philadelphia',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true",
        align: "right",
        verticalAlign:"top"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 11,
        },
        data: [{"name":"Philadelphia","lat":39.952584,"lon":-75.165222,"CriminalHomicideRate":7.78},


]
},{
              type: 'mappoint',
        name: 'Chicago',
        showInLegend: false,
        dataLabels: {
        allowOverlap: "true"
        },
        marker: {
          symbol: "circle",
          fillColor: "#000080",
          radius: 14,
        },
        data: [{"name":"Chicago","lat":41.878114,"lon":-87.629798,"CriminalHomicideRate":11.62}


]
},


    ]
  }

  export { mapOptions }
