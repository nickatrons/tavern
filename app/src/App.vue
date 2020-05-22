<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <span class="tavern-visual">
      <pre class="smoke smoke-left">
          (   )</pre>
      <pre class="smoke smoke-right">
      (   )</pre>
      <pre class="smoke smoke-left">
    (  )</pre>
      <pre class="smoke smoke-right">
  (  (</pre>
      <pre class="smoke smoke-left">
  )  )</pre>
      <pre>
                           (  (                  /\
                            (_)                 /  \  /\
                    ________[_]________      /\/    \/  \
           /\      /\        ______    \    /   /\/\  /\/\
          /  \    //_\       \    /\    \  /\/\/    \/    \
   /\    / /\/\  //___\       \__/  \    \/
  /  \  /\/    \//_____\       \ |[]|     \
 /\/\/\/       //_______\       \|__|      \
/      \      /XXXXXXXXXX\                  \
        \    /_I_II  I__I_\__________________\
               I_I|  I__I_____[]_|_[]_____I
               I_II  I__I_____[]_|_[]_____I
               I II__I  I     XXXXXXX     I
            ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~  
     ------------------------------------------------
      </pre>
    </span>
    <TavernBody />
  </div>
</template>

<script>
import TavernBody from "./components/TavernBody.vue";

export default {
  name: "App",
  components: {
    TavernBody
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100%;
  background: black;
  padding-top: 20px;
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
  &>div {
    flex: 1;
  }
  div {
    // order: 2;
  }
  .tavern-visual {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
  }
  pre {
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
