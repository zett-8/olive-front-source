import React from 'react'
import { connect } from 'react-redux'

import Header from '../containers/headerContainer'

class DetailPageContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <p>detail</p>
      </React.Fragment>
    )
  }
}

export default connect()(DetailPageContainer)
