import Api from '../utils/api'

export const actionTypes = {
  INVITE_OTHER_ARTIST: 'INVITE_OTHER_ARTIST'
}

export const inviteOtherArtist = (token, formData) => () => {
  return Api.inviteOtherArtist(token, formData)
    .then(() => null)
    .catch(error => error)
}
