import React from 'react'
import { connect } from 'react-redux'

import Header from '../containers/headerContainer'
import { login } from '../actions/loginStatus'

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  login = async e => {
    e.preventDefault()
    const error = await this.props.login(this.state.username, this.state.password)

    if (!error) {
      this.props.history.push('/')
      return
    }

    if (error.response.status === 404) console.log('this user doensnt exist')
    if (error.response.status === 400) console.log('password is not correct')
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <form onSubmit={this.login}>
          <label>E-mail</label>
          <input value={this.state.username} onChange={(e) => this.setState({ username: e.target.value})}/>
          <label>Password</label>
          <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value})}/>
          <button type="submit">Login</button>
        </form>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
  })
)(LoginPageContainer)
