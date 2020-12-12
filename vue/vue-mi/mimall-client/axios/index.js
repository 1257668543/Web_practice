import apiLogin from './interface/login';
import apiRegister from './interface/register';
import apiInsert from './interface/insert_goods'
import apiGetAll from './interface/get_Allgoods'

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
          apiGetAll
        )
      }
    }
  })
}

export default install