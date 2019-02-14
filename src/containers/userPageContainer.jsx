import React from 'react'
import { connect } from 'react-redux'

import UserDetail from '../components/userDetail'

import { getUserDetail } from '../actions/userDetail'
import { logout } from '../actions/loginStatus'

class UserPageContainer extends React.Component {
  componentDidMount() {
    const ID = this.props.match.params.id

    if (ID === this.props.loginStatus.user_id + '') this.props.getUserDetail(ID)
  }

  logout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    if (!Object.keys(this.props.userDetail).length) return null

    return (
      <React.Fragment>
        <UserDetail detail={this.props.userDetail} handleLogout={this.logout} />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    userDetail: state.userDetail,
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    getUserDetail: id => dispatch(getUserDetail(id)),
  })
)(UserPageContainer)
