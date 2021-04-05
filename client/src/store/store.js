import Vue from 'vue'
import Vuex from 'vuex'

// import * as getters from './getters'
// import * as actions from './actions'
import discstore from './discstore.js'
import userStore from './userStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    discstore,
    userStore
  },
  state: {
    authenticated: false,
    user: {},
  },
  getters: {
    authenticated() {
      return this.state.authenticated;
    }
  }
})