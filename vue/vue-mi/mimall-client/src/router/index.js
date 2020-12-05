import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index'
import Login from '@/views/login/login.vue'
import Register from '@/views/login/register.vue'
import Error from '../components/Error-component/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, 
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path:'*',
    component:Error
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
