
var chart_bestScoreDistributionSummaryChart1_45315 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_45315'), {
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
                                    min: -7644173180,
                                    max: -7644173180,
                                    q1: -7644173180,
                                    q3: -7644173180,
                                    median: -7644173180,
                                    mean: -7644173180,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -5181493830,
                                    max: -5181493830,
                                    q1: -5181493830,
                                    q3: -5181493830,
                                    median: -5181493830,
                                    mean: -5181493830,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6336834660,
                                    max: -6336834660,
                                    q1: -6336834660,
                                    q3: -6336834660,
                                    median: -6336834660,
                                    mean: -6336834660,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -9209576380,
                                    max: -9209576380,
                                    q1: -9209576380,
                                    q3: -9209576380,
                                    median: -9209576380,
                                    mean: -9209576380,
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
                                    min: -4421635460,
                                    max: -4421635460,
                                    q1: -4421635460,
                                    q3: -4421635460,
                                    median: -4421635460,
                                    mean: -4421635460,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -1192249751,
                                    max: -1192249751,
                                    q1: -1192249751,
                                    q3: -1192249751,
                                    median: -1192249751,
                                    mean: -1192249751,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -158302820,
                                    max: -158302820,
                                    q1: -158302820,
                                    q3: -158302820,
                                    median: -158302820,
                                    mean: -158302820,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6485340362,
                                    max: -6485340362,
                                    q1: -6485340362,
                                    q3: -6485340362,
                                    median: -6485340362,
                                    mean: -6485340362,
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
                                    min: -6779443540,
                                    max: -6779443540,
                                    q1: -6779443540,
                                    q3: -6779443540,
                                    median: -6779443540,
                                    mean: -6779443540,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -4234091941,
                                    max: -4234091941,
                                    q1: -4234091941,
                                    q3: -4234091941,
                                    median: -4234091941,
                                    mean: -4234091941,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -5109671285,
                                    max: -5109671285,
                                    q1: -5109671285,
                                    q3: -5109671285,
                                    median: -5109671285,
                                    mean: -5109671285,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -8153100179,
                                    max: -8153100179,
                                    q1: -8153100179,
                                    q3: -8153100179,
                                    median: -8153100179,
                                    mean: -8153100179,
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
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
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
  chart_bestScoreDistributionSummaryChart1_45315.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_45315.resize();
});