import React from 'react'
import { connect } from 'react-redux'

import UserDetail from '../components/userDetail'

import { getUserDetail } from '../actions/userDetail'

class UserPageContainer extends React.Component {
  componentDidMount() {
    const ID = this.props.match.params.id

    if (ID === this.props.loginStatus.user_id + '') this.props.getUserDetail(ID)
  }

  render() {
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
