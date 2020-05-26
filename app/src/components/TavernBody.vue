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
      >Pour a beer (Pays {{beerPrice}})</button>
      <div class="tavern-stats">
        <span class="tavern-text">{{coins}} coins in your chest</span>
        <span class="tavern-text">{{soldBeer}} beers sold</span>
      </div>
      <transition name="fade">
        <purchaseButton
          :buttonData="tmaidData"
          v-if="coins >= 5 | tmaidData.count > 0"
          :coins="coins"
          name="Tavern Maiden"
          title="A young maiden from a nearby town asks if you need help in the tavern."
          v-on:purchased="buy(tmaidData)"
        ></purchaseButton>
      </transition>

      <transition name="fade">
        <purchaseButton
          :buttonData="brewerData"
          v-if="tmaidData.count > 0"
          :coins="coins"
          name="Brewer"
          title="A weary traveller offers to teach his peoples ways of brewing and aid you in making your own fine beer."
          v-on:purchased="buy(brewerData)"
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
const dev = false;

let pricesAndTicks = {
  beerCost: 1,
  tmaidPrice: dev ? 10 : 30,
  tmaidTicks: dev ? 1000 : 3000,
  brewerPrice: dev ? 10 : 50
};

console.log(pricesAndTicks);
export default {
  name: "TavernBody",
  components: {
    // Brewery,
    PurchaseButton
  },
  data() {
    return {
      soldBeer: 0,
      beerPrice: pricesAndTicks.beerCost,
      coins: 0,
      tmaidData: {
        price: pricesAndTicks.tmaidPrice,
        count: 0,
        name: "tmaid"
      },
      brewerData: {
        price: pricesAndTicks.brewerPrice,
        count: 0,
        name: "brewer"
      }
    };
  },
  methods: {
    test() {
      console.log("test method");
    },
    // beerPrices() {
    //   console.log('jaaa',this.beerPrice )
    //   this.beerPrice += 1
    // },
    sellBeer() {
      let costs = this.beerPrice;
      this.coinCounter(costs);
      return this.soldBeer++;
    },
    coinCounter(costs) {
      return (this.coins += costs);
    },
    buy(item) {
      console.log(item.name);
      item.count++;
      this.coinCounter(-item.price);
      item.price += Math.round(item.price * 0.2 * item.count);
      console.log(item.count);
      switch (item.name) {
        case "tmaid":
          setInterval(this.gameLoop, pricesAndTicks.tmaidTicks);
          break;
        case "brewer":
          this.beerPrice++;
          break;
        default:
        // code block
      }
    },
    gameLoop() {
      this.sellBeer();
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
  .sell-beer-button {
    /* margin-top: 10px; */
  }
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
