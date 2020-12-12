import axios from '../api'

const insert = (data) => {
  return axios({
    url: '/goods/insert_goods',
    method: 'post',
    data
  })
}

export default {
  insert
}