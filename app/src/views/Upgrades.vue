 <template>
  <div class="upgrades-container">
    <div class="upgrades-description">
      <div class="tavern-text">Small items or big, all can help you come a long way in this world</div>
      <div class="tavern-text">You have {{getState.coins}} coins to spend!</div>
      <UpgradeButton
        :buttonData="getState.upg.carpenter"
        :coins="getState.coins"
        name="Bard"
      >Carl the Carpenter offers new stylish benches and tables of the finest oak with a magical touch that in otherworldly ways makes room for more guests (Doubles guest capacity and frequency)</UpgradeButton>
    </div>
  </div>
</template>

<script>
import UpgradeButton from "../components/UpgradeButton.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UpgradeButton
  },
  props: {
    numbers: Array
  },
  computed: {
    ...mapGetters([
      "getState"
    ])
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