import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import SaveEngine from './engine/saveeng'

// import TEngine from 'engine/tEngine.js'

Vue.config.productionTip = false

// const TavernEngine = new TEngine();
Vue.use(Vuex)
const saveengine = new SaveEngine;
// console.log(saveengine.saver(coinsPricesAndTicks))
const savedData = saveengine.getSave()
console.log(savedData)
let dev = true;
// let coinsPricesAndTicks = {
//   coins: savedData ? savedData.coins : 0,
//   beerCost: 1,
//   tmaidPrice: dev ? 10 : 30,
//   tmaidTicks: dev ? 1000 : 3000,
//   brewerPrice: dev ? 10 : 100,
//   bardPrice: dev ? 100 : 500,
//   bardTicks: dev ? 100 : 500
// };

const store = new Vuex.Store({
  state: {
    coins: savedData ? savedData.coins : 0,
    soldBeer: savedData ? savedData.soldBeer : 0,
    beerPrice: savedData ? savedData.beerPrice : 1,
    tmaidData: {
      price: savedData ? savedData.tmaidData.price : 30,
      count: savedData ? savedData.tmaidData.count : 0,
      name: "tmaid"
    },
    brewerData: {
      price: savedData ? savedData.brewerData.price : 100,
      count: savedData ? savedData.brewerData.count : 0,
      name: "brewer"
    },
    bardData: {
      price: savedData ? savedData.bardData.price : 500,
      count: savedData ? savedData.bardData.count : 0,
      name: "bard"
    },
    tmaidPrice: dev ? 10 : 30,
    tmaidTicks: dev ? 1000 : 3000,
    brewerPrice: dev ? 10 : 100,
    bardPrice: dev ? 100 : 500,
    bardTicks: dev ? 100 : 500
  },
  getters: {
    getState: state => {
      return state;
    }
  },
  mutations: {
    countCoins (state) {
      state.coins += state.beerPrice
      // coinsPricesAndTicks.coins = state.coins;
      saveengine.saver(this.state);
    },
    incrementBeers (state) {
      state.soldBeer++
    },
    increaseBeerPrice (state) {
      state.beerPrice++
    }, 
    increasePrices (state, item) {
      console.log(state, item)
    }

  }
})
// let saveTime = setInterval(saveengine.saver(coinsPricesAndTicks), 1000);

new Vue({
  router,
  // saveTime,
  store,
  render: h => h(App),
}).$mount('#app')


Vue.prototype.$globalcoins;



// const EventBus = new Vue();
// export default EventBus;