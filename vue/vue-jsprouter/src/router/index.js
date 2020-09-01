import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Hi',
    component: Hi,
    children: [
      {
        path: '/',
        name: 'Home/Hi',
        component: Hi
      },
      {
        path: 'hi1',
        name: 'hi1',
        component: Hi1
      },
      {
        path: 'hi2',
        name: 'hi2',
        component: Hi2
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
