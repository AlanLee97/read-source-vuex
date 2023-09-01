import Vue from 'vue'
import store from './store'
// import App from './components/App.vue'
import App from './components/SimpleApp.vue'

console.log('alan->App', App)

new Vue({
  store, // inject store to all children
  el: '#app',
  render: h => h(App)
})
