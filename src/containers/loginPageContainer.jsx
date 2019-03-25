import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'
import { FormValidation } from '../utils/Validator'
import { errorNotificationBody } from '../utils/notification'

import API from '../utils/api'
import { signUp, login } from '../actions/loginStatus'
import { getUserDetail } from '../actions/userDetail'

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

    const message = FormValidation(this.state.email, 'pass1234')
    if (message) {
      errorNotificationBody.title = 'Something is wrong!'
      errorNotificationBody.message = message
      notification.addNotification(errorNotificationBody)
      return null
    }

    const err = await API.checkUserEmail(this.state.email)
    if (err) {
      errorNotificationBody.title = 'Something is wrong!'
      errorNotificationBody.message = '登録されていないメールアドレスです'
      notification.addNotification(errorNotificationBody)
      return null
    }

    this.props.history.push(`/password-reset/${this.state.email}`)
  }

  signUp = async e => {
    e.preventDefault()

    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 4, position: 'tc', message: '' }

    const message = FormValidation(this.state.email, this.state.password)
    if (message) {
      errorNotificationBody.title = 'Something is wrong!'
      errorNotificationBody.message = message
      notification.addNotification(errorNotificationBody)
      return null
    }

    if (this.state.invitation) {
      const err = await API.checkInvitationCode(this.state.invitation)
      if (err) {
        errorNotificationBody.title = 'Something is wrong!'
        errorNotificationBody.message = err.response.data.message
        notification.addNotification(errorNotificationBody)
        return null
      }
    }

    const error = await this.props.signUp(this.state.email, this.state.password, this.state.invitation || 'non')
    if (error) {
      errorNotificationBody.title = 'Something is wrong!'
      errorNotificationBody.message = error.response.data.message
      notification.addNotification(errorNotificationBody)
      return null
    }

    console.log('OK')
  }

  login = async e => {
    e.preventDefault()

    const notification = this.notificationSystem.current

    const message = FormValidation(this.state.email, this.state.password)
    if (message) {
      errorNotificationBody.title = 'Something is wrong!'
      errorNotificationBody.message = message
      notification.addNotification(errorNotificationBody)
      return null
    }

    const err = await this.props.login(this.state.email, this.state.password)
    if (err) {
      errorNotificationBody.title = 'エラーID: ' + err.response.data.errorID
      errorNotificationBody.message = err.response.data.message
      notification.addNotification(errorNotificationBody)
      return null
    }

    await this.props.getUserDetail(this.props.loginStatus.uuid)

    this.props.history.push('/')
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
    getUserDetail: UUID => dispatch(getUserDetail(UUID))
  })
)(LoginPageContainer)
