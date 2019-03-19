import React from 'react'
import { connect } from 'react-redux'

import Progress from '../components/deal_progress'
import Info from '../components/deal_info'
import Messages from '../components/deal_messages'
import Page404 from '../components/404'

import { getWorkDetail, changeWorkStatus } from '../actions/workDetail'
import { getBuyerInfo } from '../actions/buyerDetail'
import { clearMessage, getMessages, sendMessage } from '../actions/messages'

class DealPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      verified: false,
      message: '',
      role: '',
    }
  }

  async componentWillMount() {
    await this.props.clearMessage()

    const { workId, clientId, myUUID } = this.props.match.params
    const self = this.props.loginStatus

    // kick out stranger
    if (myUUID !== self.uuid) this.props.history.push('/')

    const err = await this.props.getWorkDetail(workId)
    const work = this.props.workDetail.contents

    if (!err && (work.buyer.id === parseInt(clientId, 10) || work.artist.id === parseInt(clientId, 10)))
      this.setState({ verified: true })

    this.props.getMessages(this.props.workDetail.contents.id)
    this.props.getBuyerInfo(this.props.workDetail.contents.buyer.id)

    this.setState({ role: work.buyer.id === self.user_id ? 'buyer' : 'artist' })
  }

  notifyPayment = () => this.props.changeWorkStatus(this.props.workDetail.contents.id, 3)
  notifyShipment = () => this.props.changeWorkStatus(this.props.workDetail.contents.id, 4)
  notifyReception = () => this.props.changeWorkStatus(this.props.workDetail.contents.id, 5)

  messageTyped = e => this.setState({ message: e.target.value })

  sendMessage = e => {
    e.preventDefault()
    const work = this.props.workDetail.contents

    this.props.sendMessage(
      work.id,
      this.props.loginStatus.user_id,
      this.props.loginStatus.user_id === work.buyer.id ? work.artist.id : work.buyer.id,
      this.state.message
    )

    this.setState({ message: '' })
  }

  render() {
    if (!this.state.verified) return <Page404 />

    if (this.props.messages.pristine || this.props.buyerDetail.pristine) return null

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
          messageTyped={this.messageTyped}
          sendMessage={this.sendMessage}
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
