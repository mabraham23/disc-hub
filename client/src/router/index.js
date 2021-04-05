import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing'
import Discs from '@/views/Discs'
import Games from '@/views/Games'
import CrazyCaddy from '@/views/CrazyCaddy'
import Login from '@/views/Login'
import Register from '@/views/Register'
import store from '../store/store';


Vue.use(VueRouter)


const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/discs',
    name: 'Discs',
    component: Discs,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/games',
    name: 'Games',
    component: Games, 
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/crazycaddy',
    name: 'CrazyCaddy',
    component: CrazyCaddy,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // If not auth

  if (!store.state.authenticated) {
    // check to see if authenticated before going to the route
    if (to.matched.some(route => route.meta.requireAuth)) {
      next({ name: 'Login' });
    }
    else {
      next();
    }
  }
  // We are authorized so do whatever bro
  else {
    next();
  }
});

export default router;