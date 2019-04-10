import axios from 'axios'
import { PATH } from './settings'

export default {
  getGenres: () => axios.get(`${PATH}/api/v1/genres/`),

  // About login signup
  checkInvitationCode: code => axios.get(`${PATH}/api/v1/checkInvitationCode/${code}/`).then(() => null).catch(res => res),
  checkUserEmail: email => axios.get(`${PATH}/api/v1/checkUserEmail/${email}/`).then(() => null).catch(res => res),
  resetPassword: email => axios.get(`${PATH}/api/v1/reset-password/${email}/`).then(() => null).catch(res => res),
  signUp: (email, password, invitationCode) => axios.post(`${PATH}/api/v1/users/`, { email, password, invitationCode }),
  login: (email, password) => axios.post(`${PATH}/api-token-auth/`, { username: email, password }),

  // About users
  updateEmail: (UUID, email) => axios.patch(`${PATH}/api/v1/users/${UUID}/`, { email }),
  updatePassword: (UUID, oldPassword, newPassword) =>
    axios.patch(`${PATH}/api/v1/users/${UUID}/`, { oldPassword, newPassword }),
  getUserDetail: UUID => axios.get(`${PATH}/api/v1/userDetails/${UUID}/`),
  uploadUserIcon: (UUID, icon) => {
    const params = new FormData()
    params.append('icon', icon)
    return axios.patch(`${PATH}/api/v1/userDetails/${UUID}/`, params)
  },

  // About works
  uploadWork: work => axios.post(`${PATH}/api/v1/works/`, work),
  updateWork: (id, work) => axios.put(`${PATH}/api/v1/works/${id}/`, work),
  purchaseWork: (description, tokenId, price, receipt) => axios.get(`${PATH}/api/v1/purchase-work/${description}/${tokenId}/${price}/${receipt}/`),
  workWasBought: (buyerUUID, workId, status) => axios.patch(`${PATH}/api/v1/works/${workId}/`, { sold: true, buyer: buyerUUID, status }),
  getNextPageWorks: url => axios.get(url),
  getNewWorks: () => axios.get(`${PATH}/api/v1/works/?new=true`),
  getPopularWorks: () => axios.get(`${PATH}/api/v1/works/?popular=true`),
  getFilteredWorks: q => axios.get(`${PATH}/api/v1/filteredWorks/?${q}`),
  getFavoriteWorks: userId => axios.get(`${PATH}/api/v1/works/?favoritesOf=${userId}`),
  getPurchasedHistory: userId => axios.get(`${PATH}/api/v1/purchasedWorks/?of=${userId}`),
  getWorkDetail: id => axios.get(`${PATH}/api/v1/works/${id}/`),
  getWorksOfAnArtist: id => axios.get(`${PATH}/api/v1/works/?artist=${id}`),
  changeWorkStatus: (workId, status) => axios.patch(`${PATH}/api/v1/works/${workId}/`, { status }),
  toggleFavorite: (work, user) => axios.post(`${PATH}/api/v1/favorites/`, { work, user }),

  // About messages
  getMessages: workId => axios.get(`${PATH}/api/v1/messages/?work=${workId}`),
  sendMessage: (workId, sender, receiver, body) =>
    axios.post(`${PATH}/api/v1/messages/`, { work: workId, sender, receiver, body }),

  // About artists
  getSeedArtists: () => axios.get(`${PATH}/api/v1/seedArtists/`),
  getArtistDetail: id => axios.get(`${PATH}/api/v1/artists/${id}/`),
  updateArtistInfo: (UUID, data) => axios.put(`${PATH}/api/v1/userDetails/${UUID}/`, data),

  // About buyers
  getBuyerInfo: (token, BuyerId) => {
    const header = setToken(token)
    return axios.get(`${PATH}/api/v1/buyerInfo/${BuyerId}/`, header)
  },
  updateBuyerInfo: (UUID, data) => axios.put(`${PATH}/api/v1/userDetails/${UUID}/`, data),
}

const setToken = (token, data = {}) => {
  return { headers: { Authorization: 'Token ' + token }, data }
}
