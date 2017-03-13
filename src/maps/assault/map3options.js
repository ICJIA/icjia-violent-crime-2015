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
        minColor: '#FFFFFF',
        maxColor: '#A52A2A',
        stops: [
          [0, '#FFFFFF'],
          [0.25, '#FF8C00'],
          [0.75, '#FF4500'],
          [1, '#A52A2A']
        ]
      },

      series: [{
        data: [{"hc-key":"us-il-007","value":0.00},
{"hc-key":"us-il-071","value":0.00},
{"hc-key":"us-il-131","value":0.00},
{"hc-key":"us-il-155","value":0.00},
{"hc-key":"us-il-133","value":5.93},
{"hc-key":"us-il-139","value":13.48},
{"hc-key":"us-il-039","value":18.42},
{"hc-key":"us-il-171","value":19.22},
{"hc-key":"us-il-079","value":20.78},
{"hc-key":"us-il-067","value":21.57},
{"hc-key":"us-il-005","value":23.16},
{"hc-key":"us-il-065","value":24.11},
{"hc-key":"us-il-141","value":28.80},
{"hc-key":"us-il-051","value":32.01},
{"hc-key":"us-il-015","value":33.98},
{"hc-key":"us-il-153","value":34.39},
{"hc-key":"us-il-093","value":34.61},
{"hc-key":"us-il-023","value":37.08},
{"hc-key":"us-il-169","value":40.93},
{"hc-key":"us-il-063","value":41.65},
{"hc-key":"us-il-199","value":41.79},
{"hc-key":"us-il-149","value":43.69},
{"hc-key":"us-il-043","value":48.03},
{"hc-key":"us-il-173","value":49.89},
{"hc-key":"us-il-083","value":53.17},
{"hc-key":"us-il-027","value":56.26},
{"hc-key":"us-il-047","value":60.45},
{"hc-key":"us-il-157","value":60.85},
{"hc-key":"us-il-203","value":61.24},
{"hc-key":"us-il-085","value":67.40},
{"hc-key":"us-il-111","value":67.69},
{"hc-key":"us-il-175","value":68.81},
{"hc-key":"us-il-073","value":76.56},
{"hc-key":"us-il-025","value":81.36},
{"hc-key":"us-il-035","value":83.08},
{"hc-key":"us-il-123","value":83.24},
{"hc-key":"us-il-057","value":83.32},
{"hc-key":"us-il-103","value":83.49},
{"hc-key":"us-il-097","value":84.80},
{"hc-key":"us-il-177","value":86.14},
{"hc-key":"us-il-129","value":87.51},
{"hc-key":"us-il-021","value":88.52},
{"hc-key":"us-il-197","value":91.19},
{"hc-key":"us-il-011","value":91.61},
{"hc-key":"us-il-099","value":92.59},
{"hc-key":"us-il-059","value":94.50},
{"hc-key":"us-il-055","value":101.49},
{"hc-key":"us-il-101","value":102.91},
{"hc-key":"us-il-075","value":103.88},
{"hc-key":"us-il-195","value":109.01},
{"hc-key":"us-il-049","value":116.55},
{"hc-key":"us-il-119","value":117.05},
{"hc-key":"us-il-009","value":117.10},
{"hc-key":"us-il-145","value":119.97},
{"hc-key":"us-il-089","value":121.75},
{"hc-key":"us-il-135","value":122.62},
{"hc-key":"us-il-105","value":124.00},
{"hc-key":"us-il-147","value":127.81},
{"hc-key":"us-il-181","value":131.83},
{"hc-key":"us-il-117","value":139.93},
{"hc-key":"us-il-069","value":145.31},
{"hc-key":"us-il-077","value":149.14},
{"hc-key":"us-il-159","value":149.43},
{"hc-key":"us-il-061","value":156.32},
{"hc-key":"us-il-137","value":157.46},
{"hc-key":"us-il-125","value":158.30},
{"hc-key":"us-il-107","value":161.37},
{"hc-key":"us-il-045","value":162.55},
{"hc-key":"us-il-191","value":163.21},
{"hc-key":"us-il-091","value":166.11},
{"hc-key":"us-il-113","value":168.33},
{"hc-key":"us-il-187","value":173.44},
{"hc-key":"us-il-037","value":180.16},
{"hc-key":"us-il-179","value":184.96},
{"hc-key":"us-il-033","value":206.26},
{"hc-key":"us-il-109","value":207.03},
{"hc-key":"us-il-185","value":207.81},
{"hc-key":"us-il-121","value":212.59},
{"hc-key":"us-il-193","value":215.67},
{"hc-key":"us-il-165","value":227.53},
{"hc-key":"us-il-041","value":231.28},
{"hc-key":"us-il-029","value":234.43},
{"hc-key":"us-il-115","value":237.19},
{"hc-key":"us-il-127","value":248.24},
{"hc-key":"us-il-001","value":259.75},
{"hc-key":"us-il-161","value":260.16},
{"hc-key":"us-il-143","value":264.26},
{"hc-key":"us-il-087","value":269.82},
{"hc-key":"us-il-019","value":279.53},
{"hc-key":"us-il-095","value":282.65},
{"hc-key":"us-il-031","value":288.37},
{"hc-key":"us-il-053","value":292.23},
{"hc-key":"us-il-163","value":438.04},
{"hc-key":"us-il-017","value":471.27},
{"hc-key":"us-il-081","value":500.86},
{"hc-key":"us-il-183","value":529.30},
{"hc-key":"us-il-167","value":535.18},
{"hc-key":"us-il-189","value":551.02},
{"hc-key":"us-il-201","value":661.95},
{"hc-key":"us-il-003","value":1348.10},
  {
    "hc-key": "us-il-013",
    "color": "#696969",
          "value": null ,
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
