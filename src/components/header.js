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
        <p onClick={() => props.menuClicked('/popular')}>popular</p>
        <p onClick={() => props.menuClicked('/new')}>new</p>
        {props.loggedIn ? <p onClick={() => props.menuClicked('/review')}>review</p> : null}
      </div>

      <h1 onClick={() => props.menuClicked('/')}>Olive</h1>

      <div className="nav__right">
        {props.loggedIn ? (
          // while login
          <React.Fragment>
            <p onClick={props.openModal}>
              <SearchIMG alt="search" />
            </p>
            <p onClick={() => props.menuClicked('/favorites')}>
              <FavoriteIMG alt="favorite" />
            </p>
            <p onClick={() => props.menuClicked(`/user/${props.userId}`)}>
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
  loggedIn: PropTypes.bool,
  userId: PropTypes.number,
  menuClicked: PropTypes.func.isRequired,
  burgerToggleClicked: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default header
