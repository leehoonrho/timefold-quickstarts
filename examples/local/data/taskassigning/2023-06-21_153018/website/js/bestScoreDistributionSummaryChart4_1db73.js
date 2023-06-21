
var chart_bestScoreDistributionSummaryChart4_1db73 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart4_1db73'), {
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
                                    min: -65802,
                                    max: -65802,
                                    q1: -65802,
                                    q3: -65802,
                                    median: -65802,
                                    mean: -65802,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3203,
                                    max: -3203,
                                    q1: -3203,
                                    q3: -3203,
                                    median: -3203,
                                    mean: -3203,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -235118,
                                    max: -235118,
                                    q1: -235118,
                                    q3: -235118,
                                    median: -235118,
                                    mean: -235118,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -20463,
                                    max: -20463,
                                    q1: -20463,
                                    q3: -20463,
                                    median: -20463,
                                    mean: -20463,
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
                text: 'Best soft 3 score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft 3 score'
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
  chart_bestScoreDistributionSummaryChart4_1db73.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart4_1db73.resize();
});