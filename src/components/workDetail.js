import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const workDetail = props => {
  return (
    <React.Fragment>
      <p>{props.detail.name}</p>
      <p>{props.detail.caption}</p>
      <p>{props.detail.price}</p>
      <Link to={`/artist/${props.detail.artist.user_id}`}>{props.detail.artist.artist_name}</Link>
      {props.detail.sold ? (
        <p>SOLD</p>
      ) : (
        <button type="button" onClick={props.buy}>
          BUY
        </button>
      )}
      <p onClick={props.back}>back</p>
    </React.Fragment>
  )
}

workDetail.propTypes = {
  detail: PropTypes.shape({
    name: PropTypes.string,
    caption: PropTypes.string,
    price: PropTypes.number,
    artist: PropTypes.object,
    sold: PropTypes.bool
  }),
  buy: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
}

export default workDetail
