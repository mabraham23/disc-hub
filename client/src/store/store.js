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
    userStore,
  },
  state: {
    authenticated: false,
    user: {},
    playerScore: 0,
    totalScore: 0,
  },
  actions: {
    subScore({commit}){
      commit('decrementScore')
    },
    addScore({commit}){
      commit('incrementScore')
    },
    resetScore({commit}){
      commit('resetScore')
    }
  },
  mutations: {
    decrementScore(state) {
      state.playerScore --
      state.totalScore --
    },
    incrementScore(state) {
      state.playerScore ++
      state.totalScore ++
    },
    resetScore(state) {
      state.playerScore = 0
    }
  },
  getters: {
    authenticated() {
      return this.state.authenticated;
    },
    getScore(state) {
      return state.playerScore
    }
  }
})