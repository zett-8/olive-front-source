import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const downMenu = props => {
  return (
    <nav className={props.class ? 'down-menu' : 'down-menu down-menu__down'}>
      <p>
        <Link className="nav__link" to="/popular">
          Popular
        </Link>
      </p>
      <p>
        <Link className="nav__link" to="/new">
          New
        </Link>
      </p>
      {props.loggedIn ? <p>review</p> : null}
      <hr />
      <p>About</p>
      <p>Help</p>
      <p>Guidelines</p>
      <p>Privacy</p>
      <p>Contact</p>
    </nav>
  )
}

downMenu.propTypes = {
  class: PropTypes.bool,
  loggedIn: PropTypes.bool
}

export default downMenu
