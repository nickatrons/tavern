import Vue from 'vue'
import App from './App.vue'
// import TEngine from 'engine/tEngine.js'

Vue.config.productionTip = false

// const TavernEngine = new TEngine();

new Vue({
  render: h => h(App),
  methods: {
    count() {
      return 1; 
    }
  }
}).$mount('#app')
