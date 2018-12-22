import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const header = props => {
  return (
    <header>
      <h1 onClick={props.handleLogoClicked}>Olive</h1>
      <nav>
        <ul>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          {props.loggedIn ? (
            <React.Fragment>
              <li>
                <p>review</p>
              </li>
              <li>
                <Link to={`/user/${props.userId}`}>account</Link>
              </li>
              <li>
                <p onClick={props.handleLogout}>Logout</p>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to="/login">login</Link>
            </li>
          )}
        </ul>
      </nav>
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
