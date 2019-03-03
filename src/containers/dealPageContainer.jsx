import React from 'react'
import { connect } from 'react-redux'

import Messages from '../components/messages'

import { getWorkDetail } from '../actions/workDetail'
import { clearMessage, getMessages, sendMessage } from '../actions/messages'

class DealPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
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

    await this.props.getDetail(params.id)
    this.props.getMessages(this.props.workDetail.id)
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

  render() {
    if (this.props.messages.pristine) return null

    return (
      <div className="deal">
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
    messages: state.messages,
  }),
  dispatch => ({
    getDetail: id => dispatch(getWorkDetail(id)),
    clearMessage: () => dispatch(clearMessage()),
    getMessages: workId => dispatch(getMessages(workId)),
    sendMessage: (workId, sender, receiver, body) => dispatch(sendMessage(workId, sender, receiver, body)),
  })
)(DealPageContainer)
