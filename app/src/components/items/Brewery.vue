<template>
  <div class="button-description">
    A weary traveller offers to teach his peoples ways of brewing and aid you in making your own fine beer
    {{brewery.price}}
        <!-- <button
      class="tavern-button buy-brewery-button"
      :disabled="coins <= breweryPrice"
      v-on:click="buy('brewery')"
    >Start a small brewery (Costs {{breweryPrice}}) in the corner of your tavern cellar</button> -->
  </div>

</template>

<script>
export default {
  props: {
    brewery: Object
  }
};
</script>

<style scoped>
</style>