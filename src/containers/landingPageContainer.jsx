import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login } from '../actions/loginStatus'

class LandingPageContainer extends React.Component {
  componentDidMount() {
    console.log(process.env.NODE_ENV)
  }

  render() {
    return (
      <React.Fragment>
        <h1>Olive</h1>
        <Link to='/login'>login</Link>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    login: () => dispatch(login())
  })
)(LandingPageContainer)
