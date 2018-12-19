import React from 'react'
import PropTypes from 'prop-types'

const workDetail = props => {
  return (
    <React.Fragment>
      <p>{props.detail.name}</p>
      <p>{props.detail.caption}</p>
      <p>{props.detail.price}</p>
      <p // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
        onClick={props.back}
      >
        back
      </p>
    </React.Fragment>
  )
}

workDetail.propTypes = {
  detail: PropTypes.shape({
    name: PropTypes.string,
    caption: PropTypes.string,
    price: PropTypes.number,
  }),
  back: PropTypes.func.isRequired,
}

export default workDetail
