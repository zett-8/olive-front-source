import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'
import FormValidation from '../utils/formValidation'
import { login } from '../actions/loginStatus'

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()

    this.state = {
      email: '',
      password: '',
      login: true,
    }
  }

  switch = () => {
    this.setState({ login: !this.state.login })
  }

  signUp = async e => {
    e.preventDefault()
  }

  login = async e => {
    e.preventDefault()

    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 2, position: 'tc', message: '' }

    const message = FormValidation(this.state.email, this.state.password)
    if (message) {
      body.message = message
      notification.addNotification(body)

      return false
    }

    const error = await this.props.login(this.state.email, this.state.password)

    if (!error) {
      this.props.history.push('/')
      return
    }

    if (error.response.status === 404) body.message = '存在しないユーザーです'
    if (error.response.status === 400) body.message = 'パスワードが違います'
    notification.addNotification(body)
  }

  handleInputChanged = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <React.Fragment>
        <NotificationSystem ref={this.notificationSystem} />
        {this.state.login ? (
          <LoginForm
            login={this.login}
            handleInputChanged={this.handleInputChanged}
            email={this.state.email}
            password={this.state.password}
            handleSwitch={this.switch}
          />
        ) :
          <SignUpForm
            signUp={this.signUp}
            handleInputChanged={this.handleInputChanged}
            email={this.state.email}
            password={this.state.password}
            handleSwitch={this.switch}
          />
        }
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
