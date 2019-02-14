import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const header = props => {
  return (
    <header className="nav">
      <div className="nav__left">
        <p><Link className="nav__link" to="/popular">Popular</Link></p>
        <p><Link className="nav__link" to="/new">New</Link></p>
        {props.loggedIn ? <p>review</p> : null}
      </div>

      <h1 onClick={props.handleLogoClicked}>Olive</h1>

      <div className="nav__right">
        {props.loggedIn ? (
          <React.Fragment>
            <p><Link className="nav__link" to={`/user/${props.userId}`}>account</Link></p>
          </React.Fragment>
        ) : (
          <p><Link className="nav__link" to="/login">login</Link></p>
        )}
      </div>
    </header>
  )
}

header.propTypes = {
  loggedIn: PropTypes.bool,
  userId: PropTypes.number,
  handleLogoClicked: PropTypes.func.isRequired,
}

export default header
