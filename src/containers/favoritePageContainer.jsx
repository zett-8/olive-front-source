import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getFavoriteWorks } from '../actions/workList'

class FavoritePageContainer extends React.Component {
  componentWillMount() {
    if (this.props.workList.favoriteWorks.pristine) this.props.getFavoriteWorks(this.props.loginStatus.user_id)
  }

  render() {
    if (this.props.workList.favoriteWorks.pristine) return null

    return (
      <div className="workList">
        <WorkList works={this.props.workList.favoriteWorks.contents} />
      </div>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    workList: state.workList
  }),
  dispatch => ({
    getFavoriteWorks: userId => dispatch(getFavoriteWorks(userId)),
  })
)(FavoritePageContainer)
