import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/header'

class HeaderContainer extends React.Component {
  top = () => this.props.history.push('/')

  render() {
    return (
      <Header
        handleLogoClicked={this.top}
        loggedIn={Object.keys(this.props.loginStatus).length ? true : false}
        userId={this.props.loginStatus.user_id}
      />
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
  }),
  null
)(HeaderContainer)
