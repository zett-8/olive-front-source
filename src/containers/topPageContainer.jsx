import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions/loginStatus'
import { getWorks } from '../actions/works'

const T = () => 'Top Page'

class TopPageContainer extends React.Component {
  componentDidMount() {
    this.props.getWorks()
  }

  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <React.Fragment>
        <T />
        <p onClick={this.logout}>logout</p>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    works: state.works
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    getWorks: () => dispatch(getWorks()),
  })
)(TopPageContainer)
