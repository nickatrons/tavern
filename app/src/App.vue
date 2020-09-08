<template>
  <div id="app">
    <div class="app-navigation">
      <StartOver />
      <router-link to="/">Go to your tavern</router-link>
      <router-link to="/Upgrades">Go to upgrades</router-link>

    </div>
    <House />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <Version />
  </div>
</template>

<script>
// import TavernBody from "./components/TavernBody.vue";
import House from "./components/House.vue";
import Version from "./components/Version.vue";
import StartOver from "./components/StartOver.vue";

export default {
  name: "App",
  components: {
    House, Version, StartOver
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100%;
  background: black;
  padding-top: 20px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // padding-top: 60px;
  background: black;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    &.app-navigation a, &.tavern-text {
      color: white;
      margin: 10px;
    }
  }
  pre {
    @media (max-width: 600px) {
      font-size: 8px;
    }
    // display: inline-block;
    text-align: left;
    color: white;
    margin: 0;
    &.smoke {
      text-align: center;
    }
    &.smoke-left {
      animation-name: smoke-left;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: linear;
    }
    &.smoke-right {
      animation-name: smoke-right;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: linear;
    }
  }
  @keyframes smoke-left {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: 10px;
    }
  }
  @keyframes smoke-right {
    0% {
      margin-right: 0px;
    }
    100% {
      margin-right: 10px;
    }
  }
}
</style>
