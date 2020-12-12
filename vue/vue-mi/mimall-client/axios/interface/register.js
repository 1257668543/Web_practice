import axios from '../api'

const register = data => {
  return axios({
    url: '/user/register',
    method: 'post',
    data
  })
}

export default {
  register
}