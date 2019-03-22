import React from 'react'
import PropTypes from 'prop-types'

const userDetailNav = props => {
  return (
    <React.Fragment>
      <p className={props.tab === 0 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(0)}>Prime</p>
      <p className={props.tab === 1 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(1)}>Buyer</p>
      <p className={props.tab === 2 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(2)}>Artist</p>
      <p className={props.tab === 3 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(3)}>Upload</p>
      <p className={props.tab === 4 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(4)}>History</p>
      <p className={props.tab === 5 ? 'userDetail__nav__current' : 'userDetail__nav__others'} onClick={() => props.navClicked(5)}>Other</p>
    </React.Fragment>
  )
}

userDetailNav.propTypes = {
  navClicked: PropTypes.func.isRequired,
  tab: PropTypes.number
}

export default userDetailNav
