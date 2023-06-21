
var chart_timeSpentSummaryChart_a408f = new Chart(document.getElementById('chart_timeSpentSummaryChart_a408f'), {
    type: 'bar',
    data: {
        labels: [
            'exam_comp_set1', 'exam_comp_set2', 'exam_comp_set3', 'exam_comp_set4', 'exam_comp_set5', 'exam_comp_set6', 'exam_comp_set7', 'exam_comp_set8'
        ],
        datasets: [
            {
                  label: 'First Fit',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    4362, 6830, 11715, 97, 382, 262, 7832, 2884
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    5113, 7472, 13759, 129, 419, 304, 9873, 3342
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    5039, 7609, 13326, 172, 511, 279, 9933, 3333
                  ]
                }, 
{
                  label: 'Tabu Search',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    300000, 300000, 300001, 300012, 300000, 300000, 300000, 300000
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
                tooltip: {
                    callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                return label + ": " + humanizeTime(context.parsed.y);
                            }
                    }
                },
            title: {
                display: true,
                text: 'Time spent summary (lower time is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 1000
                        ,
                        callback: function(value, index, ticks) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 300012,
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
  chart_timeSpentSummaryChart_a408f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentSummaryChart_a408f.resize();
});