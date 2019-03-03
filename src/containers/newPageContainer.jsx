import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getWorks } from '../actions/works'


class NewPageContainer extends React.Component {
  componentDidMount() {
    this.props.getWorks()
  }

  render() {
    if(this.props.works.pristine) return null

    return (
      <div className="workList">
        <WorkList works={this.props.works.contents}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    works: state.works
  }),
  dispatch => ({
    getWorks: () => dispatch(getWorks()),
  })
)(NewPageContainer)
