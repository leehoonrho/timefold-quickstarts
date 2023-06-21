
var chart_timeSpentScalabilitySummaryChart_54b3c = new Chart(document.getElementById('chart_timeSpentScalabilitySummaryChart_54b3c'), {
    type: 'line',
    data: {
        labels: [
            5653, 28816, 126300, 228704, 379560, 1299795, 1486272, 1697556
        ],
        datasets: [
            {
                  label: 'First Fit',
                    borderWidth: 1
                  ,
                  data: [
                    97, 262, 382, 4362, 2884, 7832, 11715, 6830
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    129, 304, 419, 5113, 3342, 9873, 13759, 7472
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    172, 279, 511, 5039, 3333, 9933, 13326, 7609
                  ]
                }, 
{
                  label: 'Tabu Search',
                    borderWidth: 1
                  ,
                  data: [
                    300012, 300000, , , , 300000, 300001, 300000
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                    borderWidth: 4
,
                  data: [
                    300000, , , , , , , 300000
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
                text: 'Time spent scalability summary (lower is better)'
            },
            tooltip: {
                callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            return label + ": " + humanizeTime(context.parsed.y);
                        }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 10000
                        
                },
                suggestedMin: 0,
                suggestedMax: 1697556,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 1000
                        ,
                        callback: function(value, index, ticks) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 300012,
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
  chart_timeSpentScalabilitySummaryChart_54b3c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentScalabilitySummaryChart_54b3c.resize();
});
