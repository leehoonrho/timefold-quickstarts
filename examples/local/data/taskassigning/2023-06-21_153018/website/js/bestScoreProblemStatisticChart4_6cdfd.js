
var chart_bestScoreProblemStatisticChart4_6cdfd = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart4_6cdfd'), {
    type: 'line',
    data: {
        labels: [
            73, 81, 83, 85, 220, 233, 293, 294, 295, 297, 298, 303, 304, 362, 364, 557, 566, 569, 570, 593, 594, 697, 698, 737, 752, 1204, 1232, 1247, 1324, 1325, 1343, 1383, 1403, 1425, 1446, 1600, 1621, 1711, 2264, 2341, 2377, 2559, 300000
        ],
        datasets: [
            {
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -21402, -21331, -22272, -23214, -24996, -26168, -44858, -43220, -43257, -39465, -39373, -43925, -39890, -27334, -26486, -24663, -25333, -24951, -24622, -22350, -22536, -29555, -29219, -23744, -21068, -19004, -19411, -18370, -20314, -19043, -19295, -19847, -19607, -20215, -20323, -20149, -21466, -20654, -20525, -20512, -20474, -20463, -20463
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
                text: '50tasks-5employees best soft 3 score statistic'
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
                    text: 'Best soft 3 score'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                suggestedMin: -44858,
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
  chart_bestScoreProblemStatisticChart4_6cdfd.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart4_6cdfd.resize();
});
