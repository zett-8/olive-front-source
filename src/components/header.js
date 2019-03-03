import React from 'react'
import { Link } from 'react-router-dom'
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
      </div>

      <h1 onClick={props.handleLogoClicked}>Olive</h1>

      <div className="nav__right">
        {props.loggedIn ? (
          // while login
          <React.Fragment>
            <p onClick={props.openModal}>
              <SearchIMG alt="search" />
            </p>
            <p>
              <Link className="nav__link" to="/favorites">
                <FavoriteIMG alt="favorite" />
              </Link>
            </p>
            <p>
              <Link className="nav__link" to={`/user/${props.userId}`}>
                <AccountIMG alt="account" />
              </Link>
            </p>
          </React.Fragment>
        ) : (
          // while not login
          <React.Fragment>
            <p onClick={props.openModal}>
              <SearchIMG alt="search" />
            </p>
            <p>
              <Link className="nav__link" to="/login">
                <AccountIMG className="account" alt="account" />
              </Link>
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
  handleLogoClicked: PropTypes.func.isRequired,
  burgerToggleClicked: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default header
