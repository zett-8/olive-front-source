import React from 'react'
import PropTypes from 'prop-types'

const userDetailNav = props => {
  return (
    <div>
      <p onClick={() => props.navClicked(0)}>prime</p>
      <p onClick={() => props.navClicked(1)}>other</p>
    </div>
  )
}

userDetailNav.propTypes = {
  navClicked: PropTypes.func.isRequired
}

export default userDetailNav
