import {
    Chart,
    Colors,
    BubbleController,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
  } from 'chart.js'
  
  Chart.register(
    Colors,
    BubbleController,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend
  );
  
  import { Chart } from 'chart.js/auto'
  
  (async function() {
    const data = [
      { solver: "SAT", reussite: 43 },
      { solver: "UNSAT", reussite: 23 },
      { solver: "UNKNOWN", reussite: 6 },
    ];
  
    new Chart(
      document.getElementById('pie'),
      {
        type: 'pie',
        data: {
          labels: data.map(row => row.solver),
          datasets: [
            {
              label: '',
              data: data.map(row => row.reussite),
              hoverOffset: data.map(row => row.reussite)
            }
          ]
        }
      }
    );
  })();
