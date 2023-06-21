
var chart_bestScoreProblemStatisticChart4_9f1f1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart4_9f1f1'), {
    type: 'line',
    data: {
        labels: [
            175, 192, 312, 331, 438, 1876, 1936, 2009, 2096, 2150, 2389, 2419, 2496, 4752, 4817, 4818, 4923, 4939, 5000, 5187, 5384, 5397, 5970, 6056, 6115, 6119, 6189, 6203, 6254, 6255, 6284, 6355, 6356, 6465, 6635, 6650, 6835, 7013, 7420, 8021, 300000
        ],
        datasets: [
            {
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -66188, -65393, -49485, -57228, -58168, -60625, -58859, -57978, -54201, -55957, -60336, -64240, -66097, -68932, -67119, -66826, -68178, -66963, -68081, -68042, -69202, -66930, -69324, -68756, -67145, -68333, -66197, -68124, -68492, -68337, -67850, -68818, -68536, -66950, -68858, -66270, -66673, -65982, -65863, -65802, -65802
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
                text: '100tasks-5employees best soft 3 score statistic'
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
                suggestedMin: -69324,
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
  chart_bestScoreProblemStatisticChart4_9f1f1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart4_9f1f1.resize();
});
