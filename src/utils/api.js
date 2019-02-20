import axios from 'axios'
import pathRetriever from './pathRetriever'

const PATH = pathRetriever() + '/api'

export default {
  signUp: (email, password) => axios.post(`${PATH}/v1/users/`, { email, password }),
  login: (email, password) => axios.post(`${PATH}-token-auth/`, { username: email, password }),
  buyWork: (buyerId, workId) => axios.patch(`${PATH}/v1/works/${workId}/`, { sold: true, buyer: buyerId }),
  getWorks: () => axios.get(`${PATH}/v1/works/`),
  getWorkDetail: id => axios.get(`${PATH}/v1/works/${id}/`),
  getWorksOfAnArtist: id => axios.get(`${PATH}/v1/works/?artist=${id}`),
  getMessages: workId => axios.get(`${PATH}/v1/messages/?work=${workId}`),
  sendMessage: (workId, sender, receiver, body) =>
    axios.post(`${PATH}/v1/messages/`, { work: workId, sender, receiver, body }),
  getUserDetail: id => axios.get(`${PATH}/v1/userDetails/${id}/`),
  uploadUserIcon: (id, icon) => {
    const params = new FormData()
    params.append('icon', icon)
    return axios.patch(`${PATH}/v1/userDetails/${id}/`, params)
  },
  getArtistDetail: id => axios.get(`${PATH}/v1/artists/${id}/`),
}
