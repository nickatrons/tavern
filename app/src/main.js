import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import SaveEngine from './engine/saveeng'
import TEngine from './engine/tEngine'
import {Storeconsts} from './engine/storeConstants'

Vue.config.productionTip = false

Vue.use(Vuex)
const saveengine = new SaveEngine;
// const savedData = saveengine.getSave()
console.log(Storeconsts);
// let dev = true;

const store = new Vuex.Store({
  state: Storeconsts,
  getters: {
    getState: state => {
      return state;
    }
  },
  mutations: {
    incrementBeers(state) {
      console.log(state.guests)
      if (state.guests <= state.maxGuests && state.guests > 0) {
        state.soldBeer++
        --state.guests
        state.coins += state.beerPrice
      }
    },
    increaseBeerPrices(state) {
      state.beerPrice++
    },
    incrementItem(state, item) {
      let itemPrice = state[item].price;
      state.coins -= itemPrice
      state[item].price += Math.round(itemPrice * 1.15);
      state[item].count++
    },
    saveGame() {
      // setInterval(saveengine.saver(this.state), 2000)
    },
    // autoSeller(state) {

    //   // gameLoop(state)
    // }
  }
})
const engine = new TEngine(store.getters.getState)
new Vue({
  router,
  store,
  engine,
  render: h => h(App),
}).$mount('#app')
// console.log(store.getters.getState)
setInterval(saveengine.saver(store.getters.getState), 2000)

// let saveTime = setInterval(saveengine.saver(coinsPricesAndTicks), 1000);


// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// const beersSoldPrSecond = function (state) {
//   state.soldBeer += Math.floor(state.tmaidData.count)
//   state.guest -= Math.floor(state.tmaidData.count)
// }
// const coinsPrSecond = function (state) {
//   state.coins += Math.floor(state.beerPrice * state.tmaidData.count)
//   console.log(state.beerPrice)
// }

// const guestCalculator = function () {
//   let guests = store.getters.getState.guests,
//     maxGuests = store.getters.getState.maxGuests;
//   if (guests < maxGuests) {
//     store.getters.getState.guests += Math.round(getRandomArbitrary(1, 3));
//   }
// }

// let custTicker = setInterval(guestCalculator, 1000);

// custTicker;

// /////////-------- TEST 
// function gameLoop(state) {
//   if (isrAFRunning) return;
//   let previous_timestamp = undefined;
//   let partial_ticks = 0;
//   // let tick_duration = tickCounter(state);
//   let tick_duration = 2000;

//   function gameTimer(timestamp) {
//     let time_difference = previous_timestamp ? timestamp - previous_timestamp : tick_duration;
//     previous_timestamp = timestamp;
//     partial_ticks += time_difference;
//     // let iterations = 0;
//     tick_duration = 2000 / state.tmaidData.count;

//     // let updated_ui_values = {};
//     while (partial_ticks > tick_duration) {
//       partial_ticks -= tick_duration;
//       // performOneTick(updated_ui_values);
//       // performOneTick(updated_ui_values);
//       // store.getters.mutations.incrementBeers();
//       store.commit("incrementBeers");

//       if (state.guests > 0) {

//         beersSoldPrSecond(state);
//         coinsPrSecond(state)
//       }


//       guestCalculator(state)
//       // state.coins += state.beerPrice * state.tmaidData.count
//     }

//     // Then use updated_ui_values to decide exactly what needs to be changed
//     // This logic is obviously very game-specific

//     requestAnimationFrame(gameTimer);
//   }
//   requestAnimationFrame(gameTimer);
//   isrAFRunning = true;
// }


