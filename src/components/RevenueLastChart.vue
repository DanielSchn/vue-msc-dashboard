<template>
    <div class="chart-container">
      <Line v-if="chartData && chartOptions" :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'RevenueLastChart',
    components: {
      Line
    },
    props: {
      chartData: {
        type: Object,
        required: false,
        default: () => ({
          labels: [
            'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
            'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
            'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'
          ],
          datasets: [
            { label: 'Meta', data: [26.17, 29.08, 29.01, 33.67, 27.91, 28.82, 27.71, 32.17, 28.65, 31.99, 34.15, 40.11], borderColor: '#39DAFF', backgroundColor: '#39DAFF', fill: false, borderWidth: 1 },
            { label: 'Tesla', data: [10.39, 11.96, 13.76, 17.72, 18.76, 16.94, 21.45, 24.32, 32.33, 24.93, 23.35, 25.17], borderColor: '#31BFE2', backgroundColor: '#31BFE2', fill: false, borderWidth: 1 },
            { label: 'Nvidia', data: [3.09, 3.87, 4.73, 5.01, 5.66, 6.51, 7.11, 7.64, 8.29, 6.71, 5.93, 6.05], borderColor: '#29A5C5', fill: false, backgroundColor: '#29A5C5', borderWidth: 1 },
            { label: 'Microsoft', data: [37.15, 43.08, 41.71, 46.15, 45.32, 51.73, 49.36, 51.87, 50.12, 52.75, 52.86, 56.19], borderColor: '#218AA8', backgroundColor: '#218AA8', fill: false, borderWidth: 1 },
            { label: 'Apple', data: [111.44, 89.58, 81.43, 83.36, 123.95, 97.28, 82.96, 90.15, 117.15, 94.84, 81.79, 89.49], borderColor: '#196F8C', backgroundColor: '#196F8C', fill: false, borderWidth: 1 },
            { label: 'Google', data: [55.31, 61.88, 65.12, 75.33, 68.01, 68.69, 68.09, 76.05, 69.79, 74.61, 76.69, 86.31], borderColor: '#11546F', backgroundColor: '#11546F', fill: false, borderWidth: 1 },
            { label: 'Amazon', data: [108.52, 113.08, 110.81, 137.41, 116.44, 121.23, 127.11, 149.21, 127.36, 134.38, 143.08, 168.96], borderColor: '#093A52', backgroundColor: '#093A52', fill: false, borderWidth: 1 }
          ]
        })
      },
      chartOptions: {
        type: Object,
        required: false,
        default: () => ({
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true
              },
              grid: {
                display: true,
                color: '#9E9E9E66'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Revenue (in Billions)'
              },
              beginAtZero: true,
              grid: {
                display: true,
                color: '#9E9E9E66'
              }
            }
          },
          plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    padding: 15,
                    boxWidth: 20
                }
            }
          },
        })
      }
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  </style>
  