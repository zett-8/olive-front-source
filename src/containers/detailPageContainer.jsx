import React from 'react'
import { connect } from 'react-redux'

import WorkDetail from '../components/workDetail'

import { getWorkDetail } from '../actions/workDetail'

class DetailPageContainer extends React.Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  back = () => this.props.history.goBack()

  render() {
    if (!Object.keys(this.props.workDetail).length) return null

    return (
      <React.Fragment>
        <WorkDetail detail={this.props.workDetail} back={this.back} />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    workDetail: state.workDetail
  }),
  dispatch => ({
    getDetail: (id) => dispatch(getWorkDetail(id))
  })
)(DetailPageContainer)
