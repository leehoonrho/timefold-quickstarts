
var chart_bestScoreScalabilitySummaryChart1_bff40 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_bff40'), {
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
                    -42139, -32300, -5808, -6947, -10767, -8273, -21360, -933
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    -32406, -29130, -6256, -8401, -27286, -5464, -13623, -852
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    -32406, -28885, -6253, -8273, -27297, -5519, -13479, -844
                  ]
                }, 
{
                  label: 'Tabu Search',
                    borderWidth: 1
                  ,
                  data: [
                    -27238, -31645, -3681, -5619, -8799, -5005, -12746, -588
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                    borderWidth: 4
,
                  data: [
                    -39910, -28805, -3755, -7832, -13268, -11090, -39714, -1481
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
                text: 'Best soft score scalability summary (higher is better)'
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
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                suggestedMin: -42139,
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
  chart_bestScoreScalabilitySummaryChart1_bff40.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_bff40.resize();
});
