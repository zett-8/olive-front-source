import React from 'react'
import PropTypes from 'prop-types'

const userDetailOther = props => {
  return (
    <React.Fragment>
      <button type="button" className="btn btn__login" onClick={props.handleLogout}>Logout</button>
    </React.Fragment>
  )
}

userDetailOther.propTypes = {
  handleLogout: PropTypes.func.isRequired
}

export default userDetailOther
