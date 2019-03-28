import React from 'react'
import { connect } from 'react-redux'

class LandingPageContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Welcome to Olive</h2>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  null
)(LandingPageContainer)
