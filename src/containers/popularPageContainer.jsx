import React from 'react'
import { connect } from 'react-redux'

import { getWorks } from '../actions/works'

class PopularPageContainer extends React.Component {
  componentDidMount() {
    this.props.getWorks()
  }

  render() {
    return (
      <React.Fragment>
        <p>Popular Works</p>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    works: state.works,
  }),
  dispatch => ({
    getWorks: () => dispatch(getWorks()),
  })
)(PopularPageContainer)
