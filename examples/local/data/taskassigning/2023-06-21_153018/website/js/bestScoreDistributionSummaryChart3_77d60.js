
var chart_bestScoreDistributionSummaryChart3_77d60 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart3_77d60'), {
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
                                    min: -34832,
                                    max: -34832,
                                    q1: -34832,
                                    q3: -34832,
                                    median: -34832,
                                    mean: -34832,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -1909,
                                    max: -1909,
                                    q1: -1909,
                                    q3: -1909,
                                    median: -1909,
                                    mean: -1909,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -135422,
                                    max: -135422,
                                    q1: -135422,
                                    q3: -135422,
                                    median: -135422,
                                    mean: -135422,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7772,
                                    max: -7772,
                                    q1: -7772,
                                    q3: -7772,
                                    median: -7772,
                                    mean: -7772,
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
                text: 'Best soft 2 score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft 2 score'
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
  chart_bestScoreDistributionSummaryChart3_77d60.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart3_77d60.resize();
});