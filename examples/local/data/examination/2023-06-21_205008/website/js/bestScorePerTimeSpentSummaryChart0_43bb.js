
var chart_bestScorePerTimeSpentSummaryChart0_43bb = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart0_43bb'), {
    type: 'line',
    data: {
        labels: [
            97, 129, 172, 262, 279, 304, 382, 419, 511, 2884, 3333, 3342, 4362, 5039, 5113, 6830, 7472, 7609, 7832, 9873, 9933, 11715, 13326, 13759, 300000, 300001, 300012
        ],
        datasets: [
            {
                  label: 'First Fit',
                    borderWidth: 1
                  ,
                  data: [
                    -867, , , -274, , , -120, , , -158, , , -1010, , , -1, , , -6, , , -624, , , , , 
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    , -35, , , , -302, , -76, , , , -25, , , -25, , -24, , , -96, , , , -318, , , 
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    , , -35, , -324, , , , -83, , -16, , , 0, , , , -24, , , -87, , -276, , , , 
                  ]
                }, 
{
                  label: 'Tabu Search',
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , 0, 0, -10
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , 0, , 
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Best hard score per time spent summary (higher left is better)'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 1000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 300012,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 10
                        
                },
                suggestedMin: -1010,
                suggestedMax: 0,
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScorePerTimeSpentSummaryChart0_43bb.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart0_43bb.resize();
});
