import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gift',
    name: 'Gift',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Gift.vue')
  },
  {
  path: '/sticker',
  name: 'Sticker',
 
  component: () => import(/* webpackChunkName: "about" */ '../views/Sticker.vue')
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
