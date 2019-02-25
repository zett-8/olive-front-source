import React from 'react'
import PropTypes from 'prop-types'

const userDetailNav = props => {
  return (
    <React.Fragment>
      <p onClick={() => props.navClicked(0)}>prime</p>
      <p onClick={() => props.navClicked(1)}>upload</p>
      <p onClick={() => props.navClicked(2)}>other</p>
    </React.Fragment>
  )
}

userDetailNav.propTypes = {
  navClicked: PropTypes.func.isRequired
}

export default userDetailNav
