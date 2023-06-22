
var chart_bestScoreDistributionSummaryChart0_3649e = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_3649e'), {
    type: 'boxplot',
    data: {
        labels: [
            'model_b_1', 'model_b_2', 'model_b_3', 'model_b_4'
        ],
        datasets: [
                {
                    label: 'original',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -23843,
                                    max: -23843,
                                    q1: -23843,
                                    q3: -23843,
                                    median: -23843,
                                    mean: -23843,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18935,
                                    max: -18935,
                                    q1: -18935,
                                    q3: -18935,
                                    median: -18935,
                                    mean: -18935,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -88208,
                                    max: -88208,
                                    q1: -88208,
                                    q3: -88208,
                                    median: -88208,
                                    mean: -88208,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -758148,
                                    max: -758148,
                                    q1: -758148,
                                    q3: -758148,
                                    median: -758148,
                                    mean: -758148,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu Search',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -21176,
                                    max: -21176,
                                    q1: -21176,
                                    q3: -21176,
                                    median: -21176,
                                    mean: -21176,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18418,
                                    max: -18418,
                                    q1: -18418,
                                    q3: -18418,
                                    median: -18418,
                                    mean: -18418,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -87336,
                                    max: -87336,
                                    q1: -87336,
                                    q3: -87336,
                                    median: -87336,
                                    mean: -87336,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -758070,
                                    max: -758070,
                                    q1: -758070,
                                    q3: -758070,
                                    median: -758070,
                                    mean: -758070,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Late Acceptance (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -20571,
                                    max: -20571,
                                    q1: -20571,
                                    q3: -20571,
                                    median: -20571,
                                    mean: -20571,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -13682,
                                    max: -13682,
                                    q1: -13682,
                                    q3: -13682,
                                    median: -13682,
                                    mean: -13682,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -74793,
                                    max: -74793,
                                    q1: -74793,
                                    q3: -74793,
                                    median: -74793,
                                    mean: -74793,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -758096,
                                    max: -758096,
                                    q1: -758096,
                                    q3: -758096,
                                    median: -758096,
                                    mean: -758096,
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
                text: 'Best hard score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
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
  chart_bestScoreDistributionSummaryChart0_3649e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_3649e.resize();
});