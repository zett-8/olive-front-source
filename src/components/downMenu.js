import React from 'react'
import PropTypes from 'prop-types'

const downMenu = props => {
  const userMenuRenderer = () => (
    <React.Fragment>
      <div className="down-menu__user">
        <div
          role="button"
          tabIndex={0}
          className="down-menu__user__icon"
          style={{ backgroundImage: `url(${props.userDetail.icon})`, outline: 'none', cursor: 'pointer' }}
          onClick={() => props.menuClicked('/user', 0)}
        />
        <p className="typ_header_menu down-menu__user__email" onClick={() => props.menuClicked('/user', 0)}>{props.loginStatus.email}</p>
      </div>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 0)}>Settings</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 1)}>Order history</p>
      {props.userDetail.debuted ? (
        <React.Fragment>
          <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 2)}>Artist profile</p>
          {props.userDetail.ready_as_artist ? (
            <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 3)}>Upload</p>
          ) : <p className="typ_header_menu" style={{ color: 'gray' }} onClick={() => null}>(Upload)</p>
          }
          <p className="typ_header_menu" onClick={() => props.menuClicked(`/artist/${props.userDetail.id}`)}>My page</p>
          <p className="typ_header_menu" onClick={() => props.menuClicked('/user', 4)}>Invite other artist</p>
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
      {props.loginStatus.email ? userMenuRenderer() : null}

      <p className="typ_header_menu" onClick={() => props.menuClicked('/about')}>About</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/faq')}>FAQ</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/terms')}>Terms</p>
      <p className="typ_header_menu" onClick={() => props.menuClicked('/privacy')}>Privacy</p>
      <p className="typ_header_menu"><a href="https://twitter.com/olive_gallery" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      <p className="typ_header_menu"><a href="https://www.facebook.com/Olive-473729523378839" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      <p className="typ_header_menu"><a href="https://www.instagram.com/olive_art_gallery" target="_blank" rel="noopener noreferrer">Instagram</a></p>
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
    id: PropTypes.number,
    icon: PropTypes.string,
    debuted: PropTypes.bool,
    ready_as_artist: PropTypes.bool
  })
}

export default downMenu
