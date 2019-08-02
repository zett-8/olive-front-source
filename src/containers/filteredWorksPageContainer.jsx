import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getNextFilteredWorks } from '../actions/workList'
import scrollHandler from '../utils/scrollHandler'

class FilteredWorks extends React.Component {

  componentDidMount() {
    document.title = 'Filtered Works | Olive'

    window.addEventListener('scroll', this.handleScroll)
    this.fetchNextWorks()
  }

  componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll) }

  fetchNextWorks = () => this.props.getNextFilteredWorks(this.props.worksList.filteredWorks.nextWorksApi)
  handleScroll = () => scrollHandler(this.fetchNextWorks)

  render() {
    if (this.props.worksList.filteredWorks.pristine) return null

    return <WorkList works={this.props.worksList.filteredWorks.contents} />
  }
}

export default connect(
  state => ({
    worksList: state.workList,
  }),
  dispatch => ({
    getNextFilteredWorks: url => dispatch(getNextFilteredWorks(url))
  })
)(FilteredWorks)
