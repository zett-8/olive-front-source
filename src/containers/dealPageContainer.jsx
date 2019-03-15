import React from 'react'
import { connect } from 'react-redux'

import Progress from '../components/deal_progress'
import Info from '../components/deal_info'
import Messages from '../components/deal_messages'

import { getWorkDetail, changeWorkStatus } from '../actions/workDetail'
import { getBuyerInfo } from '../actions/buyerDetail'
import { clearMessage, getMessages, sendMessage } from '../actions/messages'

class DealPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      role: '',
    }
  }

  async componentWillMount() {
    await this.props.clearMessage()

    const params = this.props.match.params
    const self = this.props.loginStatus.user_id + ''

    // kick out stranger
    if (params.artist_id !== self && params.buyer_id !== self) {
      this.props.history.push('/')
    }

    await this.props.getWorkDetail(params.id)
    this.props.getMessages(this.props.workDetail.contents.id)
    this.props.getBuyerInfo(this.props.workDetail.contents.buyer.user_id)

    this.setState({ role: params.artist_id === self ? 'artist' : 'buyer' })
  }

  notifyPayment = () => {
    this.props.changeWorkStatus(this.props.workDetail.contents.id, 3)
  }

  notifyShipment = () => this.props.changeWorkStatus(this.props.workDetail.contents.id, 4)

  notifyReception = () => this.props.changeWorkStatus(this.props.workDetail.contents.id, 5)

  handleInputChanged = e => {
    e.preventDefault()
    this.setState({ message: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const w = this.props.workDetail.contents

    this.props.sendMessage(
      w.id,
      this.props.loginStatus.user_id,
      this.props.loginStatus.user_id === w.buyer.user_id ? w.artist.user_id : w.buyer.user_id,
      this.state.message
    )

    this.setState({ message: '' })
  }

  render() {
    if (this.props.messages.pristine) return null

    return (
      <div className="deal">
        <Progress
          work={this.props.workDetail.contents}
          role={this.state.role}
          notifyPayment={this.notifyPayment}
          notifyShipment={this.notifyShipment}
          notifyReception={this.notifyReception}
        />
        <Info work={this.props.workDetail.contents} buyerDetail={this.props.buyerDetail.contents} />
        <Messages
          messages={this.props.messages.contents}
          inputMessage={this.state.message}
          handleInputChanged={this.handleInputChanged}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    workDetail: state.workDetail,
    buyerDetail: state.buyerDetail,
    messages: state.messages,
  }),
  dispatch => ({
    getWorkDetail: id => dispatch(getWorkDetail(id)),
    getBuyerInfo: id => dispatch(getBuyerInfo(id)),
    changeWorkStatus: (workId, status) => dispatch(changeWorkStatus(workId, status)),
    clearMessage: () => dispatch(clearMessage()),
    getMessages: workId => dispatch(getMessages(workId)),
    sendMessage: (workId, sender, receiver, body) => dispatch(sendMessage(workId, sender, receiver, body)),
  })
)(DealPageContainer)
