// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')




// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })