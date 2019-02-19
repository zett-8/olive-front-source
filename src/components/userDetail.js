import React from 'react'
import PropTypes from 'prop-types'

import pathRetriever from '../utils/pathRetriever'

const userDetail = props => {
  const PATH = pathRetriever()

  return (
    <React.Fragment>
      <h4>EMAIL</h4>

      <p><img src={PATH + props.detail.icon} alt="" /></p>
      <p>{props.detail.email}</p>

      <h4>BUYER</h4>
      {props.detail.buyer
        ? (
          <div>
            <p>{props.detail.buyer.name}</p>
            <p>{props.detail.buyer.address}</p>
          </div>
        )
        : (
          <div>
            <p>NOT BUYER</p>
          </div>
        )
      }

      <h4>ARTIST</h4>
      {props.detail.artist
        ? (
          <div>
            <p>{props.detail.artist.artist_name}</p>
            <p>{props.detail.artist.place}</p>
          </div>
        )
        : (
          <div>
            <p>NOT ARTIST</p>
          </div>
        )
      }

      <p onClick={props.handleLogout}>Logout</p>
    </React.Fragment>
  )
}

userDetail.propTypes = {
  detail: PropTypes.shape({
    icon: PropTypes.string,
    email: PropTypes.string,
    buyer: PropTypes.objectOf({
      name: PropTypes.string,
      address: PropTypes.string
    }),
    artist: PropTypes.objectOf({
      artist_name: PropTypes.string,
      place: PropTypes.string
    })
  }),
  handleLogout: PropTypes.func.isRequired
}

export default userDetail
