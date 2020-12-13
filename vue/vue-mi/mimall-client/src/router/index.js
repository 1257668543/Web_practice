import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index'
import homePage from '@/components/wrapper/Home-wrapper.vue'
import searchPage from '@/components/wrapper/Search-wrapper.vue'
import Login from '@/views/login/login.vue'
import Error from '../components/Error-component/Error.vue'
import Manage from '@/views/manage/manage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        component: homePage
      },
      {
        path: 'searchPage',
        name: 'searchPage',
        component: searchPage
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'manage',
    component: Manage
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
