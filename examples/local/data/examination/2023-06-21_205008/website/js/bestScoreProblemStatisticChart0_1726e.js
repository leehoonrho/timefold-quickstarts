
var chart_bestScoreProblemStatisticChart0_1726e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_1726e'), {
    type: 'line',
    data: {
        labels: [
            262, 276, 278, 279, 303, 304, 307, 317, 406, 529, 649, 759, 900, 1018, 1053, 1134, 1178, 1226, 1227, 1287, 1400, 1407, 1472, 1473, 1496, 1576, 1642, 1643, 1793, 1794, 1924, 1996, 2527, 2528, 2621, 3392, 3909, 3910, 3930, 4001, 4008, 4014, 4049, 4217, 4313, 4394, 4491, 4622, 4712, 4921, 5065, 5099, 5571, 6001, 6262, 6455, 6456, 6457, 6462, 6503, 6508, 6509, 7389, 7799, 8355, 8388, 8872, 8930, 8931, 9448, 9450, 9451, 9719, 10184, 10426, 10896, 11340, 11783, 11786, 11993, 12288, 12888, 13216, 14018, 14202, 14203, 14248, 14546, 14547, 15808, 15809, 19976, 19977, 20246, 20628, 21834, 21930, 21998, 22445, 22731, 22774, 23477, 23480, 23969, 24451, 24821, 24822, 24852, 26375, 27261, 27266, 27792, 29260, 29382, 30196, 30616, 31471, 31660, 33506, 33566, 34383, 34829, 34847, 34868, 36353, 36444, 37189, 37476, 107319, 120311, 284188, 286781, 300000
        ],
        datasets: [
            {
                  label: 'First Fit',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -274, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -302, -302, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -324, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Tabu Search',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -324, , , , , , -135, -38, -17, -10, -9, -8, , -7, , , , -7, , , , , -6, , -5, , , , , , , , , , , , , , , , -5, -4, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -4, -3, , , -3
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -324, , , -304, -271, -217, -209, , , , , , , -208, , -208, -206, -205, , -204, -200, -196, -195, , -195, , -192, -182, -182, -173, -164, -146, -146, -145, -141, -141, -140, -138, -137, -137, -134, , , -134, -131, -122, -120, -119, -116, -115, -105, -103, -100, -96, -96, -95, -94, -92, -84, -82, -81, -77, -76, -75, -71, -71, -70, -66, -65, -63, -63, -61, -61, -58, -54, -54, -51, -50, -48, -46, -45, -42, -42, -41, -40, -38, -35, -34, -27, -25, -25, -24, -24, -23, -22, -22, -20, -19, -19, -18, -18, -16, -15, -15, -14, -14, -13, -13, -12, -11, -10, -10, -9, -9, -7, -7, -6, -6, -5, -5, -4, -4, -3, -3, -2, -2, -1, , , -1, 0, 0
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
                text: 'exam_comp_set6 best hard score statistic'
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
                        stepSize: 10
                        
                },
                suggestedMin: -324,
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
  chart_bestScoreProblemStatisticChart0_1726e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_1726e.resize();
});
