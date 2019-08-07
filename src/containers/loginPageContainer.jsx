import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'
import { FormValidation } from '../utils/Validator'
import { errorNotificationBody, oopsNotificationBody } from '../utils/notification'

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
      signUpButtonIsWorking: false
    }
  }

  componentWillMount() {
    if (Object.keys(this.props.loginStatus).length) this.props.history.push(`/user`)
  }

  componentDidMount() {
    document.title = 'Login SignUp | Olive'

    if (this.props.guest) this.setState({ login: false, invitation: this.props.match.params.code })
  }

  switch = () => {
    this.setState({ login: !this.state.login })
  }

  handleForgetPassword = async () => {
    const message = FormValidation(this.state.email, 'pass1234')
    if (message) {
      oopsNotificationBody.message = message
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      return null
    }

    const err = await API.checkUserEmail(this.state.email)
    if (err) {
      oopsNotificationBody.message = '登録されていないメールアドレスです'
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      return null
    }

    this.props.history.push(`/password-reset/${this.state.email}`)
  }

  signUp = async e => {
    e.preventDefault()
    this.setState({ signUpButtonIsWorking: true })

    const message = FormValidation(this.state.email, this.state.password)
    if (message) {
      oopsNotificationBody.message = message
      oopsNotificationBody.autoDismiss = 4
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      this.setState({ signUpButtonIsWorking: false })
      return null
    }

    const err = await API.checkUserEmail(this.state.email)
    if (!err) {
      oopsNotificationBody.message = 'すでに登録されているアドレスです'
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      this.setState({ signUpButtonIsWorking: false })
      return null
    }

    if (this.state.invitation) {
      const err = await API.checkInvitationCode(this.state.invitation)
      if (err) {
        oopsNotificationBody.message = '無効な招待コードです'
        this.notificationSystem.current.addNotification(oopsNotificationBody)
        this.setState({ signUpButtonIsWorking: false })
        return null
      }
    }

    const error = await this.props.signUp(this.state.email, this.state.password, this.state.invitation || 'non')
    if (error) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      this.setState({ signUpButtonIsWorking: false })
      return null
    }

    this.setState({ signUpButtonIsWorking: false })

    this.props.history.push('/message/sent-email/')
  }

  login = async e => {
    e.preventDefault()

    const message = FormValidation(this.state.email, this.state.password)
    if (message) {
      oopsNotificationBody.message = message
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      return null
    }

    const err = await this.props.login(this.state.email, this.state.password)
    if (err && err.response.status === 404) {
      oopsNotificationBody.message = '登録されていないメールアドレスです'
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      return null
    }
    if (err) {
      oopsNotificationBody.message = 'パスワードが違います'
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      return null
    }

    this.props.getUserDetail(this.props.loginStatus.token, this.props.loginStatus.uuid)

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
            guest={this.props.guest || false}
            handleInputChanged={this.handleInputChanged}
            email={this.state.email}
            password={this.state.password}
            invitation={this.state.invitation}
            handleSwitch={this.switch}
            signUpButtonIsWorking={this.state.signUpButtonIsWorking}
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
    getUserDetail: (token, uuid) => dispatch(getUserDetail(token, uuid))
  })
)(LoginPageContainer)
