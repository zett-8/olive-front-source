import React from 'react'
import PropTypes from 'prop-types'

const userDetailNav = props => {
  const buttonsForArtist = () => {
    return (
      <React.Fragment>
        <p className="userDetail__nav__each" onClick={() => props.navClicked(2)}>Artist profile</p>
        {props.self.artist ? (
          <p className="userDetail__nav__each" onClick={() => props.navClicked(3)}>Upload</p>
        ) : (
          <p className="userDetail__nav__each" style={{ color: 'gray' }}>(upload)</p>
        )}
        <p className="userDetail__nav__each" onClick={() => props.goToMyPage()}>My page</p>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <p className="userDetail__nav__each" onClick={() => props.navClicked(0)}>Settings</p>
      <p className="userDetail__nav__each" onClick={() => props.navClicked(1)}>Order history</p>
      {props.debuted ? buttonsForArtist() : null }
      {/* <p className={props.tab === 5 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(5)}>Other</p> */}
    </React.Fragment>
  )
}

userDetailNav.propTypes = {
  debuted: PropTypes.bool.isRequired,
  self: PropTypes.shape({
    artist: PropTypes.bool
  }),
  navClicked: PropTypes.func.isRequired,
  goToMyPage: PropTypes.func.isRequired, // eslint-disable-line
}

export default userDetailNav
