import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getFavoriteWorks, getNextFavoriteWorks } from '../actions/workList'
import scrollHandler from '../utils/scrollHandler'

class FavoritePageContainer extends React.Component {
  async componentWillMount() {
    if (this.props.workList.favoriteWorks.pristine) {
      await this.props.getFavoriteWorks(this.props.loginStatus.user_id)
      this.props.getNextFavoriteWorks(this.props.workList.favoriteWorks.nextWorksApi)
    }

    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    document.title = 'Favorite Works | Olive'
  }

  componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll) }

  fetchNextWorks = () => {
    if (this.props.workList.favoriteWorks.stock.length)
      this.props.getNextFavoriteWorks(this.props.workList.favoriteWorks.nextWorksApi)
  }
  handleScroll = () => scrollHandler(this.fetchNextWorks)

  render() {
    if (this.props.workList.favoriteWorks.pristine) return null

    return <WorkList works={this.props.workList.favoriteWorks.contents} />
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    workList: state.workList
  }),
  dispatch => ({
    getFavoriteWorks: userId => dispatch(getFavoriteWorks(userId)),
    getNextFavoriteWorks: url => dispatch(getNextFavoriteWorks(url))
  })
)(FavoritePageContainer)
