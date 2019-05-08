import React from 'react'
import RegistrationDone from '../components/message/registration_done'
import RegistrationFail from '../components/message/registration_fail'
import RegistrationError from '../components/message/registration_error'
import SentEmail from '../components/message/sent-email'
import Contact from '../components/message/contact'

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

      case 'contact':
        return <Contact history={this.props.history} />

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
