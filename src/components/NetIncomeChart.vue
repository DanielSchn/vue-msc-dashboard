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
          Apple: { netIncome: 50 },
          Amazon: { netIncome: 30 },
          Google: { netIncome: 70 },
          Meta: { netIncome: 45 },
          Microsoft: { netIncome: 60 },
          Nvidia: { netIncome: 55 },
          Tesla: { netIncome: 35 }
        })
      }
    },
    computed: {
      chartData() {
        const labels = Object.keys(this.stockData);
        const data = labels.map(label => this.stockData[label].netIncome || 0);
        return {
          labels,
          datasets: [
            {
              label: 'Net Income',
              backgroundColor: '#f87979',
              data
            }
          ]
        };
      },
      chartOptions() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              max: 100,
            },
          },
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
  