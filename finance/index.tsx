import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function finance() {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;

    let chartStatus = Chart.getChart('myChart');
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    if (ctx !== null) {
      const chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Research Funding', 'Dev funding', 'Food', 'Merchandise', 'Other'],
          datasets: [
            {
              label: '% of Budget',
              data: [12, 19, 3, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 05)',
                'rgba(255, 159, 64, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Estimated Budget',
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="container h-96">
      <canvas ref={canvas}></canvas>
    </div>
  );
}
