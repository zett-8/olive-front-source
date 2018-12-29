import axios from 'axios'

const ENV = process.env.NODE_ENV

const PATH = {
  local: 'http://localhost:8008/api',
  development: '',
  production: '',
}

export default {
  login: (email, password) => axios.post(`${PATH[ENV]}-token-auth/`, { username: email, password }),
  buyWork: (buyerId, workId) => axios.patch(`${PATH[ENV]}/v1/works/${workId}/`, { sold: true, buyer: buyerId }),
  getWorks: () => axios.get(`${PATH[ENV]}/v1/works/`),
  getWorkDetail: id => axios.get(`${PATH[ENV]}/v1/works/${id}/`),
  getWorksOfAnArtist: id => axios.get(`${PATH[ENV]}/v1/works/?artist=${id}`),
  getMessages: workId => axios.get(`${PATH[ENV]}/v1/messages/?work=${workId}`),
  sendMessage: (workId, sender, receiver, body) =>
    axios.post(`${PATH[ENV]}/v1/messages/`, { work: workId, sender, receiver, body }),
  getUserDetail: id => axios.get(`${PATH[ENV]}/v1/users/${id}/`),
  getArtistDetail: id => axios.get(`${PATH[ENV]}/v1/artists/${id}/`),
}
