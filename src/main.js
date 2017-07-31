import Vue from 'vue'
import App from './App.vue'
import bootstrapvue from 'bootstrap-vue'

Vue.use(bootstrapvue);

new Vue({
  el: '#app',
  render: h => h(App)
})
