import axios from '../api'

const getAll = () => {
  return axios({
    url: '/goods/getAll_goods',
    method: 'get'
  })
}

export default {
  getAll
}