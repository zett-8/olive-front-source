import React from 'react'
import RegistrationDone from '../components/message/registration_done'
import RegistrationFail from '../components/message/registration_fail'
import RegistrationError from '../components/message/registration_error'

import SentEmail from '../components/message/sent-email'

class Message extends React.Component {
  componentWillMount() {
    this.setState({ type: this.props.match.params.type })
  }

  pageRenderer = () => {
    switch (this.state.type) {
      case 'registration-done':
        return <RegistrationDone history={this.props.history} />

      case 'registration-fail':
        return <RegistrationFail />

      case 'registration-error':
        return <RegistrationError />

      case 'sent-email':
        return <SentEmail />

      default:
        return null
    }
  }

  render() {
    return (
      <div className="messagePage">
        {this.pageRenderer()}
      </div>
    )
  }
}

export default Message
