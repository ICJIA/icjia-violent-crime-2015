const hc_Robb_def_chart_150 = {
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

  categories:["Cook","Peoria","Sangamon","St. Clair","Vermilion","Winnebago"]
,
            title: {
                text: null
            }
        },
        yAxis: [{
            title: {
                text: 'Robberies',
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
            name: 'Robberies',
            data: [11217,333,276,315,96,563]

        },
        {
            yAxis: 1,
            name: 'Robbery Rate per 100,000',
            data: [213.80,177.77,138.70,118.54,120.41,195.12]
        }
        ]
    }

const hc_Robb_def_chart_700 = {
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
            data: [{name:"Male",y:91.34},
{name:"Female",y:8.66}]
        }]
    }


  const hc_Robb_def_chart_800 = {
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
            data: [{name:"Black",y:75.4},
{name:"White",y:14.0},{name:"Hispanic",y:9.8},{name:"Other/Unknown",y:0.8}]
        }]
    }


const hc_Robb_def_chart_1100 = {
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
            data: [15.5,10.6,27.8,19.1,10.4,6.6,10.0]

        }]
    }

const hc_Robb_def_chart_1200 = {
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
            data: [{name:"Guilty",y:54.6},
{name:"Disposition Not Available",y:14.3},
{name:"Nolle Prosqui",y:10.5},
{name:"Dismissed",y:7.9},
{name:"Not Guilty",y:3.6},
{name:"Other",y:9.2}
]
        }]
    }


const hc_Robb_def_chart_1300 = {
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

  categories:["0-2.9","3-5.9","6-8.9","9-11.9","12-14.9","15-17.9","18-20.9","21-23.9","24+"]

,
            title: {
                text: 'Years'
            }
        },
        yAxis: {
            title: {
                text: 'Percent of people admitted',
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
            name: 'Robbery offenders admitted',
            data: [1.4,43.3,26.6,9.5,6.4,4.6,1.9,4.3,2.0]


        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{y} %',
}}},
    }


const hc_Robb_def_chart_1400 = {
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

  categories:["0-0.9","1-1.9","2-2.9","3-3.9","4-4.9","5-5.9","6-6.9","7+"]

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
            name: 'Robbery offenders released',
            data: [33,27,20,9,5,2,2,3]


        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{y} %',
}}},
    }

export {
  hc_Robb_def_chart_150,
  hc_Robb_def_chart_700,
  hc_Robb_def_chart_800,
  hc_Robb_def_chart_1100,
  hc_Robb_def_chart_1200,
  hc_Robb_def_chart_1300,
  hc_Robb_def_chart_1400

};
