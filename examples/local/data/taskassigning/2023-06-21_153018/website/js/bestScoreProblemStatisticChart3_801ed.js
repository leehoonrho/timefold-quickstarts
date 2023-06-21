
var chart_bestScoreProblemStatisticChart3_801ed = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart3_801ed'), {
    type: 'line',
    data: {
        labels: [
            175, 192, 312, 331, 438, 1876, 1936, 2009, 2096, 2150, 2389, 2419, 2496, 4752, 4817, 4818, 4923, 4939, 5000, 5187, 5384, 5397, 5970, 6056, 6115, 6119, 6189, 6203, 6254, 6255, 6284, 6355, 6356, 6465, 6635, 6650, 6835, 300000
        ],
        datasets: [
            {
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -35090, -36392, -52887, -46450, -46972, -42490, -44853, -49004, -51319, -48325, -46024, -36919, -35255, -35241, -35161, -35161, -35124, -35105, -35062, -35028, -35023, -34915, -34910, -34908, -34896, -34892, -34888, -34879, -34878, -34878, -34870, -34863, -34862, -34850, -34841, -34833, -34832, -34832
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
                text: '100tasks-5employees best soft 2 score statistic'
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
                        stepSize: 1000
                        
                },
                suggestedMin: -52887,
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
  chart_bestScoreProblemStatisticChart3_801ed.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart3_801ed.resize();
});
