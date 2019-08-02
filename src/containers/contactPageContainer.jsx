import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'
import ContactForm from '../components/contactForm'

import Api from '../utils/api'
import { errorNotificationBody } from '../utils/notification'

class ContactPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()

    this.state = {
      loggedIn: false,
      email: '',
      type: '',
      message: '',
    }
  }

  componentDidMount() {
    document.title = '問い合わせ | Olive'

    if (Object.keys(this.props.loginStatus).length) this.setState({ loggedIn: true, email: this.props.loginStatus.email })
  }

  contactFormIsTyped = e => this.setState({ [e.target.name]: e.target.value })

  sendContact = async e => {
    e.preventDefault()

    const formData = new FormData()

    Object.keys(this.state).forEach(k => formData.append(k, this.state[k]))

    const err = await Api.sendContact(formData)
      .then(() => null)
      .catch(err => err)

    if (err) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      return null
    }

    this.setState({
      email: '',
      type: '',
      message: '',
    })

    this.props.history.push('/message/contact/')
  }

  render() {
    return (
      <React.Fragment>
        <NotificationSystem ref={this.notificationSystem} />
        <ContactForm
          loggedIn={this.state.loggedIn}
          email={this.state.email}
          type={this.state.type}
          message={this.state.message}
          contactFormIsTyped={this.contactFormIsTyped}
          sendContact={this.sendContact}
        />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus
  }),
  null
)(ContactPageContainer)
