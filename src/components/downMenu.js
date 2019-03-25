import React from 'react'
import PropTypes from 'prop-types'

const downMenu = props => {
  return (
    <nav className={props.class ? 'down-menu' : 'down-menu down-menu__down'}>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/popular')}>Popular</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/new')}>New</p>

      {Object.keys(props.loginStatus).length && props.loginStatus.artist ? (
        <p className="typ_header_menu" onClick={() => props.menuClicked('/review')}>Seeds</p>
      ) : null}
      <hr />
      <p className="typ_header_menu" onClick={() => props.menuClicked('/about')}>About</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/help')}>Help</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/guideline')}>Guidelines</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/privacy')}>Privacy</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/contact')}>Contact</p>
    </nav>
  )
}

downMenu.propTypes = {
  class: PropTypes.bool,
  menuClicked: PropTypes.func.isRequired,
  loginStatus: PropTypes.shape({
    artist: PropTypes.bool,
  }),
}

export default downMenu
