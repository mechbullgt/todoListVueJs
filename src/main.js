import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Mounting a Vue application
new Vue({
  render: h => h(App),
}).$mount('#app')
