import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import WorkDetail from '../components/workDetail'

import { buyWork } from '../actions/workDetail'
import { getWorkDetail } from '../actions/workDetail'

class WorkdetailPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.notificationSystem = React.createRef()
    this.mainImageRef = React.createRef()
  }

  async componentWillMount() {
    await this.props.getDetail(this.props.match.params.id)

    const w = this.props.workDetail,
      login = this.props.loginStatus

    if (w.sold && (w.artist.user_id === login.user_id || w.buyer.user_id === login.user_id)) {
      this.setState({ bought: true })
    }
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
    if (this.props.loginStatus.user_id === this.props.workDetail.artist.user_id) {
      const notification = this.notificationSystem.current

      notification.addNotification({
        message: '自分の作品は購入できません',
        level: 'error',
        autoDismiss: 2,
        position: 'tc',
      })

      return null
    }

    const err = this.props.buyWork(this.props.loginStatus.user_id, this.props.workDetail.id)
    this.setState({ bought: true })
  }

  back = () => this.props.history.goBack()

  changeMainImage = (url) => this.mainImageRef.current.src = url

  render() {
    if (!Object.keys(this.props.workDetail).length) return null

    return (
      <div className="workDetail">
        <NotificationSystem ref={this.notificationSystem} />
        <WorkDetail
          detail={this.props.workDetail}
          buy={this.buy}
          back={this.back}
          bought={this.state.bought}
          mainImageRef={this.mainImageRef}
          changeMainImage={this.changeMainImage}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    workDetail: state.workDetail,
  }),
  dispatch => ({
    buyWork: (buyerId, workId) => dispatch(buyWork(buyerId, workId)),
    getDetail: id => dispatch(getWorkDetail(id)),
  })
)(WorkdetailPageContainer)
