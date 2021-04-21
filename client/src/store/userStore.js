import userApi from '../apis/discsapi'
import * as mutationType from './mutation_types'
import router from '../router'

// initial state
const state = {
  users: [],
  message: '',
}

// initial getters
const getters = {
  allUsers: state => {
    return state.users.sort((a, b) => {
      return a['id'] < b['id']
    })
  },
  message: state => {
    return state.message;
  }
}

// initial actions
const actions = {
  // get data from API
  getAllUsers ({commit}) {
    userApi.getUsers(users => {
      commit(mutationType.SHOW_ALL_USERS, users)
    })
  },
  // login user
  loginUser ( context , data ) {
    userApi.loginUser (data, (response) => {
      if (response.status === 201) {
        this.state.authenticated = true; 
        this.state.user = response.data
        router.push('/')
      }
      else {
        context.commit('updateMessage', "username or password incorrect")
      }
    })
  },
  // create user
  createUser ( context, data ) {
   userApi.createUser (data, (response) => {
      if ( response ) {
        if (response.status === 201) {
          router.push('/login')
        } 
        else if ( response.status === 409 ) {
          context.commit('updateMessage', "duplicate email error")
        }
      } 
    })
  },
  // create user
  logoutUser( context, data ) {
    userApi.logoutUser(data, (response) => {
      if ( response ) {
        if (response.status === 200) {
          this.state.authenticated = false;
          router.push('/login')
        } 
        else {
          console.log("something went wrong when logging out");
        }
      } 
    })
  },

  // check whether the user is logged in or not
  checkLoggedIn ( ) {
    userApi.checkSession( response => {
      if ( response.status === 200 ) {
        this.state.authenticated = true;
        this.state.user = response.data
        router.push('/')
      }
      else {
        this.state.authenticated = false;
      }
    })
  }

//   updateDisc (context, disc) {
//     discsApi.updateDisc(disc._id, disc, (response) => {
//       if (response.status === 201) {
//         state.message = 'Data success has updated'
//       }
//       context.dispatch('getAllDiscs')
//     })
//   },

//   // delete disc
//   destroy (context, iddisc) {
//     let conf = window.confirm('Are you sure delete this Data?')
//     if (conf) {
//       discsApi.deleteDisc(iddisc, (response) => {
//         if (response.status === 200) {
//           state.message = 'Data success has deleted'
//         }
//         context.dispatch('getAllDiscs')
//       })
//     }
//   }
}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_USERS] (state, users) {
    state.users = users
  },
  updateMessage(state, message) {
    return state.message = message;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}


// credentials include