<template>
  <div id="app">
    <div class="app-navigation">
      <div class="center">
        <router-link to="/">Go to your tavern</router-link>
        <router-link to="/Upgrades">Go to upgrades</router-link>
      </div>
    </div>
    <House />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive >
    </transition>
    <footer class="main-footer">
      <Settings />
      <Version />
    </footer>
  </div>
</template>

<script>
// import TavernBody from "./components/TavernBody.vue";
import House from "./components/tavern/House.vue";
import Version from "./components/Version.vue";
import Settings from "./components/Settings.vue";

export default {
  name: "App",
  components: {
    House,
    Version,
    Settings
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
  footer.main-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    min-width: 100%;
    justify-content: center;
    background: black;
    div {
      margin: 10px;
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
      &.app-navigation a,
      &.tavern-text {
        color: white;
        margin: 10px;
      }
      &.app-navigation {
        display: flex;
        min-width: 100%;
      }
      .center {
        flex: 1;
      }
    }
    pre {
      @media (max-width: 600px) {
        font-size: 8px;
      }
      text-align: left;
      color: white;
      margin: 0;
      font-size: x-small;
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
}
</style>
