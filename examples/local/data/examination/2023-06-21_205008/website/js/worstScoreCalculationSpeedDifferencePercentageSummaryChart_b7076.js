
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b7076 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b7076'), {
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
                    318.3216315613507, 280.15597059407906, 570.538645842577, 499.599251936949, 465.98182983375426, 422.9942808274092, 555.1711685685397, 614.1278295605858
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    342.12637913741224, 286.141466322273, 577.123081018724, 456.06465402083893, 505.12685188675687, 380.7311988882356, 538.1337570417448, 574.9933422103861
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    343.1405327092388, 285.50069541029205, 592.7056526754815, 317.0451509484371, 396.1133939005542, 423.11721631300446, 536.8048533872599, 577.6231691078561
                  ]
                }, 
{
                  label: 'Tabu Search',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.7051153460381143, 1.6342141863699582, 4.4546987310320345, 4.074271974352124, 0, 3.832380137901545, 1.170013000144446, 1.1051930758988016
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 0, 0, 5.7262411882233195, 0, 0, 0
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
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
                },
                ticks: {
                        stepSize: 10
                        
                },
                suggestedMin: 0,
                suggestedMax: 614.1278295605858,
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b7076.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_b7076.resize();
});