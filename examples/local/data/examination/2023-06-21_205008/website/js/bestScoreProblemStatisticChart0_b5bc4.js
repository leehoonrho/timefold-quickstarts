
var chart_bestScoreProblemStatisticChart0_b5bc4 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_b5bc4'), {
    type: 'line',
    data: {
        labels: [
            96, 97, 128, 129, 130, 133, 171, 172, 255, 266, 372, 378, 612, 743, 907, 1158, 1438, 1697, 1956, 2555, 2833, 3425, 3703, 4033, 4330, 4647, 4934, 5260, 5285, 5612, 5901, 6188, 6558, 8248, 8293, 8417, 8526, 8786, 9696, 10066, 10067, 15415, 15708, 16024, 16337, 17087, 20983, 21250, 30981, 31018, 35463, 37656, 37930, 38053, 42448, 56146, 57197, 57199, 58131, 58864, 62349, 68265, 70897, 90026, 90242, 97291, 101750, 101752, 116839, 125075, 125138, 129484, 132825, 145275, 149190, 161113, 161143, 161158, 181973, 181991, 187794, 208442, 214553, 214733, 215198, 229860, 233913, 254983, 256507, 300000, 300012
        ],
        datasets: [
            {
                  label: 'First Fit',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -867, -867, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -35, -35, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -35, -35, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Tabu Search',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -35, , , , , , -34, , -32, , -30, -29, -28, -26, -25, -25, -24, -24, -23, -23, -22, -21, -20, , -19, -18, -17, -17, -16, -16, , , -15, -14, , , , -14, -13, -13, -12, , -12, -11, , , , -11, -10, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -10
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , -35, , , -34, -33, , -32, , -30, , , , , , , , , , , , , , -30, , , , , , , -29, -29, , , -28, -28, -27, , , , , -26, , , -26, -25, -25, , , -24, -23, -23, -22, -22, -21, -21, -19, -19, -18, -18, -17, -16, -16, -15, -15, -14, -13, -13, -12, -12, -11, -11, -10, -10, -9, -9, -8, -8, -7, -7, -6, -6, -5, -5, -4, -4, 
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
                text: 'exam_comp_set4 best hard score statistic'
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
                suggestedMin: -867,
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
  chart_bestScoreProblemStatisticChart0_b5bc4.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_b5bc4.resize();
});
