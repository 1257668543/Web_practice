import axios from '../api'

const login = (data) => {
  return axios({
    url: '/user/login',
    method: 'post',
    data
  })
}

export default {
  login
}