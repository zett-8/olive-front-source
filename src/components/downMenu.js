import React from 'react'
import PropTypes from 'prop-types'

const downMenu = props => {
  return (
    <nav className={props.class ? 'down-menu' : 'down-menu down-menu__down'}>
      <p onClick={() => props.menuClicked('/popular')}>popular</p>
      <p onClick={() => props.menuClicked('/new')}>new</p>

      {props.loggedIn ? <p onClick={() => props.menuClicked('/review')}>review</p> : null}
      <hr />
      <p onClick={() => props.menuClicked('/about')}>About</p>
      <p onClick={() => props.menuClicked('/help')}>Help</p>
      <p onClick={() => props.menuClicked('/guideline')}>Guidelines</p>
      <p onClick={() => props.menuClicked('/privacy')}>Privacy</p>
      <p onClick={() => props.menuClicked('/contact')}>Contact</p>
    </nav>
  )
}

downMenu.propTypes = {
  class: PropTypes.bool,
  menuClicked: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
}

export default downMenu
