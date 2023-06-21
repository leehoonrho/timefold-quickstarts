
var chart_bestScoreScalabilitySummaryChart0_d0a20 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_d0a20'), {
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
                    -867, -274, -120, -1010, -158, -6, -624, -1
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    -35, -302, -76, -25, -25, -96, -318, -24
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    -35, -324, -83, 0, -16, -87, -276, -24
                  ]
                }, 
{
                  label: 'Tabu Search',
                    borderWidth: 1
                  ,
                  data: [
                    -10, -3, 0, , 0, -45, 0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                    borderWidth: 4
,
                  data: [
                    -4, 0, , , , , , 0
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
                text: 'Best hard score scalability summary (higher is better)'
            },
            tooltip: {
                callbacks: {
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
  chart_bestScoreScalabilitySummaryChart0_d0a20.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_d0a20.resize();
});
