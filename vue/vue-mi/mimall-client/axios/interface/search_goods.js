import axios from '../api'

const search = (data) => {
  return axios({
    url: '/goods/searchGoods',
    method: 'post',
    data
  })
}

export default {
  search
}