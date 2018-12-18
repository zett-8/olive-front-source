import React from 'react'
import { connect } from 'react-redux'

import Header from '../containers/headerContainer'
import LoginForm from '../components/loginForm'
import { login } from '../actions/loginStatus'

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props)

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

    if (error.response.status === 404) console.log('this user doensnt exist')
    if (error.response.status === 400) console.log('password is not correct')
  }

  handleInputChanged = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <React.Fragment>
        <Header />
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
