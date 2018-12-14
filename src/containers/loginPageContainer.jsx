import React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/loginStatus'

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  login = e => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
    this.props.history.push('/')
  }

  render() {
    return (
      <React.Fragment>
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
