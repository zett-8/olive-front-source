import React from 'react'
import PropTypes from 'prop-types'

const downMenu = props => {
  const userMenu = () => (
    <React.Fragment>
      <div className="down-menu__user">
        <div
          className="down-menu__user__icon"
          style={{ backgroundImage: `url(${props.userDetail.icon})` }}
        />
        <p className="typ_header_menu down-menu__user__email">{props.loginStatus.email}</p>
      </div>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 0)}>Prime</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 1)}>Buyer</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 4)}>History</p>
      {props.userDetail.debuted ? (
        <React.Fragment>
          <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 2)}>Artist</p>
          {props.userDetail.ready_as_artist ? (
            <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 3)}>Upload</p>
          ) : <p className="typ_header_menu" style={{ color: 'gray' }} onClick={() => props.menuClicked('/user', 3)}>(Upload)</p>}
        </React.Fragment>
      ) : null}

      <hr />
    </React.Fragment>
  )

  return (
    <nav className={props.class ? 'down-menu' : 'down-menu down-menu__down'}>
      <div className="down-menu__works">
        <p className="typ_header_menu" onClick={() => props.menuClicked('/popular')}>Popular</p>
        <p className="typ_header_menu" onClick={() => props.menuClicked('/new')}>New</p>
      </div>
      {/* {Object.keys(props.loginStatus).length && props.loginStatus.artist ? ( */}
      {/* <p className="typ_header_menu" onClick={() => props.menuClicked('/review')}>Seeds</p> */}
      {/* ) : null} */}
      <hr />
      {props.loginStatus.email ? userMenu() : null}

      <p className="typ_header_menu" onClick={() => props.menuClicked('/about')}>About</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/help')}>Help</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/terms')}>Terms</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/privacy')}>Privacy</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/contact')}>Contact</p>
    </nav>
  )
}

downMenu.propTypes = {
  class: PropTypes.bool,
  menuClicked: PropTypes.func.isRequired,
  loginStatus: PropTypes.shape({
    email: PropTypes.string,
    artist: PropTypes.bool,
  }),
  userDetail: PropTypes.shape({
    icon: PropTypes.string,
    debuted: PropTypes.bool,
    ready_as_artist: PropTypes.bool
  })
}

export default downMenu
