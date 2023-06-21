
var chart_bestScoreScalabilitySummaryChart2_77c74 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart2_77c74'), {
    type: 'line',
    data: {
        labels: [
            768, 2750, 10500, 260000
        ],
        datasets: [
            {
                  label: 'Late Acceptance (favorite)',
                    borderWidth: 4
,
                  data: [
                    -836426, -6293940, -22133498, -58314624
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
                text: 'Best soft 1 score scalability summary (higher is better)'
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
                        stepSize: 1000
                        
                },
                suggestedMin: 0,
                suggestedMax: 260000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft 1 score'
                },
                ticks: {
                        stepSize: 1000000
                        
                },
                suggestedMin: -58314624,
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
  chart_bestScoreScalabilitySummaryChart2_77c74.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart2_77c74.resize();
});
