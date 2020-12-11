import axios from '../api'

const insert = (data) => {
  return axios({
    url: '/insert_goods',
    method: 'post',
    data
  })
}

export default {
  insert
}