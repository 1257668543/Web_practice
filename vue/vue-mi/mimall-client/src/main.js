import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/clear-default.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import api from './../axios/index'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
