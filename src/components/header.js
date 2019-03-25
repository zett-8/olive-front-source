import React from 'react'
import PropTypes from 'prop-types'

import AccountIMG from 'react-svg-loader!../assets/account.svg' // eslint-disable-line
import FavoriteIMG from 'react-svg-loader!../assets/heart.svg' // eslint-disable-line
import SearchIMG from 'react-svg-loader!../assets/search.svg' // eslint-disable-line

export const header = props => {
  return (
    <React.Fragment>
      <div role="button" tabIndex={0} onClick={props.burgerToggleClicked} className="nav__toggleButton">
        <button type="button" />
      </div>

      <div className="nav__left">
        <p onClick={() => props.menuClicked('/popular')}>Popular</p>
        <p onClick={() => props.menuClicked('/new')}>New</p>
        {Object.keys(props.loginStatus).length && props.loginStatus.artist ? (
          <p onClick={() => props.menuClicked('/review')}>Review</p>
        ) : null}
      </div>

      <h1 onClick={() => props.menuClicked('/')}>Olive</h1>

      <div className="nav__right">
        {Object.keys(props.loginStatus).length ? (
          // while login
          <React.Fragment>
            <p onClick={props.openModal}>
              <SearchIMG alt="search" />
            </p>
            <p onClick={() => props.menuClicked('/favorites')}>
              <FavoriteIMG alt="favorite" />
            </p>
            <p onClick={() => props.menuClicked(`/user/${props.loginStatus.uuid}`)}>
              <AccountIMG alt="account" />
            </p>
          </React.Fragment>
        ) : (
          // while not login
          <React.Fragment>
            <p onClick={props.openModal}>
              <SearchIMG alt="search" />
            </p>
            <p onClick={() => props.menuClicked('/login')}>
              <AccountIMG alt="account" />
            </p>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  )
}

header.propTypes = {
  loginStatus: PropTypes.shape({
    uuid: PropTypes.string,
    artist: PropTypes.bool,
  }),
  menuClicked: PropTypes.func.isRequired,
  burgerToggleClicked: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default header
