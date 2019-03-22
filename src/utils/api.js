import axios from 'axios'
import pathRetriever from './pathRetriever'

const PATH = pathRetriever() + '/api'

export default {
  checkInvitationCode: code => axios.get(`${PATH}/checkInvitationCode/${code}/`).then(() => null).catch(res => res),
  checkUserEmail: email => axios.get(`${PATH}/checkUserEmail/${email}/`).then(() => null).catch(res => res),
  resetPassword: email => axios.get(`${PATH}/reset-password/${email}/`).then(() => null).catch(res => res),
  signUp: (email, password, invitationCode) => axios.post(`${PATH}/v1/users/`, { email, password, invitationCode }),
  login: (email, password) => axios.post(`${PATH}-token-auth/`, { username: email, password }),

  updateEmail: (UUID, email) => axios.patch(`${PATH}/v1/users/${UUID}/`, { email }),
  updatePassword: (UUID, oldPassword, newPassword) =>
    axios.patch(`${PATH}/v1/users/${UUID}/`, { oldPassword, newPassword }),

  getUserDetail: UUID => axios.get(`${PATH}/v1/userDetails/${UUID}/`),
  uploadUserIcon: (UUID, icon) => {
    const params = new FormData()
    params.append('icon', icon)
    return axios.patch(`${PATH}/v1/userDetails/${UUID}/`, params)
  },
  updateBuyerInfo: (UUID, data) => axios.put(`${PATH}/v1/userDetails/${UUID}/`, data),
  updateArtistInfo: (UUID, data) => axios.put(`${PATH}/v1/userDetails/${UUID}/`, data),
  uploadWork: work => {
    return axios.post(`${PATH}/v1/works/`, work)
  },

  getPurchasedHistory: userId => axios.get(`${PATH}/v1/works/?historyOf=${userId}`),

  getGenres: () => axios.get(`${PATH}/v1/genres/`),

  toggleFavorite: (work, user) =>
    axios.post(`${PATH}/v1/favorites/`, JSON.stringify({ work, user }), {
      headers: {
        'Content-Type': 'application/json',
      },
    }),

  buyWork: (buyerUUID, workId, status) => axios.patch(`${PATH}/v1/works/${workId}/`, { sold: true, buyer: buyerUUID, status }),
  getWorks: () => axios.get(`${PATH}/v1/works/`),
  getFilteredWorks: q => axios.get(`${PATH}/v1/filteredWorks/?${q}`),
  getFavoriteWorks: userId => axios.get(`${PATH}/v1/works/?favoritesOf=${userId}`),
  getWorkDetail: id => axios.get(`${PATH}/v1/works/${id}/`),
  getWorksOfAnArtist: id => axios.get(`${PATH}/v1/works/?artist=${id}`),
  changeWorkStatus: (workId, status) => axios.patch(`${PATH}/v1/works/${workId}/`, { status }),

  getMessages: workId => axios.get(`${PATH}/v1/messages/?work=${workId}`),
  sendMessage: (workId, sender, receiver, body) =>
    axios.post(`${PATH}/v1/messages/`, { work: workId, sender, receiver, body }),

  getSeedArtists: () => axios.get(`${PATH}/v1/seedArtists/`),
  getArtistDetail: id => axios.get(`${PATH}/v1/artists/${id}/`),

  getBuyerInfo: BuyerId => axios.get(`${PATH}/v1/buyerInfo/${BuyerId}/`),
}
