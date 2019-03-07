import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import VOID from '../assets/700.gif'

const seedArtistList = props => {
  return (
    <React.Fragment>
      {props.seedArtists.map(artist => (
        <div key={artist.icon} className="seedArtistList__artist">
          <div className="seedArtistList__artist__info">
            <Link to={`/artist/${artist.user_id}`}>
              <div className="seedArtistList__artist__info__icon" style={{ backgroundImage: `url(${artist.icon}` }} />
            </Link>
            <div className="seedArtistList__artist__info__list">
              <p>
                <Link to={`/artist/${artist.user_id}`}>{artist.artist_name}</Link>
              </p>
              <p>{artist.birthday}</p>
              <p>{artist.place}</p>
            </div>
          </div>
          <div className="seedArtistList__artist__works">
            {artist.works.map(work => (
              <Link to={`/work/${work.id}/detail`}>
                <img src={VOID} style={{ backgroundImage: `url(${work.image1})` }} alt="" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

seedArtistList.propTypes = {
  seedArtists: PropTypes.arrayOf(PropTypes.object),
}

export default seedArtistList
