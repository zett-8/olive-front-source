import React from 'react'
import { connect } from 'react-redux'

import Olive from '../assets/olive.jpg'

class LandingPageContainer extends React.Component {
  render() {
    return (
      <div className="landing">
        <p className="landing__olive-tree">
          <img className="landing__olive-tree__img" src={Olive} alt="" />
        </p>
      </div>
    )
  }
}

export default connect(
  null,
  null
)(LandingPageContainer)
