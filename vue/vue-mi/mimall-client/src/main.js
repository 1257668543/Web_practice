import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/clear-default.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import api from './../axios/index';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('./assets/img/error.jpg'),
  loading: require('./assets/img/loading.jpg'),
  attempt: 2
})
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(api);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
