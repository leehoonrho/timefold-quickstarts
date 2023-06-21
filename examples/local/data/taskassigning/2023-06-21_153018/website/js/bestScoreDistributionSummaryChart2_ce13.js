
var chart_bestScoreDistributionSummaryChart2_ce13 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart2_ce13'), {
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
                                    min: -22133498,
                                    max: -22133498,
                                    q1: -22133498,
                                    q3: -22133498,
                                    median: -22133498,
                                    mean: -22133498,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -836426,
                                    max: -836426,
                                    q1: -836426,
                                    q3: -836426,
                                    median: -836426,
                                    mean: -836426,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -58314624,
                                    max: -58314624,
                                    q1: -58314624,
                                    q3: -58314624,
                                    median: -58314624,
                                    mean: -58314624,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6293940,
                                    max: -6293940,
                                    q1: -6293940,
                                    q3: -6293940,
                                    median: -6293940,
                                    mean: -6293940,
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
                text: 'Best soft 1 score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft 1 score'
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
  chart_bestScoreDistributionSummaryChart2_ce13.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart2_ce13.resize();
});