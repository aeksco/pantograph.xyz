import Vue from 'vue'
import Vuex from 'vuex'
import editor from './editor'

// Vuex Initialization
// TODO - should this be done elsewhere?
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    editor
  }
})
