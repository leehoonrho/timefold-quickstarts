
var chart_bestScoreProblemStatisticChart2_efe22 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_efe22'), {
    type: 'line',
    data: {
        labels: [
            73, 81, 83, 85, 220, 233, 293, 294, 295, 297, 298, 303, 304, 362, 364, 557, 566, 569, 570, 593, 594, 697, 698, 737, 752, 1204, 1232, 1247, 1324, 1325, 1343, 1383, 1403, 1425, 1446, 300000
        ],
        datasets: [
            {
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -7161629, -7005784, -7760520, -7995213, -11377093, -10584561, -25842612, -24763284, -24763284, -24737214, -23827794, -23638670, -23015290, -9753606, -9753606, -9414205, -10276949, -10276949, -10080717, -7171068, -7171068, -14378988, -13524428, -8060829, -6727324, -6676795, -6653955, -6442539, -6427867, -6394852, -6371332, -6333260, -6331655, -6312519, -6293940, -6293940
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
                text: '50tasks-5employees best soft 1 score statistic'
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
                    text: 'Best soft 1 score'
                },
                ticks: {
                        stepSize: 100000
                        
                },
                suggestedMin: -25842612,
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
  chart_bestScoreProblemStatisticChart2_efe22.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_efe22.resize();
});
