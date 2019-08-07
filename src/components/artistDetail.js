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
          {props.detail.website ? (
            <React.Fragment>
              <p className="typ_infoList_left">Website</p>
              <p className="typ_infoList_right artistDetail__info__list__right">
                {<a href={props.detail.website} target="_blank" rel="noopener noreferrer">{props.detail.website}</a> || '-'}
              </p>
            </React.Fragment>
          ) : null}

          {props.detail.place ? (
            <React.Fragment>
              <p className="typ_infoList_left">Place</p>
              <p className="typ_infoList_right artistDetail__info__list__right">{props.detail.place || '-'}</p>
            </React.Fragment>
          ) : null}

          {props.detail.birthday ? (
            <React.Fragment>
              <p className="typ_infoList_left">Birthday</p>
              <p className="typ_infoList_right">{props.detail.birthday || '-'}</p>
            </React.Fragment>
          ) : null}

          {props.detail.sex !== 'Other' ? (
            <React.Fragment>
              <p className="typ_infoList_left">Sex</p>
              <p className="typ_infoList_right">{props.detail.sex}</p>
            </React.Fragment>
          ) : null}
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
    sex: PropTypes.string,
    profile: PropTypes.string,
    birthday: PropTypes.string,
  }),
}

export default artistDetail
