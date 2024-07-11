<template>
  <BaseCard>
    <h2>Card Title</h2>
    <p>This is some content inside the card.</p>
  </BaseCard>
  <BaseCard>
    <h2>Another Card</h2>
    <p>Different content in another card.</p>
  </BaseCard>
</template>

<script>
import BaseCard from './components/BaseCard.vue';
import { stockService } from '@/services/stockService';

export default {
  name: 'App',
  components: {
    BaseCard,
  },
  async created() {
    const stocks = [
      '$AAPL',
      '$AMZN',
      '$GOOG',
      '$META',
      '$MSFT',
      '$NVDA',
      '$TSLA'
    ];

    const stockData = [];



    for (const stock of stocks) {
      const data = await stockService.fetchData(stock);
      const key = `data${stock.substring(1)}`;

      if (!stockData[key]) {
        stockData[key] = [];
      }

      stockData[key].push(data);
      console.log(`Loaded Data for ${stock}`, data);
    }

    console.log('Data Stock', stockData);

    return stockData;
  }
}
</script>

<style>
body {
  margin: 0;

}

#app {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  width: 100vw;
  min-height: 100vh;
  padding: 100px;
  box-sizing: border-box;
}
</style>
