
var chart_worstScoreDifferencePercentageSummaryChart0_c04d3 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart0_c04d3'), {
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
                    0, 95.83333333333334, 0, 0, 0, 15.432098765432098, 93.75, 0
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    97.52475247524752, 0, 49.03846153846153, 95.96309111880046, 36.666666666666664, 6.790123456790123, 0, 84.17721518987342
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    100, 0, 55.769230769230774, 95.96309111880046, 30.833333333333336, 0, 9.375, 89.87341772151899
                  ]
                }, 
{
                  label: 'Tabu Search',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    100, 100, 100, 98.84659746251442, 100, 99.07407407407408, 53.125, 100
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    100, 100, 100, 99.53863898500576, 100, 100, 100, 100
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
                text: 'Worst hard score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst hard score difference percentage'
                },
                ticks: {
                        stepSize: 1
                        
                },
                suggestedMin: 0,
                suggestedMax: 100,
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
  chart_worstScoreDifferencePercentageSummaryChart0_c04d3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart0_c04d3.resize();
});