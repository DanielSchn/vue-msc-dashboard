<template>
  <div class="head-container">
    <img src="./assets/img/rectangle.png">
    <header>The Magnificent Seven Companies</header>
  </div>
  <div class="card-container">
    <main>
      <section class="row row-one">
        <BaseCard class="main-card">
          <div ref="subCardsContainer" class="sub-cards">
            <BaseCard class="sub-card" v-for="(stock, index) in stocks" :key="index">
              <div class="sub-card-head">
                <img :src="stock.image" :alt="stock.name">
                <h3>{{ stock.name }}</h3>
              </div>
              <span>Revenue Q4 2023</span>
              <div class="sub-card-values">
                <h2>{{ formatNumber(getStockValue(stock.symbol, 0)) }}</h2>
                <div>
                  <p :class="getClass(getStockValue(stock.symbol, 2))">
                    {{ formatNumber(getStockValue(stock.symbol, 2)) }}
                    <template v-if="getStockValue(stock.symbol, 2) >= 0">&uarr;</template>
                    <template v-else>&darr;</template>
                  </p>
                  <p :class="getClass(getStockValue(stock.symbol, 1))">
                    {{ getStockValue(stock.symbol, 1).toFixed(2) }}%
                  </p>
                </div>
              </div>
              <footer>in Bill USD</footer>

            </BaseCard>

          </div>
          <img @click="scrollSubCards('right')" class="button-img-right" src="./assets/img/button.png">
          <img @click="scrollSubCards('left')" class="button-img-left" src="./assets/img/button.png">
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
import { stockService } from '@/services/stockService';
import AAPLImage from './assets/img/$AAPL.png';
import AMZNImage from './assets/img/$AMZN.png';
import GOOGImage from './assets/img/$GOOG.png';
import METAImage from './assets/img/$META.png';
import MSFTImage from './assets/img/$MSFT.png';
import NVDAImage from './assets/img/$NVDA.png';
import TSLAImage from './assets/img/$TSLA.png';

export default {
  data() {
    return {
      stocks: [
        { symbol: '$AAPL', name: 'Apple', image: AAPLImage },
        { symbol: '$AMZN', name: 'Amazon', image: AMZNImage },
        { symbol: '$GOOG', name: 'Google', image: GOOGImage },
        { symbol: '$META', name: 'Meta', image: METAImage },
        { symbol: '$MSFT', name: 'Microsoft', image: MSFTImage },
        { symbol: '$NVDA', name: 'Nvidia', image: NVDAImage },
        { symbol: '$TSLA', name: 'Tesla', image: TSLAImage }
      ],
      stockData: {}
    };
  },
  name: 'App',
  components: {
    BaseCard,
  },
  async created() {
    // await this.loadStockData();
  },
  methods: {
    async loadStockData() {
      for (const stock of this.stocks) {
        const data = await stockService.fetchData(stock.symbol);
        const key = `data${stock.symbol.substring(1)}`;

        if (!this.stockData[key]) {
          this.stockData[key] = [];
        }

        this.stockData[key] = data;
        console.log(`Loaded Data for ${stock.symbol}`, data);
      }

      console.log('Data Stock', this.stockData);
    },
    getStockValue(symbol, index) {
      const key = `data${symbol.substring(1)}`;
      const data = this.stockData[key];
      if (!data || !data[index]) {
        return 0;
      }
      const value = data[index]['3Q23'];
      const numericValue = typeof value === 'string' ? parseFloat(value) : value;
      const roundedValue = parseFloat(numericValue.toFixed(2));
      return roundedValue;
    },
    formatNumber(num) {
      return (num / 1000).toFixed(2);
    },
    getClass(value) {
      return value >= 0 ? 'positive' : 'negative';
    },
    scrollSubCards(value) {
      const subCardsContainer = this.$refs.subCardsContainer;
      if (subCardsContainer && value == 'right') {
        subCardsContainer.scrollLeft += 100;
      } else {
        subCardsContainer.scrollLeft -= 100;
      }
    }
  },
};
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
  width: 100%;
  max-width: 1440px;
  height: calc(100vh - 245px);
  justify-content: center;
}

.sub-cards::-webkit-scrollbar {
  display: none;
}

.button-img-right {
  display: none;
  height: 32px;
  width: 32px;
  position: absolute;
  right: -16px;
  bottom: 80px;
}

.button-img-left {
  display: none;
  height: 32px;
  width: 32px;
  position: absolute;
  left: -16px;
  bottom: 87px;
  transform: rotate(180deg);
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
  width: 100%;
  display: flex;
  gap: 32px;
}

.row-one,
.row-two,
.row-three {
  display: flex;
}

.row-one {
  height: 17%;
  min-height: 190px;
  max-height: 200px;
}

.row-two {
  height: 35%;
  /* width: 100%; */
  max-height: 350px;
}

.row-three {
  height: 26%;
  max-height: 300px;
  /* width: 100%; */
}

.main-card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #023A6233 !important;
}

.sub-cards {
  display: flex;
  gap: 16px;
  overflow-x: auto;
}

.sub-card {
  background: #011F35 !important;
  min-width: 175px;
  /* min-height: 190px; */

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }

  span {
    font-size: 12px;
    font-weight: 400;
  }

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }

  footer {
    font-size: 8px;
    font-weight: 400;
  }
}

.sub-card-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sub-card-values {
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    margin: 0;
  }
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

.positive {
  color: #3BA752;
}

.negative {
  color: #C41C1C;
}

@media screen and (max-width: 1570px) {
  .button-img-right, .button-img-left {
    display: unset;
  }
}
</style>
