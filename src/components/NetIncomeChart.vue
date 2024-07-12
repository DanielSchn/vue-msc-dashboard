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
  name: 'NetIncomeChart',
  components: {
    Bar
  },
  props: {
    stockData: {
      type: Object,
      required: true,
      default: () => ({
        Apple: { netIncome: 22.96 },
        Amazon: { netIncome: 10.62 },
        Google: { netIncome: 20.69 },
        Meta: { netIncome: 14.02 },
        Microsoft: { netIncome: 20.09 },
        Nvidia: { netIncome: 1.42 },
        Tesla: { netIncome: 7.93 }
      })
    }
  },
  computed: {
    chartData() {
      const labels = Object.keys(this.stockData);
      const data = labels.map(label => this.stockData[label].netIncome || 0);

      // Sortiere Labels und Daten entsprechend den netIncome-Werten (absteigend)
      labels.sort((a, b) => this.stockData[b].netIncome - this.stockData[a].netIncome);
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
            borderWidth: 1.5,
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
              callback: function(value) {
                if (value % 20 === 0 || value === 0 || value === 100) {
                  return value.toString(); // Zeigt 0, 20, 40, 60, 80, 100
                } else {
                  return ''; // Versteckt alle anderen Werte
                }
              }
            },
            grid: {
              display: true, // Grid für die x-Achse anzeigen
              color: '#9E9E9E'
            }
          },
          y: {
            stacked: true,
            grid: {
              display: true, // Grid für die y-Achse anzeigen
              color: '#9E9E9E' // Farbe des Grids
            }
          }
        },
        plugins: {
          legend: {
            display: false // Legende ausblenden
          }
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
