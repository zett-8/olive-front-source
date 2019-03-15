import axios from 'axios'
import pathRetriever from './pathRetriever'

const PATH = pathRetriever() + '/api'

export default {
  signUp: (email, password) => axios.post(`${PATH}/v1/users/`, { email, password }),
  login: (email, password) => axios.post(`${PATH}-token-auth/`, { username: email, password }),

  updateEmail: (userId, email) => axios.patch(`${PATH}/v1/users/${userId}/`, { email }),
  updatePassword: (userId, oldPassword, newPassword) =>
    axios.patch(`${PATH}/v1/users/${userId}/`, { oldPassword, newPassword }),

  getUserDetail: id => axios.get(`${PATH}/v1/userDetails/${id}/`),
  uploadUserIcon: (id, icon) => {
    const params = new FormData()
    params.append('icon', icon)
    return axios.patch(`${PATH}/v1/userDetails/${id}/`, params)
  },
  updateBuyerInfo: (userId, data) => axios.put(`${PATH}/v1/userDetails/${userId}/`, data),
  updateArtistInfo: (userId, data) => axios.put(`${PATH}/v1/userDetails/${userId}/`, data),
  uploadWork: work => {
    return axios.post(`${PATH}/v1/works/`, work)
  },

  getHistory: userId => axios.get(`${PATH}/v1/works/?historyOf=${userId}`),

  getGenres: () => axios.get(`${PATH}/v1/genres/`),

  toggleFavorite: (work, user) =>
    axios.post(`${PATH}/v1/favorites/`, JSON.stringify({ work, user }), {
      headers: {
        'Content-Type': 'application/json',
      },
    }),

  buyWork: (buyerId, workId, status) => axios.patch(`${PATH}/v1/works/${workId}/`, { sold: true, buyer: buyerId, status }),
  getWorks: () => axios.get(`${PATH}/v1/works/`),
  getFavoriteWorks: userId => axios.get(`${PATH}/v1/works/?favoritesOf=${userId}`),
  getWorkDetail: id => axios.get(`${PATH}/v1/works/${id}/`),
  getWorksOfAnArtist: id => axios.get(`${PATH}/v1/works/?artist=${id}`),
  changeWorkStatus: (workId, status) => axios.patch(`${PATH}/v1/works/${workId}/`, { status }),

  getMessages: workId => axios.get(`${PATH}/v1/messages/?work=${workId}`),
  sendMessage: (workId, sender, receiver, body) =>
    axios.post(`${PATH}/v1/messages/`, { work: workId, sender, receiver, body }),

  getSeedArtists: () => axios.get(`${PATH}/v1/seedArtists/`),
  getArtistDetail: id => axios.get(`${PATH}/v1/artists/${id}/`),

  getBuyerInfo: id => axios.get(`${PATH}/v1/buyerInfo/${id}/`),
}
