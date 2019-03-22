import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'
import { FormValidation } from '../utils/Validator'
import API from '../utils/api'

import { signUp } from '../actions/loginStatus'
import { login } from '../actions/loginStatus'

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()

    this.state = {
      email: '',
      password: '',
      invitation: '',
      login: true,
    }
  }

  componentWillMount() {
    if (Object.keys(this.props.loginStatus).length) this.props.history.push(`/user/${this.props.loginStatus.uuid}`)
  }

  switch = () => {
    this.setState({ login: !this.state.login })
  }

  handleForgetPassword = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 2, position: 'tc', message: '' }

    const message = FormValidation(this.state.email, 'pass1234')
    if (message) {
      body.message = message
      notification.addNotification(body)
      return null
    }

    const err = await API.checkUserEmail(this.state.email)
    if (err) {
      body.message = '登録されていないメールアドレスです'
      notification.addNotification(body)
      return null
    }

    this.props.history.push(`/password-reset/${this.state.email}`)
  }

  signUp = async e => {
    e.preventDefault()

    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 2, position: 'tc', message: '' }

    const message = FormValidation(this.state.email, this.state.password)
    if (message) {
      body.message = message
      notification.addNotification(body)

      return false
    }

    if (this.state.invitation) {
      const err = await API.checkInvitationCode(this.state.invitation)
      if (err) {
        body.message = '無効な招待コードです'
        notification.addNotification(body)
        return null
      }
    }

    const error = await this.props.signUp(this.state.email, this.state.password, this.state.invitation || 'non')

    if (!error) {
      console.log('OK')
      return
    }

    if (error.response.status === 404) body.message = 'すでに登録されているユーザーです'
    notification.addNotification(body)
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
      <div className="form_content">
        <NotificationSystem ref={this.notificationSystem} />
        <div className="form_content__form">
        {this.state.login ? (
          <LoginForm
            login={this.login}
            handleInputChanged={this.handleInputChanged}
            email={this.state.email}
            password={this.state.password}
            handleSwitch={this.switch}
            handleForgetPassword={this.handleForgetPassword}
          />
        ) : (
          <SignUpForm
            signUp={this.signUp}
            handleInputChanged={this.handleInputChanged}
            email={this.state.email}
            password={this.state.password}
            invitation={this.state.invitation}
            handleSwitch={this.switch}
          />
        )}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus
  }),
  dispatch => ({
    signUp: (email, password, invitationCode) => dispatch(signUp(email, password, invitationCode)),
    login: (email, password) => dispatch(login(email, password)),
  })
)(LoginPageContainer)
