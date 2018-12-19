import React from 'react'
import PropTypes from 'prop-types'

const artistDetail = props => (
  <div>
    <h3>artist detail</h3>
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
    artist_name: PropTypes.string
  }),
  back: PropTypes.func.isRequired
}

export default artistDetail
