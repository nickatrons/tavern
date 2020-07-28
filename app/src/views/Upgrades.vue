 <template>
  <div class="upgrades-container">
    <div class="upgrades-description">
      <div class="tavern-text">Small items or big, all can help you come a long way in this world</div>
      <div class="tavern-text">You have {{coins}} coins to spend!</div>
      <UpgradeButton
        :buttonData="bardData"
        :coins="coins"
        name="Bard"
      >
      Carl the Carpenter offers new stylish benches and tables of the finest oak (increase beer prize by 1)
      </UpgradeButton>
    </div>
  </div>
</template>

<script>
// import EventBus from "../main.js"
import UpgradeButton from "../components/UpgradeButton.vue";

export default {

  //   props: {
  //     brewery: Object
  //   }
    components: {
    // Brewery,
    UpgradeButton
  },
  data() {
    return {
      coins2: this.$store.state.coins,
      bardData: {
        price: 1,
        count: 0,
        name: "bard"
      }
    };
  },
  props: {
    numbers: Array
  },
  mounted() {
    console.log(this.$globalcoins, this.$store.state.count);
    // EventBus.$on('COINS', function (payLoad) {
    //   console.log('HEJ', payLoad)
    // })
  },
  computed: {
    coins() {
      return this.$store.state.coins;
    }
  }
};
</script>

<style scoped lang=scss>
.upgrades-container {
  .upgrades-description {
    color: white;
  }
}
</style>