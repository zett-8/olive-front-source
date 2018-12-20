import axios from 'axios'

const ENV = process.env.NODE_ENV

const PATH = {
  local: 'http://localhost:8008/api',
  development: '',
  production: '',
}

export default {
  login: (email, password) => axios.post(`${PATH[ENV]}-token-auth/`, { username: email, password }),
  getWorks: () => axios.get(`${PATH[ENV]}/work/`),
  getWorkDetail: id => axios.get(`${PATH[ENV]}/work/${id}/`),
  getUserDetail: id => axios.get(`${PATH[ENV]}/user/${id}/`),
  getArtistDetail: id => axios.get(`${PATH[ENV]}/artist/${id}/`),
}
