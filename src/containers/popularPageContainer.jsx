import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getPopularWorks } from '../actions/workList'

class PopularPageContainer extends React.Component {
  componentDidMount() {
    if (this.props.workList.popularWorks.pristine) this.props.getPopularWorks()
  }

  render() {
    if (this.props.workList.popularWorks.pristine) return null

    return <WorkList works={this.props.workList.popularWorks.contents} />
  }
}

export default connect(
  state => ({
    workList: state.workList
  }),
  dispatch => ({
    getPopularWorks: () => dispatch(getPopularWorks()),
  })
)(PopularPageContainer)
