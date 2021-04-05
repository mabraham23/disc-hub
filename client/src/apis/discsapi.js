import axios from 'axios'
import qs from 'qs'

const api = axios.create({
  // baseURL: 'http://localhost:3000',
  withCredentials: true
})

function getDiscsApi (cb) {
  api.get('discs')
  .then((response) => {
    cb(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}

function saveDiscsApi (data, cb) {
  data = qs.stringify(data)
  api.post('discs', data)
  .then(function (response) {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

function updateData (iddisc, data, cb) {
  data = qs.stringify(data)
  api.put('discs/' + iddisc, data)
  .then((response) => {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

function deleteData (iddisc, cb) {
  api.delete('discs/' + iddisc)
  .then((response) => {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

function getUsersApi (cb) {
  api.get('users')
  .then((response) => {
    cb(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}

function createUserApi (data, cb) {
  data = qs.stringify(data)
  api.post('users', data)
  .then(function (response) {
    cb(response)
  })
  .catch((error) => {
    // console.log(error.response)
    cb(error.response)
  })
}

function loginUserApi (data, cb) {
  data = qs.stringify(data)
  api.post('session', data)
  .then(function (response) {
    cb(response)
  })
  .catch((error) => {
    // console.log("does error go here")
    cb(error)
    // console.log(error)
  })
}

function checkSesssionApi( cb ) {
  api.get('me')
  .then((response) => {
    cb(response)
  })
  .catch((error) => {
    cb(error.response)
  })
}

function logoutUserApi(data, cb) {
  data = qs.stringify(data)
  api.delete('/session', data)
  .then(function (response) {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

export default {
  getDiscs: (cb) => getDiscsApi(cb),
  saveDiscs: (data, cb) => saveDiscsApi(data, cb),
  updateDisc: (iddisc, data, cb) => updateData(iddisc, data, cb),
  deleteDisc: (idblog, cb) => deleteData(idblog, cb),
  getUsers: (cb) => getUsersApi(cb),
  createUser: (data, cb) => createUserApi(data, cb),
  loginUser: (data, cb) => loginUserApi(data, cb),
  logoutUser: (data, cb) => logoutUserApi(data, cb),
  checkSession: (data, cb) => checkSesssionApi(data, cb),
}