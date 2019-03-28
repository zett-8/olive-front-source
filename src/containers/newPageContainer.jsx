import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getNewWorks } from '../actions/newWorks'


class NewPageContainer extends React.Component {
  componentDidMount() {
    if (this.props.newWorks.pristine) this.props.getNewWorks()
  }

  render() {
    if(this.props.newWorks.pristine) return null

    return (
      <div className="workList">
        <WorkList works={this.props.newWorks.contents}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    newWorks: state.newWorks
  }),
  dispatch => ({
    getNewWorks: () => dispatch(getNewWorks()),
  })
)(NewPageContainer)
