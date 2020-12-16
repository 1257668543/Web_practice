import axios from '../api'

const fetchFavor = () => {
  return axios({
    url: '/user/fetchFavor',
    method: 'post'
  })
}

export default {
  fetchFavor
}