<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'GrossMarginChart',
  components: {
    Bar
  },
  props: {
    stockData: {
      type: Object,
      required: true,
      default: () => ({
        Apple: { grossMargin: 45.2 },
        Amazon: { grossMargin: 45.5 },
        Google: { grossMargin: 56.5 },
        Meta: { grossMargin: 80.8 },
        Microsoft: { grossMargin: 70.1 },
        Nvidia: { grossMargin: 63.3 },
        Tesla: { grossMargin: 17.6 }
      })
    }
  },
  computed: {
    chartData() {
      const labels = Object.keys(this.stockData);
      const data = labels.map(label => this.stockData[label].grossMargin || 0);

      labels.sort((a, b) => this.stockData[b].grossMargin - this.stockData[a].grossMargin);
      data.sort((a, b) => b - a);

      // Festgelegte Farben in der gewünschten Reihenfolge
      const colors = ['#39DAFF', '#31BFE2', '#29A5C5', '#218AA8', '#196F8C', '#11546F', '#093A52'];

      // Mapping der Farben zu den Labels
      const backgroundColors = labels.map((label, index) => colors[index]);

      return {
        labels,
        datasets: [
          {
            backgroundColor: backgroundColors,
            borderColor: '#FFFFFF', // Weißer Rand um die Balken
            borderWidth: 0,
            data
          }
        ]
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y', // Hier setzen wir die Achse auf y, um horizontale Balken zu erzeugen
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            min: 0, // Mindestwert für die x-Achse
            ticks: {
              stepSize: 10, // Schritte auf der x-Achse
              callback: function() {
                  return '';
              }
            },
            grid: {
              display: true, // Grid für die x-Achse anzeigen
              color: '#9E9E9E66',
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0
            }
          },
          y: {
            stacked: true,
            grid: {
              display: true, // Grid für die y-Achse anzeigen
              color: '#9E9E9E66', // Farbe des Grids
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false // Legende ausblenden
          },
          // afterDraw: function(chart) {
          //   const ctx = chart.ctx;
          //   chart.data.datasets.forEach((dataset) => {
          //     chart.data.labels.forEach((label, j) => {
          //       const x = chart.scales['x'].getCenterPoint(j);
          //       const y = chart.scales['y'].getPixelForValue(dataset.data[j]);

          //       // Position the label next to the bar (adjust offsets as needed)
          //       ctx.fillText(label, x + 10, y + 5);

          //       // Style the label text (optional)
          //       ctx.fillStyle = '#333'; // Text color
          //       ctx.font = '12px Arial'; // Font style
          //     });
          //   });
          // }
        }
      };
    }
  }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
