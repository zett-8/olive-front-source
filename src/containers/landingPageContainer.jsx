import React from 'react'
import { connect } from 'react-redux'

import Olive from '../assets/olive.jpg'

class LandingPageContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p style={{ textAlign: 'center'}}><img src={Olive} alt="" style={{ margin: '0 auto', width: '80vw'}} /></p>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  null
)(LandingPageContainer)
