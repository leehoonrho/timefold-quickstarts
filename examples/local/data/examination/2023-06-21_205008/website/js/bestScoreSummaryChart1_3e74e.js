
var chart_bestScoreSummaryChart1_3e74e = new Chart(document.getElementById('chart_bestScoreSummaryChart1_3e74e'), {
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
                    -6947, -933, -21360, -42139, -5808, -32300, -8273, -10767
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -8401, -852, -13623, -32406, -6256, -29130, -5464, -27286
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -8273, -844, -13479, -32406, -6253, -28885, -5519, -27297
                  ]
                }, 
{
                  label: 'Tabu Search',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -5619, -588, -12746, -27238, -3681, -31645, -5005, -8799
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -7832, -1481, -39714, -39910, -3755, -28805, -11090, -13268
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
            title: {
                display: true,
                text: 'Best soft score summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                suggestedMin: -42139,
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
  chart_bestScoreSummaryChart1_3e74e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_3e74e.resize();
});