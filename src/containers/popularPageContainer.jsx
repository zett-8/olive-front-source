import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getPopularWorks } from '../actions/popularWorks'

class PopularPageContainer extends React.Component {
  componentDidMount() {
    if (this.props.popularWorks.pristine) this.props.getPopularWorks()
  }

  render() {
    if (this.props.popularWorks.pristine) return null

    return (
      <div className="workList">
        <WorkList works={this.props.popularWorks.contents} />
      </div>
    )
  }
}

export default connect(
  state => ({
    popularWorks: state.popularWorks
  }),
  dispatch => ({
    getPopularWorks: () => dispatch(getPopularWorks()),
  })
)(PopularPageContainer)
