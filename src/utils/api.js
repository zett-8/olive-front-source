import axios from 'axios'

const ENV = process.env.NODE_ENV

const PATH = {
  local: 'http://localhost:8008/api',
  development: '',
  production: '',
}

export default {
  login: (email, password) => axios.post(`${PATH[ENV]}-token-auth/`, { username: email, password }),
  getWorks: () => axios.get(`${PATH[ENV]}/works/`),
  getWorkDetail: id => axios.get(`${PATH[ENV]}/works/${id}/`),
  getWorksOfAnArtist: id => axios.get(`${PATH[ENV]}/works/?artist=${id}`),
  getUserDetail: id => axios.get(`${PATH[ENV]}/users/${id}/`),
  getArtistDetail: id => axios.get(`${PATH[ENV]}/artists/${id}/`),
}
