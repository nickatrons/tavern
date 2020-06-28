import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import SaveEngine from './engine/saveeng'

// import TEngine from 'engine/tEngine.js'

Vue.config.productionTip = false

// const TavernEngine = new TEngine();
Vue.use(Vuex)
let dev = true;
let coinsPricesAndTicks = {
  coins: 0,
  beerCost: 1,
  tmaidPrice: dev ? 10 : 30,
  tmaidTicks: dev ? 1000 : 3000,
  brewerPrice: dev ? 10 : 100,
  bardPrice: dev ? 100 : 500,
  bardTicks: dev ? 100 : 500
};
const saveengine = new SaveEngine;
// console.log(saveengine.saver(coinsPricesAndTicks))
console.log(saveengine.getSave())
const store = new Vuex.Store({
  state: {
    coins: 0,
    beerPrize: 1
  },
  mutations: {
    incrementCoins (state) {
      state.coins++
      coinsPricesAndTicks.coins = state.coins;
    }
  }
})
let saveTime = setInterval(saveengine.saver(coinsPricesAndTicks), 1000);

console.log(store.state.coins)

new Vue({
  router,
  saveTime,
  store,
  render: h => h(App),
}).$mount('#app')


Vue.prototype.$globalcoins;



// const EventBus = new Vue();
// export default EventBus;