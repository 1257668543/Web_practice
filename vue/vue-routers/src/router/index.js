// index.js 被称为路由的配置文件
import Vue from 'vue'
import router from 'vue-router'
import Hello from '../components/HelloWorld'
import Hi from '../components/Hi'
import Hi1 from '../components/Hi1'
import Hi2 from '../components/Hi2'

Vue.use(router)

export default new router({
  routes: [
    {
      path: '/', 
      name: 'Hello',
      component: Hello
    },
    {
        path: '/hi', 
        name: 'Hi',
        component: Hi,
        children: [
            {
                path: 'hi1', 
                name: 'hi1', 
                component: Hi1},//子路由的<router-view>必须在HelloWorld.vue中出现
            {
                path: 'hi2', 
                name: 'hi2', 
                component: Hi2
            }
        ]
    }
  ]  
})
