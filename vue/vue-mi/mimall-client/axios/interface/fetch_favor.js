import axios from '../api'

const fetchFavor = (data) => {
  return axios({
    url: '/user/fetchFavor',
    method: 'post',
    data
  })
}

export default {
  fetchFavor
}