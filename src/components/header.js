import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const header = props => {
  return (
    <header className="nav">
      <div className="nav__left">
        <Link className="nav__link" to="/popular">Popular</Link>
        <Link className="nav__link" to="/new">New</Link>
        {props.loggedIn ? <p>review</p> : null}
      </div>

      <h1 onClick={props.handleLogoClicked}>Olive</h1>

      <div className="nav__right">
        {props.loggedIn ? (
          <React.Fragment>
            <Link className="nav__link" to={`/user/${props.userId}`}>account</Link>
            <p onClick={props.handleLogout}>Logout</p>
          </React.Fragment>
        ) : (
          <Link className="nav__link" to="/login">login</Link>
        )}
      </div>
    </header>
  )
}

header.propTypes = {
  loggedIn: PropTypes.bool,
  userId: PropTypes.number,
  handleLogoClicked: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
}

export default header
