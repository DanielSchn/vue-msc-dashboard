<template>
    <div class="chart-container">
      <Doughnut v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'RevenueDoughnutChart',
    components: {
      Doughnut
    },
    props: {
      chartData: {
        type: Object,
        required: false,
        default: () => ({
          labels: ['Meta 40.11', 'Tesla 25.17', 'Nvidia 6.05', 'Microsoft 56.19', 'Apple 89.49', 'Google 86.31', 'Amazon 168.96'],
          datasets: [{
            data: [40.11, 25.17, 6.05, 56.19, 89.49, 86.31, 168.96],
            backgroundColor: ['#39DAFF', '#31BFE2', '#29A5C5', '#218AA8', '#196F8C', '#11546F', '#093A52'],
            borderWidth: 1,
            // borderColor: '#FFFFFF'
            borderColor: ['#39DAFF', '#31BFE2', '#29A5C5', '#218AA8', '#196F8C', '#11546F', '#093A52'],
          }]
        })
      },
      chartOptions: {
        type: Object,
        required: false,
        default: () => ({
          responsive: true,
          maintainAspectRatio: false,
        //   cutout: '80%',
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
          elements: {
            arc: {
                // borderColor: ['#39DAFF', '#31BFE2', '#29A5C5', '#218AA8', '#196F8C', '#11546F', '#093A52'],
            }
          }
        })
      }
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    padding-top: 8px;
    position: relative;
    width: 100%;
    height: 90%;
  }
  </style>
  