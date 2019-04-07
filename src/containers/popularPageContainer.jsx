import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getPopularWorks, getNextPopularWoks } from '../actions/workList'
import scrollHandler from '../utils/scrollHandler'

class PopularPageContainer extends React.Component {
  async componentDidMount() {
    if (this.props.workList.popularWorks.pristine) {
      await this.props.getPopularWorks()
      this.fetchNextWorks()
    }

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll) }

  fetchNextWorks = () => this.props.getNextPopularWoks(this.props.workList.popularWorks.nextWorksApi)
  handleScroll = () =>scrollHandler(this.fetchNextWorks)

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
    getNextPopularWoks: url => dispatch(getNextPopularWoks(url))
  })
)(PopularPageContainer)
