import React from 'react'
import PropTypes from 'prop-types'

const userDetailNav = props => {
  const buttonsForArtist = () => {
    return (
      <React.Fragment>
        <p className="userDetail__nav__each" onClick={() => props.navClicked(2)}>Artist</p>
        {props.self.artist ? (
          <p className="userDetail__nav__each" onClick={() => props.navClicked(3)}>Upload</p>
        ) : (
          <p className="userDetail__nav__each">(upload)</p>
        )}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <p className="userDetail__nav__each" onClick={() => props.navClicked(0)}>Prime</p>
      <p className="userDetail__nav__each" onClick={() => props.navClicked(1)}>Buyer</p>
      {props.debuted ? buttonsForArtist() : null }
      <p className="userDetail__nav__each" onClick={() => props.navClicked(4)}>History</p>
      {/* <p className={props.tab === 5 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(5)}>Other</p> */}
    </React.Fragment>
  )
}

userDetailNav.propTypes = {
  debuted: PropTypes.bool.isRequired,
  self: PropTypes.shape({
    artist: PropTypes.bool
  }),
  navClicked: PropTypes.func.isRequired
}

export default userDetailNav
