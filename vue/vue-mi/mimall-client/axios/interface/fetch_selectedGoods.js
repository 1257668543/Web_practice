import axios from '../api'

const fetch = (data) => {
  return axios({
    url: '/goods/fetch_selectedGoods',
    method: 'post',
    data
  })
}

export default {
  fetch
}