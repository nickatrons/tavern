<template>
  <div class="item-container">
    <div class="buttoncontainer">
      <div class="button-description">{{title}}</div>
      <button
        class="tavern-button hire-button"
        :disabled="coins <= buttonData.price || coins === buttonData.price"
        v-on:click="$emit('purchased')"
      >Costs ({{buttonData.price}} coins)</button>
    </div>
    <transition name="fade">
      <span class="tavern-text" v-if="buttonData.count">
        {{buttonData.count}} {{name}}<span v-if="buttonData.count > 1">s</span> in your tavern
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    coins: Number,
    buttonData: Object,
    name: String
  }
};
</script>

<style  lang=scss>
.item-container {
  border-bottom: 1px solid;
  border-color: grey;

  padding: 20px;
  .buttoncontainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    button {
      margin: 5px;
      padding: 5px;
      font-size: 13px;
      font-family: monospace;
      background: lightgrey;
      max-width: 50vw;
          @media (max-width: 600px) { 
      font-size: 11px;
    }
    }
  }
  .tavern-text {
    font-size: smaller;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>