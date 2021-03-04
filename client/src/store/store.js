import Vue from 'vue'
import Vuex from 'vuex'

// import * as getters from './getters'
// import * as actions from './actions'
import discstore from './discstore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    discstore
  }
})