import discsApi from '../apis/discsapi'
import * as mutationType from './mutation_types'

// initial state
const state = {
  discs : [],
  message: null,
}

// initial getters
const getters = {
  allDiscs: state => {
    return state.discs.sort((a, b) => {
      return a['id'] < b['id']
    })
  },
  messages: state => state.message
}

// initial actions
const actions = {
  // get data from API
  getAllDiscs ({commit}) {
      discsApi.getDiscs(discs => {
        commit(mutationType.SHOW_ALL_DISCS, discs )
      })
  },
  // // save data
  saveDisc (context, data ) {
    discsApi.saveDiscs(data, (response) => {
      if (response.status === 201) {
        state.message = 'Data success has saved'
      }
      context.dispatch('getAllDiscs')
    })
  },
  // update blog
  updateDisc (context, disc) {
    discsApi.updateDisc(disc._id, disc, (response) => {
      if (response.status === 201) {
        state.message = 'Data success has updated'
      }
      context.dispatch('getAllDiscs')
    })
  },

  // delete disc
  destroy (context, iddisc) {
    let conf = window.confirm('Are you sure delete this Data?')
    if (conf) {
      discsApi.deleteDisc(iddisc, (response) => {
        if (response.status === 200) {
          state.message = 'Data success has deleted'
        }
        context.dispatch('getAllDiscs')
      })
    }
  }
}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_DISCS] (state, discs) {
    state.discs = discs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}