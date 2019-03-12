import axios from 'axios'
import pathRetriever from './pathRetriever'

const PATH = pathRetriever() + '/api'

export default {
  signUp: (email, password) => axios.post(`${PATH}/v1/users/`, { email, password }),
  login: (email, password) => axios.post(`${PATH}-token-auth/`, { username: email, password }),

  updateEmail: (userId, email) => axios.patch(`${PATH}/v1/users/${userId}/`, { email }),
  updatePassword: (userId, oldPassword, newPassword) => axios.patch(`${PATH}/v1/users/${userId}/`, { oldPassword, newPassword }),

  getColors: () => axios.get(`${PATH}/v1/colors/`),
  getGenres: () => axios.get(`${PATH}/v1/genres/`),

  toggleFavorite: (work, user) =>
    axios.post(`${PATH}/v1/favorites/`, JSON.stringify({ work, user }), {
      headers: {
        'Content-Type': 'application/json',
      },
    }),

  uploadWork: work => {
    return axios.post(`${PATH}/v1/works/`, work)
  },
  buyWork: (buyerId, workId) => axios.patch(`${PATH}/v1/works/${workId}/`, { sold: true, buyer: buyerId }),
  getWorks: () => axios.get(`${PATH}/v1/works/`),
  getFavoriteWorks: (userId) => axios.get(`${PATH}/v1/works/?favoritesOf=${userId}`),
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

  getSeedArtists: () => axios.get(`${PATH}/v1/seedArtists/`),
  getArtistDetail: id => axios.get(`${PATH}/v1/artists/${id}/`),
}
