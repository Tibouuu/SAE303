/* import { Chart } from "chart.js/auto";
import { results } from "data.json";

(async function() {
    const data = results;
    const puzzletype = data.map(function(puzzle){return puzzle.family});
    const datared = puzzletype.reduce((accumulator, value)=>{accumulator[value]= ++accumulator[value] || 1;
    return accumulator;},{});
    

    new Chart(
      document.getElementById('pie'),
      {
        type: 'pie',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count),
              hoverOffset: 60
            }
          ]
        }
      }
    );
  })(); */