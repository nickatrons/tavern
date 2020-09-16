<template>
  <div class="tavern-container container">
    <div class="text-container">
      <span
        class="tavern-text"
      >The nights are long and cold. You take in familiar and stranger alike, and pour them one for the dark nights</span>
    </div>
    <div class="tavern-buttons">
      <!-- <button
        class="tavern-button sell-beer-button"
        v-on:click="sellBeer"
      >Pour a beer (Pays {{getState.beerPrice}})</button>-->
      <div class="tavern-guests">
        <span class="guests-text">Guests will frequent your tavern</span>
        <span class="guests">
          There's {{getState.guests}} guest<span v-if="getState.guests > 1">s</span> in your tavern waiting for service.
        </span>
        <span class="guests">There's room for {{getState.maxGuests}} guests.</span>
      </div>
      <div class="pour-beer-container">
        <span>Pour a beer (Pays {{getState.beerPrice}})</span>
        <Beerbutton v-on:sellBeer="sellBeer()" />
      </div>

      <div class="tavern-stats">
        <span class="tavern-text">
          {{getState.coins}} coin<span v-if="getState.coins > 1">s</span> in your chest
        </span>
        <span class="tavern-text">{{getState.soldBeer}} beers sold</span>
      </div>
    </div>

    <transition name="fade">
      <purchaseButton
        :buttonData="getState.tmaidData"
        v-if="getState.coins >= 5 | getState.tmaidData.count > 0"
        :coins="getState.coins"
        name="Tavern Maiden"
        title="A young maiden from a nearby town asks if you need help in the tavern. (Each maid sells 1 beer every third second)"
        v-on:purchased="buy(getState.tmaidData)"
      ></purchaseButton>
    </transition>

    <transition name="fade">
      <purchaseButton
        :buttonData="getState.brewerData"
        v-if="getState.tmaidData.count > 0"
        :coins="getState.coins"
        name="Brewer"
        title="A weary traveller offers to teach his peoples ways of brewing and aid you in making your own Tavern Inc. beer. (Increases the price of a beer by 2)"
        v-on:purchased="buy(getState.brewerData)"
      ></purchaseButton>
    </transition>
    <transition name="fade">
      <purchaseButton
        :buttonData="getState.bardData"
        v-if="getState.brewerData.count > 0"
        :coins="getState.coins"
        name="Bard"
        title="The expanding inn attracts a bard from a nearby town. He offers to sing and dance, making your customers even happier! (The tavern sells 2 more beers pr second)"
        v-on:purchased="buy(getState.bardData)"
      ></purchaseButton>
    </transition>
    <!-- <div class="tavern-stats">
      <span class="tavern-text" v-if="coins">{{coins}} coins in your chest</span>
      <span class="tavern-text" v-if="tmaid">{{tmaid}} tavern maidens in your tavern</span>
    </div>-->
  </div>
</template>

<script>
// import Brewery from '../components/items/Brewery.vue'
import PurchaseButton from "../components/PurchaseButton.vue";
import Beerbutton from "../components/tavern/Beerbutton.vue";
import { mapGetters } from "vuex";

// import EventBus from "../main.js"

export default {
  name: "TavernBody",
  components: {
    PurchaseButton,
    Beerbutton
  },
  computed: {
    // storedData() {
    //   return this.$store.getters.getState;
    // },
    ...mapGetters([
      "getState"
      // ...
    ])
  },

  methods: {
    sellBeer() {
      // this.coinCounter(this.getState.beerPrice);
      this.$store.commit("incrementBeers");
      // this.$store.commit("incrementCoins");
    },
    buy(item) {
      this.$store.commit("autoSeller");

      console.log(item.count);
      switch (item.name) {
        case "tmaid":
          this.$store.commit("incrementItem", "tmaidData");
          break;
        case "brewer":
          this.$store.commit("increaseBeerPrices");
          this.$store.commit("incrementItem", "brewer");
          break;
        case "bard":
          // setInterval(this.gameLoop, this.getState.bardTicks);
          break;
        default:
        // code block
      }
    },
    gameLoop() {
      // this.sellBeer();
    },
    emitMethod() {
      //  EventBus.$emit('COINS', this.coins);
    }
  },
  mounted() {},
  destroyed() {
    console.log('hejsa')
  }
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 20px 0 20px;

    button {
      margin: 5px;
      padding: 5px;
      font-size: 13px;
      font-family: monospace;
      background: lightgrey;
    }
    .pour-beer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .tavern-guests,
    .tavern-stats {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
