import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getNewWorks } from '../actions/workList'


class NewPageContainer extends React.Component {
  componentDidMount() {
    if (this.props.workList.newWorks.pristine) this.props.getNewWorks()
  }

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
  })
)(NewPageContainer)
