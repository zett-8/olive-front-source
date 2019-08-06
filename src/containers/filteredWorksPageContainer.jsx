import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getNextFilteredWorks, getFilteredWorks } from '../actions/workList'
import scrollHandler from '../utils/scrollHandler'

class FilteredWorks extends React.Component {

  async componentDidMount() {
    document.title = 'Filtered Works | Olive'

    const q = this.props.match.params.info
    await this.props.getFilteredWorks(q)
    this.props.getNextFilteredWorks(this.props.workList.filteredWorks.nextWorksApi)

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll) }

  fetchNextWorks = () => {
    if (this.props.workList.filteredWorks.stock.length)
      this.props.getNextFilteredWorks(this.props.workList.filteredWorks.nextWorksApi)
  }
  handleScroll = () => scrollHandler(this.fetchNextWorks)

  render() {
    if (this.props.workList.filteredWorks.pristine) return null

    return <WorkList works={this.props.workList.filteredWorks.contents} />
  }
}

export default connect(
  state => ({
    workList: state.workList,
  }),
  dispatch => ({
    getFilteredWorks: q => dispatch(getFilteredWorks(q)),
    getNextFilteredWorks: url => dispatch(getNextFilteredWorks(url))
  })
)(FilteredWorks)
