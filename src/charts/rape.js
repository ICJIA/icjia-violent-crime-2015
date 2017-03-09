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
        enabled: true
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
                    enabled: true,
                    format: '{y} %',
}}},
    }

export {
  hc_Rape_def_chart_150,
  hc_Rape_def_chart_700,
  hc_Rape_def_chart_800,

  hc_Rape_def_chart_1100,
  hc_Rape_def_chart_1200,
  hc_Rape_def_chart_1300,
  hc_Rape_def_chart_1400

};
