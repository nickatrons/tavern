<template>
  <div class="tavern-container container">
    <div class="text-container">
      <span
        class="tavern-text"
      >The nights are long and cold. You take in familiar and stranger alike, and pour them one for the dark nights</span>
    </div>
    <div class="tavern-buttons">
      <button
        class="tavern-button sell-beer-button"
        v-on:click="sellBeer"
      >Pour a beer (Pays {{getState.beerPrice}})</button>
      <div class="tavern-stats">
        <span class="tavern-text">{{getState.coins}} coins in your chest</span>
        <span class="tavern-text">{{getState.soldBeer}} beers sold</span>
      </div>
      <transition name="fade">
        <purchaseButton
          :buttonData="getState.tmaidData"
          v-if="getState.coins >= 5 | getState.tmaidData.count > 0"
          :coins="getState.coins"
          name="Tavern Maiden"
          title="A young maiden from a nearby town asks if you need help in the tavern."
          v-on:purchased="buy(getState.tmaidData)"
        ></purchaseButton>
      </transition>

      <transition name="fade">
        <purchaseButton
          :buttonData="getState.brewerData"
          v-if="getState.tmaidData.count > 0"
          :coins="getState.coins"
          name="Brewer"
          title="A weary traveller offers to teach his peoples ways of brewing and aid you in making your own fine beer."
          v-on:purchased="buy(getState.brewerData)"
        ></purchaseButton>
      </transition>
      <transition name="fade">
        <purchaseButton
          :buttonData="getState.bardData"
          v-if="getState.brewerData.count > 0"
          :coins="getState.coins"
          name="Bard"
          title="The expanding inn attracts a bard from a nearby town. He offers to sing and dance, making your customers even happier"
          v-on:purchased="buy(getState.bardData)"
        ></purchaseButton>
      </transition>
    </div>
    <!-- <div class="tavern-stats">
      <span class="tavern-text" v-if="coins">{{coins}} coins in your chest</span>
      <span class="tavern-text" v-if="tmaid">{{tmaid}} tavern maidens in your tavern</span>
    </div>-->
  </div>
</template>

<script>
// import Brewery from '../components/items/Brewery.vue'
import PurchaseButton from "../components/PurchaseButton.vue";
import { mapGetters } from 'vuex'

// import EventBus from "../main.js"
const dev = true;

let pricesAndTicks = {
  coins: 0,
  beerCost: 1,
  tmaidPrice: dev ? 10 : 30,
  tmaidTicks: dev ? 1000 : 3000,
  brewerPrice: dev ? 10 : 100,
  bardPrice: dev ? 100 : 500,
  bardTicks: dev ? 100 : 500
};

console.log(pricesAndTicks);
export default {
  name: "TavernBody",
  components: {
    // Brewery,
    PurchaseButton
  },
  computed: {
    storedData() {
      return this.$store.getters.getState; 
    },
    ...mapGetters([
      'getState',
            // ...
    ])
  },
  // data() {
  //   // return 
  //   //   // this.$store.state;
  //   //   store.getters.doneTodos
  //     // soldBeer: 0,
  //     // beerPrice: this.$store.state.beerPrice,
  //     // coins: this.$store.state.coins,
  //     // tmaidData: {
  //     //   price: this.$store.state.tmaidPrice,
  //     //   count: 0,
  //     //   name: "tmaid"
  //     // },
  //     // brewerData: {
  //     //   price: pricesAndTicks.brewerPrice,
  //     //   count: 0,
  //     //   name: "brewer"
  //     // },
  //     // bardData: {
  //     //   price: pricesAndTicks.bardPrice,
  //     //   count: 0,
  //     //   name: "bard"
  //     // }
    
  // },
  methods: {
    test() {
      console.log("test method");
    },
    // beerPrices() {
    //   console.log('jaaa',this.beerPrice )
    //   this.beerPrice += 1
    // },
    sellBeer(costs) {
      // let costs = this.getState.beerPrice;
      this.coinCounter(costs);
      // this.emitMethod();
      this.$store.commit('incrementBeers');
      // this.$store.commit('countCoins');

      // return this.getState.soldBeer++;
    },
    coinCounter(costs) {
      // this.getState.coins += costs;
      // this.$globalcoins = this.coins;
      this.$store.commit('countCoins', costs);
      
      console.log(this.$store.state.coins)
      // return (this.coins += costs);
    },
    buy(item) {
      console.log(item.name);
      item.count++;
      this.coinCounter(-item.price);
      item.price += Math.round(item.price * 1.15);
      this.$store.commit('increasePrices', item.name);

      console.log(item.count);
      switch (item.name) {
        case "tmaid":
          setInterval(this.gameLoop, this.getState.tmaidTicks);
          break;
        case "brewer":
          this.$store.commit('increaseBeerPrice');
          break;
        case "bard":
          setInterval(this.gameLoop, this.getState.bardTicks);
            break;
        default:
        // code block
      }
    },
    gameLoop() {
      this.sellBeer();
    }, 
    emitMethod () {
      //  EventBus.$emit('COINS', this.coins);
    }
  },
  mounted() {}
};
</script>

<style scoped lang=scss>
@mixin flexBoxStd {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tavern-container {

  color: white;
  .text-container {
    /* display: flex;
    flex-direction: column; */
    margin: 20px 80px;

    .tavern-text {
      color: white;
      margin: 20px;
    }
  }
  .tavern-stats {
    display: flex;
    flex-direction: column;
  }
  .tavern-buttons {
    margin-bottom: 10px;
    button {
      margin: 5px;
      padding: 5px;
      font-size: 13px;
      font-family: monospace;
      background: lightgrey;
    }
    .button-description {
      /* @include flexBoxStd; */
      margin: 10px;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
