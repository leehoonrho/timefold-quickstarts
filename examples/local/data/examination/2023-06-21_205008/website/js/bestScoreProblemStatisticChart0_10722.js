
var chart_bestScoreProblemStatisticChart0_10722 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_10722'), {
    type: 'line',
    data: {
        labels: [
            5828, 6038, 6047, 6829, 6830, 6841, 7471, 7472, 7608, 7609, 7752, 8084, 8431, 8770, 8863, 8961, 9195, 9211, 9376, 9530, 9919, 10198, 10343, 10572, 10892, 11233, 12346, 12573, 13042, 13448, 13983, 14194, 15157, 15793, 16760, 17066, 17078, 18693, 19408, 20641, 23425, 300000
        ],
        datasets: [
            {
                  label: 'First Fit',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -1, -1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -24, -24, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , -24, -24, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Tabu Search',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , -24, -21, -21, -6, -3, -3, 0, , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -24, -24, -20, , , -14, , , , , , , , , , , , -14, -13, -13, -12, -12, -11, -10, -10, -9, -9, -8, -8, -6, -6, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0
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
                text: 'exam_comp_set2 best hard score statistic'
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
                suggestedMax: 300000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 0.1
                        
                },
                suggestedMin: -24,
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
  chart_bestScoreProblemStatisticChart0_10722.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_10722.resize();
});
