import React from 'react'
import PropTypes from 'prop-types'

const userDetailOther = props => {
  return (
    <React.Fragment>
      <p onClick={props.handleLogout}>Logout</p>
    </React.Fragment>
  )
}

userDetailOther.propTypes = {
  handleLogout: PropTypes.func.isRequired
}

export default userDetailOther
