import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getFavoriteWorks } from '../actions/works'

class FavoritePageContainer extends React.Component {
  componentWillMount() {
    this.props.getFavoriteWorks(this.props.loginStatus.user_id)
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
    loginStatus: state.loginStatus,
    works: state.works,
  }),
  dispatch => ({
    getFavoriteWorks: userId => dispatch(getFavoriteWorks(userId)),
  })
)(FavoritePageContainer)
