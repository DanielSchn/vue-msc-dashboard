<template>
  <div class="head-container">
    <img src="./assets/img/rectangle.png">
    <header>The Magnificent Seven Companies</header>
  </div>
  <div class="card-container">
    <main>
      <section class="row row-one">
        <BaseCard class="main-card">
          <div class="sub-cards">
            <BaseCard class="sub-card" v-for="i in 7" :key="i">
              <h3>SUB CARD {{ i }}</h3>
            </BaseCard>
          </div>
        </BaseCard>
      </section>
      <section class="row row-two">
        <BaseCard class="card-two">
          <h2>CARD TWO</h2>
        </BaseCard>
        <BaseCard class="card-three">
          <h2>CARD THREE</h2>
        </BaseCard>
      </section>
      <section class="row row-three">
        <BaseCard class="card-four">
          <h2>CARD FOUR</h2>
        </BaseCard>
        <BaseCard class="card-five">
          <h2>CARD FIVE</h2>
        </BaseCard>
        <BaseCard class="card-six">
          <h2>CARD SIX</h2>
        </BaseCard>
      </section>



    </main>
  </div>


</template>

<script>
import BaseCard from './components/BaseCard.vue';
// import { stockService } from '@/services/stockService';

export default {
  name: 'App',
  components: {
    BaseCard,
  },
  // async created() {
  //   const stocks = [
  //     '$AAPL',
  //     '$AMZN',
  //     '$GOOG',
  //     '$META',
  //     '$MSFT',
  //     '$NVDA',
  //     '$TSLA'
  //   ];

  //   const stockData = [];



  //   for (const stock of stocks) {
  //     const data = await stockService.fetchData(stock);
  //     const key = `data${stock.substring(1)}`;

  //     if (!stockData[key]) {
  //       stockData[key] = [];
  //     }

  //     stockData[key].push(data);
  //     console.log(`Loaded Data for ${stock}`, data);
  //   }

  //   console.log('Data Stock', stockData);

  //   return stockData;
  // }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Rubik';
  color: #FFFFFF;
}

#app {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  width: 100vw;
  min-height: 100vh;
  padding: 100px;
  box-sizing: border-box;

}

header {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 41px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1440px;
  height: calc(100vh - 245px);
  justify-content: center;
}

.head-container {
  display: flex;
  align-items: center;
  gap: 32px;

  >img {
    height: 32px;
    width: 96px;
  }
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  gap: 32px;
}

.row-one {
  height: 17%;
  width: 100%;
  max-height: 200px;
}

.row-two {
  height: 35%;
  width: 100%;
  max-height: 350px;
}

.row-three {
  height: 26%;
  max-height: 300px;
  width: 100%;
}

.main-card {
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #023A6233 !important;
}

.sub-cards {
  display: flex;
  gap: 16px;
}

.sub-card {
  background: #011F35 !important;
}

.card-two {
  flex-grow: 1;
  flex-basis: 0;
}

.card-three {
  width: 40%;
}

.card-four {
  flex-grow: 1;
  flex-basis: 0;
  max-height: 300px;
}

.card-five {
  width: 20%;
  max-height: 300px;
}

.card-six {
  width: 40%;
  max-height: 300px;
}
</style>
