import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import UserDetail from '../components/userDetail'

import { getUserDetail } from '../actions/userDetail'

class UserPageContainer extends React.Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.match.params.id)
  }

  render() {
    // login
    if (!Object.keys(this.props.loginStatus).length) return <Redirect to='/'/>

    if (!Object.keys(this.props.userDetail).length) return null

    return (
      <React.Fragment>
        <p>user page</p>
        <UserDetail detail={this.props.userDetail} />
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
    getUserDetail: id => dispatch(getUserDetail(id)),
  })
)(UserPageContainer)
