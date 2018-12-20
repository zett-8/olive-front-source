import React from 'react'
import { connect } from 'react-redux'

import { getUserDetail } from '../actions/userDetail'

class UserPageContainer extends React.Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.match.params.id)
  }

  render() {
    return <p>user page</p>
  }
}

export default connect(
  state => ({
    userDetail: state.userDetail,
  }),
  dispatch => ({
    getUserDetail: id => dispatch(getUserDetail(id)),
  })
)(UserPageContainer)
