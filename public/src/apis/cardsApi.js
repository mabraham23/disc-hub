import axios from 'axios'
import qs from 'qs'

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

// function getDiscsApi (cb) {
//   api.get('discs')
//   .then((response) => {
//     cb(response.data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

function saveCardsApi (data, cb) {
  data = qs.stringify(data)
  api.post('discs', data)
  .then(function (response) {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

// function updateData (iddisc, data, cb) {
//   data = qs.stringify(data)
//   api.put('discs/' + iddisc, data)
//   .then((response) => {
//     // cb({ status: 201 })
//     cb(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

// function deleteData (iddisc, cb) {
//   console.log(iddisc)
//   api.delete('discs/' + iddisc)
//   .then((response) => {
//     cb(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

export default {
//   getDiscs: (cb) => getDiscsApi(cb),
  saveCards: (data, cb) => saveCardsApi(data, cb),
//   updateDisc: (iddisc, data, cb) => updateData(iddisc, data, cb),
//   deleteDisc: (idblog, cb) => deleteData(idblog, cb)
}