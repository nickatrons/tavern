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
// let coinsPricesAndTicks = {
//   coins: savedData ? savedData.coins : 0,
//   beerCost: 1,
//   tmaidPrice: dev ? 10 : 30,
//   tmaidTicks: dev ? 1000 : 3000,
//   brewerPrice: dev ? 10 : 100,
//   bardPrice: dev ? 100 : 500,
//   bardTicks: dev ? 100 : 500
// };
function beersSoldprSecond() {
  return 1000; 
}
let dev = true;

const store = new Vuex.Store({
  state: {
    coins: savedData ? savedData.coins : 0,
    soldBeer: savedData ? savedData.soldBeer : 0,
    beerPrice: savedData ? savedData.beerPrice : 1,
    tmaidData: {
      price: savedData ? savedData.tmaidData.price : dev ? 10 : 30,
      count: savedData ? savedData.tmaidData.count : 0,
      name: "tmaid"
    },
    brewerData: {
      price: savedData ? savedData.brewerData.price : dev ? 10 : 100,
      count: savedData ? savedData.brewerData.count : 0,
      name: "brewer"
    },
    bardData: {
      price: savedData ? savedData.bardData.price : dev ? 100 : 500,
      count: savedData ? savedData.bardData.count : 0,
      name: "bard"
    },
    gametick: beersSoldprSecond()
  },
  getters: {
    getState: state => {
      return state;
    }
  },
  mutations: {
    countCoins (state, costs) {
      state.coins += costs
      // coinsPricesAndTicks.coins = state.coins;
      // saveengine.saver(this.state);
      // setInterval()
      gameLoop(state)

    },
    incrementBeers (state) {
      state.soldBeer++
    },
    // increaseBeerPrice (state) {
    //   state.beerPrice++
    // }, 
    increasePrices (state, item) {
      console.log(state, item)
    },
    incrementItem (state, item) {
      state+'.'+item
    },
    saveGame () {
      // setInterval(saveengine.saver(this.state), 2000)
    },
    autoSeller (state) {
      gameLoop(state)
      // this.coinCounter(this.getState.beerPrice);
      // this.$store.commit('incrementBeers');
    }
  }
})
console.log(store.getters.getState)
setInterval(saveengine.saver(store.getters.getState), 2000)

// let saveTime = setInterval(saveengine.saver(coinsPricesAndTicks), 1000);

new Vue({
  router,
  // saveTime,
  store,
  render: h => h(App),
}).$mount('#app')


Vue.prototype.$globalcoins;
let isrAFRunning = false;

/////////-------- TEST 
function gameLoop(state) {
  if (isrAFRunning) return;
  let previous_timestamp = undefined;
  let partial_ticks = 0;
  let tick_duration = 1000;

  function gameTimer(timestamp) {
      let time_difference = previous_timestamp? timestamp - previous_timestamp : tick_duration;
      previous_timestamp = timestamp;
      partial_ticks += time_difference;
      
      // let iterations = 0;
      // let updated_ui_values = {};
      while(partial_ticks > tick_duration) {
        console.log(partial_ticks)
          partial_ticks  -= tick_duration;
          // performOneTick(updated_ui_values);
          state.coins += state.beerPrice * state.tmaidData.count
          console.log('hej2', partial_ticks, tick_duration)
      }
      
      // Then use updated_ui_values to decide exactly what needs to be changed
      // This logic is obviously very game-specific
      
      requestAnimationFrame(gameTimer);
    }
  requestAnimationFrame(gameTimer);
  isrAFRunning = true; 
}


// function gameLoop (state) {
//   const player = {
//     lastTime : Date.now(),
//     coins : state.coins,
//   }
  
//   setInterval(mainLoop, 100);
  
//   function mainLoop() {
//     const elapsedTime = Date.now() - player.lastTime;
//     manager.addTime(elapsedTime);
//     console.log('main', elapsedTime)
//   }
  
//   const manager = {
//     count : 1,
//     time : 0,
//     baseCost : 5,
//     multplier : 3,
//     addTime(t) {
//        this.time += t;
//        while (this.time > this.interval()) {
//          console.log('while', this.time)
//           this.time -= this.interval();
//           console.log(this.time)
//           state.coins += this.count
//           // state.coins += this.count * (t / 1000)
//           this.addCoins();
//        }
//     },
//     interval() {
//        return 1000;
//     },
//     addCoins() {
//       //  state.coins += this.count * (player.lastTime / 1000)
//     },
//     // purchase() {
//     //    if (player.coins < this.cost()) return;
//     //    this.count += 1;
//     // },
//     // cost() {
//     //    return Math.floor(this.baseCost * Math.pow(this.multiplier,this.count));
//     // }
//   }
// }
// const player = {
//   lastTime : Date.now(),
//   cookies : 0,
// }

// setInterval(mainLoop, 100);

// function mainLoop() {
//   const elapsedTime = Date.now()-player.lastTime;
//   GrandmaManager.addTime(elapsedTime);
//   console.log('main', elapsedTime)
// }

// const GrandmaManager = {
//   count : 0,
//   time : 0,
//   baseCost : 5,
//   multplier : 3,
//   addTime(t) {
//      this.time += t;
//      while (this.time > this.interval()) {
//        console.log('while', this.time)
//         this.time -= this.interval();
//         console.log(this.time)
//         this.addCookies();
//      }
//   },
//   interval() {
//      return 1000;
//   },
//   addCookies() {
//      player.cookies += this.count
//   },
//   purchase() {
//      if (player.cookies < this.cost()) return;
//      this.count += 1;
//   },
//   cost() {
//      return Math.floor(this.baseCost * Math.pow(this.multiplier,this.count));
//   }
// }
// let time;
// function draw() {
//     requestAnimationFrame(draw);
//     var now = new Date().getTime(),
//         dt = now - (time || now);
 
//     time = now;


 
//     // Drawing code goes here... for example updating an 'x' position:
//     console.log(10+dt)
//     // this.x += 10 * dt; // Increase 'x' by 10 units per millisecond
// }
// draw()

// let deltaTime = Date.now()
// setInterval(gameLoop, 30);
// console.log(deltaTime)

// function gameLoop() {
//    let elapsedTime = Date.now() - deltaTime;
//    deltaTime = Date.now();
//    console.log(elapsedTime)
//    while (elapsedTime > 1000) {
//      console.log('ja')
//       elapsedTime -= 1000;
//       // performGameFunction();
//    }
// }

// const EventBus = new Vue();
// export default EventBus;