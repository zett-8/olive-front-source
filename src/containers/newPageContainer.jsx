import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getWorks } from '../actions/works'


class NewPageContainer extends React.Component {
  componentDidMount() {
    this.props.getWorks()
  }

  render() {
    return (
      <React.Fragment>
        <p>New Works</p>
        <WorkList works={this.props.works}/>
      </React.Fragment>
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
