import React from 'react'
import PropTypes from 'prop-types'

const userDetailNav = props => {
  return (
    <React.Fragment>
      <p onClick={() => props.navClicked(0)}>Prime</p>
      <p onClick={() => props.navClicked(1)}>Buyer</p>
      <p onClick={() => props.navClicked(2)}>Artist</p>
      <p onClick={() => props.navClicked(3)}>Upload</p>
      <p onClick={() => props.navClicked(4)}>History</p>
      <p onClick={() => props.navClicked(5)}>Other</p>
    </React.Fragment>
  )
}

userDetailNav.propTypes = {
  navClicked: PropTypes.func.isRequired
}

export default userDetailNav
