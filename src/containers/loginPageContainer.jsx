import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import LoginForm from '../components/loginForm'
import { login } from '../actions/loginStatus'

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()

    this.state = {
      email: '',
      password: '',
    }
  }

  login = async e => {
    e.preventDefault()
    const error = await this.props.login(this.state.email, this.state.password)

    if (!error) {
      this.props.history.push('/')
      return
    }

    const notification = this.notificationSystem.current

    if (error.response.status === 404) {
      notification.addNotification({
        message: '存在しないユーザーです',
        level: 'error',
        autoDismiss: 2,
        position: 'tc'
      })
    }

    if (error.response.status === 400) {
      notification.addNotification({
        message: 'パスワードが違います',
        level: 'error',
        autoDismiss: 2,
        position: 'tc'
      })
    }
  }

  handleInputChanged = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <React.Fragment>
        <NotificationSystem ref={this.notificationSystem} />
        <LoginForm
          login={this.login}
          handleInputChanged={this.handleInputChanged}
          email={this.state.email}
          password={this.state.password}
        />
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
  })
)(LoginPageContainer)
