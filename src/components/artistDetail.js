import React from 'react'
import PropTypes from 'prop-types'

const artistDetail = props => (
  <div>
    <h3>artist detail</h3>
    <p>
      <img src={props.detail.icon} alt="artist" />
    </p>
    {props.myself ? <p>EDIT</p> : null}
    <p>{props.detail.artist_name}</p>
    <p // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
      onClick={props.back}
    >
      back
    </p>
  </div>
)

artistDetail.propTypes = {
  detail: PropTypes.shape({
    icon: PropTypes.string,
    artist_name: PropTypes.string,
  }),
  back: PropTypes.func.isRequired,
  myself: PropTypes.bool,
}

export default artistDetail
