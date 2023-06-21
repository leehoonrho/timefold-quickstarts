
var chart_bestScoreProblemStatisticChart0_a8a05 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_a8a05'), {
    type: 'line',
    data: {
        labels: [
            382, 418, 419, 455, 472, 488, 510, 511, 546, 621, 641, 741, 825, 3459, 3461, 3747, 3764, 3834, 3835, 3836, 3933, 3934, 3948, 4025, 5072, 5090, 5091, 5149, 5864, 5969, 5981, 5983, 6329, 6331, 6430, 6431, 6435, 6436, 6916, 7389, 7589, 7591, 8624, 9180, 9536, 9630, 9720, 10287, 10539, 10712, 11138, 11175, 11176, 11419, 11433, 11810, 11899, 12179, 13292, 13529, 13775, 13788, 300000
        ],
        datasets: [
            {
                  label: 'First Fit',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -120, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -76, -76, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -83, -83, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Tabu Search',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -83, , , , , -42, -34, , -5, 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , -83, -42, , , , , -38, , , -38, -37, -37, -36, -35, -34, -34, -33, -33, -32, -28, -28, -27, -26, -24, -23, -22, -21, -21, -20, -20, -19, -19, -18, -18, -17, -17, -15, -13, -12, -11, -11, -10, -9, -8, -8, -7, -7, -6, -5, -5, -4, -4, -3, -2, -2, -1, -1, 0, 0
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
                text: 'exam_comp_set5 best hard score statistic'
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
                        stepSize: 1
                        
                },
                suggestedMin: -120,
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
  chart_bestScoreProblemStatisticChart0_a8a05.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_a8a05.resize();
});
