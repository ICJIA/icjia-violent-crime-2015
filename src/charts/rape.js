const hc_Rape_def_chart_150 = {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {

  categories:["Cook","DuPage","Jersey","Lake","Marion","Richland",
  "Sangamon","Vermilion","Will","Winnebago"]
,
            title: {
                text: null
            }
        },
        yAxis: [{
            title: {
                text: 'Rapes',
            },
            labels: {
                overflow: 'justify'
            },
        },
        {

            title: {
                text: 'Rate per 100,000',
            },
            labels: {
                overflow: 'justify'
            },
            opposite: true


        }
        ],
        tooltip: {
            shared: true

        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                }
            }
        },
				legend:{
        enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Rapes',
            data: [1911,159,23,155,33,12,147,96,164,197]

        },
        {
            yAxis: 1,
            name: 'Rape Rate per 100,000',
            data: [36.42,17.05,101.90,21.98,85.56,74.72,73.87,
            120.41,23.93,68.27]
        }
        ]
    }



const hc_Rape_def_chart_700 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
   			subtitle: {
            text: ''},
            tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Arrestees',
            colorByPoint: true,
            data: [{name:"Male",y:97.2},
{name:"Female",y:2.8}]
        }]
    }

const hc_Rape_def_chart_800 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
   			subtitle: {
            text: ''},
            tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Arrestees',
            colorByPoint: true,
            data: [{name:"Black",y:36.6},
{name:"White",y:50.9},{name:"Hispanic",y:10.6},{name:"Other/Unknown",y:1.9}]
        }]
    }

const hc_Rape_def_chart_900 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'line'
        },
        title: {
            text: ''
        },
   			subtitle: {
            text: ''},
            tooltip: {
            pointFormat: ''
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        xAxis: {
        categories:
 [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,66,69,75,79,81],
            plotLines: [{
                color: '#7A4695',
                width: 2,
                value: 11,
                label: {
                text: 'Median<br> Age = 28',
                textAlign: 'right',
                x: -5,
                y: 240,
                rotation: 0
                },
            }, {
                color: '#7A4695',
                width: 2,
                value: 15.74,
                label: {
                text: 'Average<br> Age = 31.2',
                verticalAlign: 'top',
                textAlign: 'left',
                rotation: 0,
                y: 100
                }
            }],
            title: {
                text: 'Age of Arrestee'
            }
   },
   yAxis:{
         labels:{enabled: false},
         gridLineWidth: 0,
         minorGridLineWidth: 0,
         title: {
          text: ''
         }
       },
				legend:{
        enabled: false
        },
        series: [{
            name: '',
            data: [1,6,13,15,15,15,9,23,12,17,14,8,14,6,15,13,12,9,5,7,12,10,16,9,10,6,5,8,14,8,3,9,8,5,5,5,6,4,7,4,7,4,6,3,1,8,3,1,1,3,2,2,1,1,3,1,1,1]

        }]
    }

const hc_Rape_def_chart_1100 = {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {

  categories:["0 priors","1 prior","2-5 priors","6-10 priors","11-15 priors","16-20 priors","21+ priors"]
,
            title: {
                text: null
            }
        },

        yAxis: {
            title: {
                text: '',
            },
            labels: {
                overflow: 'justify',
                formatter: function () {
                    return this.value + '%';
                }

            }
        },
        tooltip: {
            valueSuffix: ' murders'
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y + '%';
                    }
                }
            }
        },
				legend:{
        enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Prior Arrests',
            data: [36.6,14.1,22.9,9.7,8.1,2.8,5.8]

        }]
    }

const hc_Rape_def_chart_1200 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
   			subtitle: {
            text: ''},
            tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Arrestees',
            colorByPoint: true,
            data: [{name:"Guilty",y:41.9},
{name:"Disposition Not Available",y:8.3},
{name:"Nolle Prosqui",y:17.0},
{name:"Dismissed",y:15.6},
{name:"Not Guilty",y:7.0},
{name:"Other",y:10.1}
]
        }]
    }


const hc_Rape_def_chart_1300 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
   			subtitle: {
            text: ''},
            tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Murder Admissions',
            colorByPoint: true,
            data: [{name:"Less than a life sentence*",y:98.26},
{name:"Life Sentence",y:1.74},

]
        }]
    }

const hc_Rape_def_chart_1400 = {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },

xAxis: {

  categories:["0-1.9","2-3.9","4-5.9","6-7.9","8-9.9","10-11.9","12-13.9","14+"]

,
            title: {
                text: 'Years'
            }
        },
        yAxis: {
            title: {
                text: 'Percent of people released',
            },
            labels: {
                overflow: 'justify',
                 formatter: function() {
                     return this.value + ' %';
                 },            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                }
            }
        },
				legend:{
        enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Rape offenders released',
            data: [4,21,24,19,13,8,5,7]


        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: false,
                    format: '{y} %',
}}},
    }

export {
  hc_Rape_def_chart_150,
  hc_Rape_def_chart_700,
  hc_Rape_def_chart_800,
  hc_Rape_def_chart_900,
  hc_Rape_def_chart_1100,
  hc_Rape_def_chart_1200,
  hc_Rape_def_chart_1300,
  hc_Rape_def_chart_1400

};
