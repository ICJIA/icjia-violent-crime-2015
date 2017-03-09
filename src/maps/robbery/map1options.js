const mapOptions = {
    chart: {
      renderTo: 'container'
    },
    xAxis: {
      //maxZoom: 10
      minRange: 1

    },
    yAxis: {
      //maxZoom: 10
      minRange: 1

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
      pointFormat: '<b>{point.name}</b><br>Rate per 100,000: {point.RobberyRate}'
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
          fillColor: "#008000",
          radius: 3,
        },
        data: [{"name":"San Diego","lat":32.715738,"lon":-117.161084,"RobberyRate":51.83},
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
          fillColor: "#008000",
          radius: 6,
        },
        data: [{"name":"New York","lat":40.712784,"lon":-74.005941,"RobberyRate":85.81},

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
          fillColor: "#008000",
          radius: 4,
        },
        data: [{"name":"San Jose","lat":37.338208,"lon":-121.886329,"RobberyRate":56.77},


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
          fillColor: "#008000",
          radius: 8,
        },
        data: [{"name":"Los Angeles","lat":34.052234,"lon":-118.243685,"RobberyRate":125.63},


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
          fillColor: "#008000",
          radius: 5,
        },
        data: [{"name":"San Antonio","lat":29.424122,"lon":-98.493628,"RobberyRate":71.50},


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
          fillColor: "#008000",
          radius: 14,
        },
        data: [{"name":"Houston","lat":29.760427,"lon":-95.369803,"RobberyRate":207.38},


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
          fillColor: "#008000",
          radius: 7,
        },
        data: [{"name":"Phoenix","lat":33.448377,"lon":-112.074037,"RobberyRate":92.77},


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
          fillColor: "#008000",
          radius: 9,
        },
        data: [{"name":"Dallas","lat":32.776664,"lon":-96.796988,"RobberyRate":165.37},


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
          fillColor: "#008000",
          radius: 10,
        },
        data: [{"name":"Philadelphia","lat":39.952584,"lon":-75.165222,"RobberyRate":184.76},


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
          fillColor: "#008000",
          radius: 11,
        },
        data: [{"name":"Chicago","lat":41.878114,"lon":-87.629798,"RobberyRate":190.26}


]
},


    ]
  }

export { mapOptions }
