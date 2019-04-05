import React from 'react'
import PropTypes from 'prop-types'

const artistDetail = props => {
  return (
    <React.Fragment>
      <div className="artistDetail__info">
        <div
          className="artistDetail__info__icon"
          style={{
            backgroundImage: `url(${(process.env.NODE_ENV === 'local' ? '' : '') + props.detail.icon})`,
          }}
        />
        <p className="artistDetail__info__name">{props.detail.artist_name}</p>
        <div className="artistDetail__info__list">
          <p className="typ_infoList_left">Website</p>
          <p className="typ_infoList_right">{props.detail.website}</p>
          <p className="typ_infoList_left">Place</p>
          <p className="typ_infoList_right">{props.detail.place}</p>
          <p className="typ_infoList_left">Birthday</p>
          <p className="typ_infoList_right">{props.detail.birthday}</p>
          <p className="typ_infoList_left">Sex</p>
          <p className="typ_infoList_right">{props.detail.sex}</p>
        </div>
      </div>
      <div className="artistDetail__profile">
        <div className="artistDetail__profile__box">
          <label className="sw1" htmlFor="label5"> {/*eslint-disable-line*/}
            read more...
          </label>
          <input className="sw2" type="checkbox" id="label5" />
          <div className="profile_contents">{props.detail.profile}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

artistDetail.propTypes = {
  detail: PropTypes.shape({
    icon: PropTypes.string,
    artist_name: PropTypes.string,
    website: PropTypes.string,
    place: PropTypes.string,
    sex: PropTypes.number,
    profile: PropTypes.string,
    birthday: PropTypes.string,
  }),
}

export default artistDetail
