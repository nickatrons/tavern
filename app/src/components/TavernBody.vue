<template>
  <div class="tavern-container container">
    <!-- <div class="counter" v-text="this.test()"></div> -->
    <div class="text-container">
      <span class="tavern-text">
          The nights are long and cold. You take in familiar and stranger alike, and pour them one for the dark nights
          </span>
      <span class="tavern-text" v-if="soldBeer">{{soldBeer}} sold</span>
    </div>
    <button class="tavern-button sell-beer-button" v-on:click="sellBeer">Pour a beer</button>
    <button class="tavern-button hire-button" v-if="coins > tmaidPrice" v-on:click="hire('tmaid')">Hire a tavern maid to help run the business</button>
    <div class="tavern-stats">
        <span class="tavern-text" v-if="coins">{{coins}} coins in your chest</span>
        <span class="tavern-text" v-if="tmaid">{{tmaid}} tavern maidens in your tavern</span>
    </div>
  </div>
</template>

<script>
// import TEngine from "@/engine/tEngine.js";
// const TavEng = new TEngine();
const dev = true;

const pricesAndTicks = {
    tmaidPrice: dev ? 10 : 50,
    tmaidTicks: dev ? 1000 : 5000,

}

console.log(pricesAndTicks);
export default {
  name: "TavernBody",
  data() {
    return {
      soldBeer: 0,
      coins: 0,
      tmaid: 0,
      tmaidPrice: pricesAndTicks.tmaidPrice
    };
  },
  methods: {
    sellBeer() {
        let beerCost = 1;
        console.log(beerCost)
        this.coinCounter(beerCost);
        // return this.soldBeer++ * (1 + this.tmaid);
        return this.soldBeer++;
    },
    coinCounter(costs) {
        return this.coins += costs;
    },
    hire(worker) {
        console.log(this.tmaid)
        if (worker === 'tmaid') {
            this.coinCounter(-this.tmaidPrice);
            setInterval(this.gameLoop, pricesAndTicks.tmaidTicks);
            return this.tmaid++
        }
    },
    gameLoop () {
        this.sellBeer()
    }
  },
  mounted () {
  },
};
</script>

<style scoped lang=scss>
.tavern-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  .sell-beer-button {
    /* margin-top: 10px; */
  }
  .text-container {
      display: flex;
      flex-direction: column;
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
}
</style>
