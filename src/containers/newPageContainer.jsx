import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getNewWorks, getNextNewWorks } from '../actions/workList'
import scrollHandler from '../utils/scrollHandler'

class NewPageContainer extends React.Component {
  async componentDidMount() {
    // document.title = 'New Works | Olive'

    if (this.props.workList.newWorks.pristine) {
      await this.props.getNewWorks()
      this.fetchNextWorks()
    }

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll) }

  fetchNextWorks = () => this.props.getNextNewWorks(this.props.workList.newWorks.nextWorksApi)
  handleScroll = () => scrollHandler(this.fetchNextWorks)

  render() {
    if(this.props.workList.newWorks.pristine) return null

    return <WorkList works={this.props.workList.newWorks.contents}/>
  }
}

export default connect(
  state => ({
    workList: state.workList
  }),
  dispatch => ({
    getNewWorks: () => dispatch(getNewWorks()),
    getNextNewWorks: url => dispatch(getNextNewWorks(url))
  })
)(NewPageContainer)
