import axios from 'axios'
import { PATH } from './settings'

export default {
  getGenres: () => axios.get(`${PATH}/api/v1/genres/`),

  // About login signup
  checkInvitationCode: code => axios.get(`${PATH}/api/v1/checkInvitationCode/${code}/`).then(() => null).catch(res => res),
  checkUserEmail: email => axios.get(`${PATH}/api/v1/checkUserEmail/${email}/`).then(() => null).catch(res => res),
  resetPassword: email => axios.get(`${PATH}/api/v1/reset-password/${email}/`).then(() => null).catch(res => res),
  signUp: (email, password, invitationCode) => axios.post(`${PATH}/api/v1/generate-signup-url/`, { email, password, invitationCode }),
  login: (email, password) => axios.post(`${PATH}/api-token-auth/`, { username: email, password }),

  // About users
  getUserDetail: (token, UUID) => {
    const header = setToken(token)
    return axios.get(`${PATH}/api/v1/userDetails/${UUID}/`, header)
  },
  updateEmail: (token, UUID, email) => {
    const header = setToken(token)
    return axios.patch(`${PATH}/api/v1/users/${UUID}/`, { email }, header)
  },
  updatePassword: (token, UUID, oldPassword, newPassword) => {
    const header = setToken(token)
    return axios.patch(`${PATH}/api/v1/users/${UUID}/`, { oldPassword, newPassword }, header)
  },
  uploadUserIcon: (token, UUID, icon) => {
    const header = setToken(token)
    const params = new FormData()
    params.append('icon', icon)
    return axios.patch(`${PATH}/api/v1/userDetails/${UUID}/`, params, header)
  },

  // About works
  uploadWork: (token, work) => {
    const header = setToken(token)
    return axios.post(`${PATH}/api/v1/works/`, work, header)
  },
  updateWork: (token, id, work) => {
    const header = setToken(token)
    return axios.put(`${PATH}/api/v1/works/${id}/`, work, header)
  },
  workWasBought: (token, buyerUUID, workId, status) => {
    const header = setToken(token)
    return axios.patch(`${PATH}/api/v1/works/${workId}/`, { sold: true, buyer: buyerUUID, status }, header)
  },
  changeWorkStatus: (token, workId, status) => {
    const header = setToken(token)
    return axios.patch(`${PATH}/api/v1/works/${workId}/`, { status }, header)
  },
  deleteWork: (token, workId) => {
    const header = setToken(token)
    return axios.delete(`${PATH}/api/v1/works/${workId}/`, header)
  },
  sendContact: formData => axios.post(`${PATH}/api/v1/contact/`, formData),
  purchaseWork: (description, tokenId, price, receipt) => axios.get(`${PATH}/api/v1/purchase-work/${description}/${tokenId}/${price}/${receipt}/`),
  getNextPageWorks: url => axios.get(url),
  getNewWorks: () => axios.get(`${PATH}/api/v1/works/?new=true`),
  getRecommendWorks: () => axios.get(`${PATH}/api/v1/works/?recommend=true`),
  getPopularWorks: () => axios.get(`${PATH}/api/v1/works/?popular=true`),
  getFilteredWorks: q => axios.get(`${PATH}/api/v1/filteredWorks/?${q}`),
  getFavoriteWorks: userId => axios.get(`${PATH}/api/v1/works/?favoritesOf=${userId}`),
  getPurchasedHistory: userId => axios.get(`${PATH}/api/v1/purchasedWorks/?of=${userId}`),
  getWorkDetail: id => axios.get(`${PATH}/api/v1/works/${id}/`),
  getWorksOfAnArtist: id => axios.get(`${PATH}/api/v1/works/?artist=${id}`),
  toggleFavorite: (work, user) => axios.post(`${PATH}/api/v1/favorites/`, { work, user }),

  // About messages
  getMessages: workId => axios.get(`${PATH}/api/v1/messages/?work=${workId}`),
  sendMessage: (workId, sender, receiver, body) =>
    axios.post(`${PATH}/api/v1/messages/`, { work: workId, sender, receiver, body }),

  // About artists
  getSeedArtists: () => axios.get(`${PATH}/api/v1/seedArtists/`),
  getArtistDetail: id => axios.get(`${PATH}/api/v1/artists/${id}/`),
  updateArtistInfo: (token, UUID, data) => {
    const header = setToken(token)
    return axios.put(`${PATH}/api/v1/userDetails/${UUID}/`, data, header)
  },

  // About buyers
  getBuyerInfo: (token, BuyerId) => {
    const header = setToken(token)
    return axios.get(`${PATH}/api/v1/buyerInfo/${BuyerId}/`, header)
  },
  updateBuyerInfo: (token, UUID, data) => {
    const header = setToken(token)
    return axios.put(`${PATH}/api/v1/userDetails/${UUID}/`, data, header)
  },
}

const setToken = token => {
  return { headers: { Authorization: 'Token ' + token } }
}
