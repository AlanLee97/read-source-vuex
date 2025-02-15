import Vue from 'vue'
import Vuex from '../../../dist/vuex'
// eslint-disable-next-line no-unused-vars
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

debugger
export default new Vuex.Store({
  state: {
    // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
    hello: 'AlanLee'
  },
  actions,
  mutations,
  plugins
})
