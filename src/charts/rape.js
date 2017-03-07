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


export {
  hc_Rape_def_chart_150,

};
