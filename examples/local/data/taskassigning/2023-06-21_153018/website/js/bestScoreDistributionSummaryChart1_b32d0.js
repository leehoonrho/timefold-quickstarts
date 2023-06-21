
var chart_bestScoreDistributionSummaryChart1_b32d0 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_b32d0'), {
    type: 'boxplot',
    data: {
        labels: [
            '100tasks-5employees', '24tasks-8employees', '500tasks-20employees', '50tasks-5employees'
        ],
        datasets: [
                {
                    label: 'Late Acceptance (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -8057,
                                    max: -8057,
                                    q1: -8057,
                                    q3: -8057,
                                    median: -8057,
                                    mean: -8057,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -494,
                                    max: -494,
                                    q1: -494,
                                    q3: -494,
                                    median: -494,
                                    mean: -494,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -48146,
                                    max: -48146,
                                    q1: -48146,
                                    q3: -48146,
                                    median: -48146,
                                    mean: -48146,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3925,
                                    max: -3925,
                                    q1: -3925,
                                    q3: -3925,
                                    median: -3925,
                                    mean: -3925,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft 0 score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft 0 score'
                },
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
  chart_bestScoreDistributionSummaryChart1_b32d0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_b32d0.resize();
});