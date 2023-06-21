
var chart_bestScoreProblemStatisticChart3_727e2 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart3_727e2'), {
    type: 'line',
    data: {
        labels: [
            73, 81, 83, 85, 220, 233, 293, 294, 295, 297, 298, 303, 304, 362, 364, 557, 566, 569, 570, 593, 594, 697, 698, 737, 752, 1204, 1232, 1247, 1324, 1325, 1343, 1383, 1403, 1425, 1446, 1600, 1621, 1711, 300000
        ],
        datasets: [
            {
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -8318, -8204, -9068, -8750, -15539, -13876, -22053, -21037, -20233, -20599, -18531, -14939, -18210, -11233, -11213, -11660, -13444, -13278, -13263, -9108, -8884, -17016, -15596, -11073, -9195, -10790, -10968, -10518, -9252, -10493, -10021, -9200, -9221, -9598, -7973, -7884, -7825, -7772, -7772
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
                text: '50tasks-5employees best soft 2 score statistic'
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
                    text: 'Best soft 2 score'
                },
                ticks: {
                        stepSize: 100
                        
                },
                suggestedMin: -22053,
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
  chart_bestScoreProblemStatisticChart3_727e2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart3_727e2.resize();
});
