import apiLogin from './interface/login';
import apiRegister from './interface/register';
import apiInsert from './interface/insert_goods'
import apiGetAll from './interface/get_Allgoods'
import apiFetch from './interface/fetch_selectedGoods'
import apiSearch from './interface/search_goods'
import apiGet_goodsDetail from './interface/get_goodsDetail'

const install = Vue => {
  if (install.installed) {
    return;
  }
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,
          apiRegister,
          apiInsert,
          apiGetAll,
          apiFetch,
          apiSearch,
          apiGet_goodsDetail
        )
      }
    }
  })
}

export default install