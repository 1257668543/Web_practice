import axios from '../api'

const get_goodsDetail
= (data) => {
  return axios({
    url: '/goods/getDetail',
    method: 'post',
    data
  })
}

export default {
  get_goodsDetail
}