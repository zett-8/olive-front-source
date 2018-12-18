import React from 'react'
import PropTypes from 'prop-types'

const loginForm = props => (
  <form onSubmit={props.login}>
    <label htmlFor="email">
      E-mail
      <input name="email" value={props.email} onChange={props.handleInputChanged} />
    </label>
    <label htmlFor="password">
      Password
      <input name="password" value={props.password} onChange={props.handleInputChanged} />
    </label>
    <button type="submit">Login</button>
  </form>
)

loginForm.propTypes = {
  login: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
}

export default loginForm
