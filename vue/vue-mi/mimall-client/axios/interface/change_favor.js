import axios from '../api'

const changeFavor = (data) => {
  return axios({
    url: '/user/changeFavor',
    method: 'post',
    data
  })
}

export default {
  changeFavor
}