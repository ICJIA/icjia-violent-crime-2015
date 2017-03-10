const hc_Aslt_def_chart_150 = {
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

  categories:["Alexander","Cook","Kane","Sangamon","St. Clair","Vermilion","Washington","Winnebago"]
,
            title: {
                text: null
            }
        },
        yAxis: [{
            title: {
                text: 'Agg Assaults',
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
            name: 'Agg Assaults',
            data: [101,15129,642,1065,1164,422,79,1910]

        },
        {
            yAxis: 1,
            name: 'Agg Assault Rate per 100,000',
            data: [1348.10,288.37,121.75,535.18,438.04,529.30,551.02,661.95]
        }
        ]
    }

const hc_Aslt_def_chart_700 = {
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
            data: [{name:"Male",y:80.94},
{name:"Female",y:19.03},{name:"Unknown",y:0.03}]
        }]
    }

const hc_Aslt_def_chart_800 = {
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
            data: [{name:"Black",y:48.39},
{name:"White",y:39.51},{name:"Hispanic",y:10.51},{name:"Other/Unknown",y:1.59}]
        }]
    }

const hc_Aslt_def_chart_1100 = {
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
            data: [15.7,10.5,25.9,18.4,10.7,6.8,12.0]

        }]
    }


const hc_Aslt_def_chart_1200 = {
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
            data: [{name:"Guilty",y:33.62},
{name:"Disposition Not Available",y:9.37},
{name:"Nolle Prosqui",y:18.80},
{name:"Dismissed",y:18.81},
{name:"Not Guilty",y:3.08},
{name:"Other",y:16.3}
]
        }]
    }


const hc_Aslt_def_chart_1300 = {
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
            name: 'Agg Assault offenders admitted',
            data: [20.3,40.2,14.5,6.1,5.6,3.8,3.1,1.0,5.4]


        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: false,
                    format: '{y} %',
}}},
    }


const hc_Aslt_def_chart_1400 = {
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
            name: 'Agg Assault offenders released',
            data: [57,13,10,7,5,4,2,2]


        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: false,
                    format: '{y} %',
}}},
    }

export {

hc_Aslt_def_chart_150,
hc_Aslt_def_chart_700,
hc_Aslt_def_chart_800,
hc_Aslt_def_chart_1100,
hc_Aslt_def_chart_1200,
hc_Aslt_def_chart_1300,
hc_Aslt_def_chart_1400


};
