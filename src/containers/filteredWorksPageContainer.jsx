import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

class FilteredWorks extends React.Component {
  render() {
    if (this.props.worksList.filteredWorks.pristine) return null

    return (
      <div className="workList">
        <WorkList works={this.props.worksList.filteredWorks.contents} />
      </div>
    )
  }
}

export default connect(
  state => ({
    worksList: state.workList,
  }),
  null
)(FilteredWorks)
