import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index'
import homePage from '@/components/wrapper/Home-wrapper.vue'
import searchPage from '@/components/wrapper/Search-wrapper.vue'
import Login from '@/views/login/login.vue'
import Error from '../components/Error-component/Error.vue'
import Manage from '@/views/manage/manage.vue'
import Detail from '@/components/wrapper/Detail-wrapper.vue'
import Personal from '@/components/wrapper/Personal-wrapper.vue'
import Orders from '@/components/personal-components/Orders.vue'
import Assets from '@/components/personal-components/Assets.vue'
import Collections from '@/components/personal-components/Collections.vue'
import Address from '@/components/personal-components/Address.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'homePage',
        component: homePage
      },
      {
        path: 'search',
        name: 'searchPage',
        component: searchPage
      },
      {
        path: 'detail',
        name: 'detailPage',
        component: Detail
      },
      {
        path: 'personal-center',
        name: 'personalPage',
        component: Personal,
        children : [
          {
            path: '/',
            redirect: 'orders'
          }, 
          {
            path: 'orders',
            name: 'ordersPage',
            component: Orders
          },
          {
            path: 'assets',
            name: 'assetsPage',
            component: Assets
          },
          {
            path: 'collections',
            name: 'collectionsPage',
            component: Collections
          },
          {
            path: 'address',
            name: 'addressPage',
            component: Address
          }
        ]
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
