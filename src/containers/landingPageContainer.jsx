import React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/loginStatus'
import getWorks from '../actions/works'

const Hello = () => 'hello world 2'

class LandingPageContainer extends React.Component {
  componentDidMount() {
    this.props.login()
  }

  render() {
    return <Hello/>
  }
}

export default connect(
  null,
  (dispatch) => ({
    login: () => dispatch(login())
  })
)(LandingPageContainer)
