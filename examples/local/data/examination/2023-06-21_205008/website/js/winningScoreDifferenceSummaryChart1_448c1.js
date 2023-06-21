
var chart_winningScoreDifferenceSummaryChart1_448c1 = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_448c1'), {
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
                    -132800, -34500, -861400, -222900, -212700, -349500, 281700, -196800
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -278200, -26400, -87700, 750400, -257500, -32500, 562600, -1848700
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -265400, -25600, -73300, 750400, -257200, -8000, 557100, -1849800
                  ]
                }, 
{
                  label: 'Tabu Search',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 1267200, 0, -284000, 608500, 0
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -221300, -89300, -2696800, 0, -7400, 0, 0, -446900
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
                text: 'Winning soft score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning soft score difference'
                },
                ticks: {
                        stepSize: 100000
                        
                },
                suggestedMin: -2696800,
                suggestedMax: 1267200,
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
  chart_winningScoreDifferenceSummaryChart1_448c1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_448c1.resize();
});