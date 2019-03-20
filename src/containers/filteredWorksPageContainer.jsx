import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getFilteredWorks } from '../actions/works'

class FilteredWorks extends React.Component {
  componentWillMount() {

  }


  render() {
    if (this.props.works.pristine) return null

    return (

      <div className="workList">
        <WorkList works={this.props.works.contents} />
      </div>
    )
  }
}

export default connect(
  state => ({
    works: state.works,
  }),
  dispatch => ({
    getFilteredWorks: q => dispatch(getFilteredWorks(q))
  })
)(FilteredWorks)
