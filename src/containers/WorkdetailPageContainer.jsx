import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import WorkDetail from '../components/workDetail'

import { clearWorkDetail, getWorkDetail, buyWork, toggleFavorite } from '../actions/workDetail'

class WorkDetailPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.notificationSystem = React.createRef()
    this.mainImageRef = React.createRef()
  }

  async componentWillMount() {
    await this.props.clearWorkDetail()
    await this.props.getDetail(this.props.match.params.id)

    const w = this.props.workDetail.contents,
      login = this.props.loginStatus

    if (w.sold && (w.artist.user_id === login.user_id || w.buyer.user_id === login.user_id)) {
      this.setState({ bought: true })
    }
  }

  toggleFavorite = () => {
    if (!Object.keys(this.props.loginStatus).length) {
      const notification = this.notificationSystem.current

      notification.addNotification({
        message: 'お気に入りに追加するにはログインしてください',
        level: 'error',
        autoDismiss: 2,
        position: 'tc',
      })

      return
    }

    const err = this.props.toggleFavorite(this.props.workDetail.contents.id, this.props.loginStatus.user_id)
  }

  buy = () => {
    // buyer情報が登録できていない場合
    if (!this.props.loginStatus.buyer) {
      const notification = this.notificationSystem.current

      notification.addNotification({
        message: '購入者情報を登録してください',
        level: 'error',
        autoDismiss: 2,
        position: 'tc',
      })

      return null
    }
    // 自分の作品は購入できない
    if (this.props.loginStatus.user_id === this.props.workDetail.contents.artist.user_id) {
      const notification = this.notificationSystem.current

      notification.addNotification({
        message: '自分の作品は購入できません',
        level: 'error',
        autoDismiss: 2,
        position: 'tc',
      })

      return null
    }

    const err = this.props.buyWork(this.props.loginStatus.user_id, this.props.workDetail.contents.id)
    this.setState({ bought: true })
  }

  changeMainImage = url => (this.mainImageRef.current.style.backgroundImage = `url(${url})`)

  render() {
    if (this.props.workDetail.pristine) return null

    return (
      <React.Fragment>
        <NotificationSystem ref={this.notificationSystem} />
        <div className="workDetail">
          <WorkDetail
            self={this.props.loginStatus}
            detail={this.props.workDetail.contents}
            buy={this.buy}
            toggleFavorite={this.toggleFavorite}
            bought={this.state.bought}
            mainImageRef={this.mainImageRef}
            changeMainImage={this.changeMainImage}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    workDetail: state.workDetail,
  }),
  dispatch => ({
    clearWorkDetail: () => dispatch(clearWorkDetail()),
    buyWork: (buyerId, workId) => dispatch(buyWork(buyerId, workId)),
    toggleFavorite: (workId, userId) => dispatch(toggleFavorite(workId, userId)),
    getDetail: id => dispatch(getWorkDetail(id)),
  })
)(WorkDetailPageContainer)
