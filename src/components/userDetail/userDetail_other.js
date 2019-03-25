import React from 'react'
import PropTypes from 'prop-types'

const userDetailOther = props => {
  return (
    <React.Fragment>
      <button type="button" className="b_btn b_btn__20rem" onClick={props.handleLogout}>Logout</button>
    </React.Fragment>
  )
}

userDetailOther.propTypes = {
  handleLogout: PropTypes.func.isRequired
}

export default userDetailOther
