import React from 'react'
import LandingPageContainer from '../containers/landingPageContainer'

class Auth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: true
    }
  }

  render() {
    if (this.state.test) return <LandingPageContainer/>
    return this.props.children
  }
}

export default Auth
