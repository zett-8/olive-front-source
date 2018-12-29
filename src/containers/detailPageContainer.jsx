import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import WorkDetail from '../components/workDetail'
import Messages from '../components/messages'

import { buyWork } from '../actions/workDetail'
import { getWorkDetail } from '../actions/workDetail'
import { getMessages } from '../actions/messages'
import { sendMessage } from '../actions/messages'

class DetailPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()
    this.state = {
      message: '',
    }
  }

  async componentWillMount() {
    await this.props.getDetail(this.props.match.params.id)

    const w = this.props.workDetail, login = this.props.loginStatus

    if (w.sold && (w.artist.user_id === login.user_id || w.buyer.user_id === login.user_id)) {
      this.props.getMessages(this.props.workDetail.id)
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

  handleInputChanged = e => {
    e.preventDefault()
    this.setState({ message: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const w = this.props.workDetail

    this.props.sendMessage(
      w.id,
      this.props.loginStatus.user_id,
      this.props.loginStatus.user_id === w.buyer.user_id ? w.artist.user_id : w.buyer.user_id,
      this.state.message
    )

    this.setState({ message: '' })
  }

  back = () => this.props.history.goBack()

  render() {
    if (!Object.keys(this.props.workDetail).length) return null

    return (
      <React.Fragment>
        <NotificationSystem ref={this.notificationSystem} />
        <WorkDetail detail={this.props.workDetail} buy={this.buy} back={this.back} />
        {this.state.bought ? (
          <Messages
            messages={this.props.messages}
            inputMessage={this.state.message}
            handleInputChanged={this.handleInputChanged}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    workDetail: state.workDetail,
    messages: state.messages,
  }),
  dispatch => ({
    buyWork: (buyerId, workId) => dispatch(buyWork(buyerId, workId)),
    getDetail: id => dispatch(getWorkDetail(id)),
    getMessages: workId => dispatch(getMessages(workId)),
    sendMessage: (workId, sender, receiver, body) => dispatch(sendMessage(workId, sender, receiver, body)),
  })
)(DetailPageContainer)
