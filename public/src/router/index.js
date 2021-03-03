import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import Discs from '@/views/Discs'
import Games from '@/views/Games'
import CrazyCaddy from '@/views/CrazyCaddy'
// import About from '@/components/About'
// import Coins from '@/components/Coins.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/discs',
      name: 'Discs',
      component: Discs 
    },
    {
      path: '/games',
      name: 'Games',
      component: Games 
    },
    {
      path: '/crazycaddy',
      name: 'CrazyCaddy',
      component: CrazyCaddy 
    }
  ]
})