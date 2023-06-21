
var chart_scoreCalculationSpeedSummaryChart_70f9c = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_70f9c'), {
    type: 'line',
    data: {
        labels: [
            5653, 28816, 126300, 228704, 379560, 1299795, 1486272, 1697556
        ],
        datasets: [
            {
                  label: 'First Fit',
                    borderWidth: 1
                  ,
                  data: [
                    44886, 97847, 150138, 37536, 107262, 90715, 75563, 76533
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    41627, 89940, 160522, 39672, 101384, 88356, 76305, 77738
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                    borderWidth: 1
                  ,
                  data: [
                    31220, 97870, 131604, 39763, 101779, 88172, 78061, 77609
                  ]
                }, 
{
                  label: 'Tabu Search',
                    borderWidth: 1
                  ,
                  data: [
                    7791, 19426, 26527, 9126, 15186, 14008, 11771, 20461
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                    borderWidth: 4
,
                  data: [
                    7486, 18709, 28046, 8973, 15020, 13846, 11269, 20132
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
                text: 'Score calculation speed summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 10000
                        
                },
                suggestedMin: 0,
                suggestedMax: 1697556,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Score calculation speed per second'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                suggestedMin: 0,
                suggestedMax: 160522,
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
  chart_scoreCalculationSpeedSummaryChart_70f9c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_70f9c.resize();
});
