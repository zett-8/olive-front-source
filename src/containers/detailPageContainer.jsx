import React from 'react'
import { connect } from 'react-redux'

import WorkDetail from '../components/workDetail'

import { getDetail } from '../actions/detail'

class DetailPageContainer extends React.Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  back = () => this.props.history.goBack()

  render() {
    return (
      <React.Fragment>
        <WorkDetail detail={this.props.detail} back={this.back} />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    detail: state.detail
  }),
  dispatch => ({
    getDetail: (id) => dispatch(getDetail(id))
  })
)(DetailPageContainer)
