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
        min: 0,
        minColor: '#98FB98',
        maxColor: '#006400',
        stops: [
          [0, '#98FB98'],
          [0.67, '#008000'],
          [1, '#006400']
        ]
      },

      series: [{
        data: [{"hc-key":"us-il-005","value":0.00},
{"hc-key":"us-il-007","value":0.00},
{"hc-key":"us-il-009","value":0.00},
{"hc-key":"us-il-017","value":0.00},
{"hc-key":"us-il-023","value":0.00},
{"hc-key":"us-il-025","value":0.00},
{"hc-key":"us-il-033","value":0.00},
{"hc-key":"us-il-035","value":0.00},
{"hc-key":"us-il-039","value":0.00},
{"hc-key":"us-il-047","value":0.00},
{"hc-key":"us-il-051","value":0.00},
{"hc-key":"us-il-059","value":0.00},
{"hc-key":"us-il-061","value":0.00},
{"hc-key":"us-il-065","value":0.00},
{"hc-key":"us-il-067","value":0.00},
{"hc-key":"us-il-069","value":0.00},
{"hc-key":"us-il-071","value":0.00},
{"hc-key":"us-il-079","value":0.00},
{"hc-key":"us-il-083","value":0.00},
{"hc-key":"us-il-087","value":0.00},
{"hc-key":"us-il-101","value":0.00},
{"hc-key":"us-il-123","value":0.00},
{"hc-key":"us-il-129","value":0.00},
{"hc-key":"us-il-131","value":0.00},
{"hc-key":"us-il-139","value":0.00},
{"hc-key":"us-il-147","value":0.00},
{"hc-key":"us-il-153","value":0.00},
{"hc-key":"us-il-155","value":0.00},
{"hc-key":"us-il-169","value":0.00},
{"hc-key":"us-il-171","value":0.00},
{"hc-key":"us-il-173","value":0.00},
{"hc-key":"us-il-175","value":0.00},
{"hc-key":"us-il-181","value":0.00},
{"hc-key":"us-il-185","value":0.00},
{"hc-key":"us-il-189","value":0.00},
{"hc-key":"us-il-191","value":0.00},
{"hc-key":"us-il-193","value":0.00},
{"hc-key":"us-il-203","value":0.00},
{"hc-key":"us-il-073","value":2.01},
{"hc-key":"us-il-133","value":2.97},
{"hc-key":"us-il-027","value":3.75},
{"hc-key":"us-il-141","value":3.84},
{"hc-key":"us-il-145","value":4.61},
{"hc-key":"us-il-041","value":5.03},
{"hc-key":"us-il-055","value":5.07},
{"hc-key":"us-il-111","value":5.86},
{"hc-key":"us-il-159","value":6.23},
{"hc-key":"us-il-015","value":6.80},
{"hc-key":"us-il-135","value":6.81},
{"hc-key":"us-il-117","value":8.61},
{"hc-key":"us-il-049","value":8.74},
{"hc-key":"us-il-085","value":8.99},
{"hc-key":"us-il-157","value":9.13},
{"hc-key":"us-il-109","value":9.41},
{"hc-key":"us-il-179","value":9.58},
{"hc-key":"us-il-057","value":11.11},
{"hc-key":"us-il-045","value":11.21},
{"hc-key":"us-il-137","value":11.45},
{"hc-key":"us-il-011","value":11.82},
{"hc-key":"us-il-063","value":11.90},
{"hc-key":"us-il-199","value":11.94},
{"hc-key":"us-il-001","value":13.44},
{"hc-key":"us-il-075","value":13.85},
{"hc-key":"us-il-099","value":14.38},
{"hc-key":"us-il-125","value":14.39},
{"hc-key":"us-il-093","value":15.66},
{"hc-key":"us-il-165","value":16.25},
{"hc-key":"us-il-103","value":17.27},
{"hc-key":"us-il-195","value":17.58},
{"hc-key":"us-il-021","value":17.70},
{"hc-key":"us-il-105","value":18.47},
{"hc-key":"us-il-149","value":18.72},
{"hc-key":"us-il-127","value":20.13},
{"hc-key":"us-il-053","value":21.92},
{"hc-key":"us-il-187","value":22.38},
{"hc-key":"us-il-043","value":23.80},
{"hc-key":"us-il-119","value":25.51},
{"hc-key":"us-il-121","value":25.93},
{"hc-key":"us-il-029","value":26.26},
{"hc-key":"us-il-177","value":30.15},
{"hc-key":"us-il-037","value":33.19},
{"hc-key":"us-il-197","value":33.26},
{"hc-key":"us-il-107","value":33.62},
{"hc-key":"us-il-113","value":33.90},
{"hc-key":"us-il-095","value":33.92},
{"hc-key":"us-il-097","value":38.15},
{"hc-key":"us-il-003","value":40.04},
{"hc-key":"us-il-161","value":41.76},
{"hc-key":"us-il-089","value":42.67},
{"hc-key":"us-il-077","value":70.38},
{"hc-key":"us-il-091","value":73.63},
{"hc-key":"us-il-081","value":83.04},
{"hc-key":"us-il-019","value":98.97},
{"hc-key":"us-il-115","value":115.37},
{"hc-key":"us-il-163","value":118.54},
{"hc-key":"us-il-183","value":120.41},
{"hc-key":"us-il-167","value":138.70},
{"hc-key":"us-il-143","value":177.77},
{"hc-key":"us-il-201","value":195.12},
{"hc-key":"us-il-031","value":213.80},
  {
    "hc-key": "us-il-013",
    "color": "#696969",
          "value": null,
  },
  {
    "hc-key": "us-il-151",
    "color": "#696969",
          "value": null,
  }
],
        joinBy: 'hc-key',
        name: 'County',
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
