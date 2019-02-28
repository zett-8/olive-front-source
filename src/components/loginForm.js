import React from 'react'
import PropTypes from 'prop-types'

const loginForm = props => (
  <React.Fragment>
    <p>Login</p>
    <form onSubmit={props.login}>
      <label htmlFor="email">
        <input className="input" name="email" placeholder="Email" value={props.email} onChange={props.handleInputChanged} />
      </label>
      <label htmlFor="password">
        <input className="input" type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleInputChanged} />
      </label>
      <p>forget password?</p>
      <button className="btn btn__login" type="submit">Login</button>
    </form>
    <p>or</p>
    <button type="button" className="btn btn__switch" onClick={props.handleSwitch}>Create Account</button>
  </React.Fragment>
)

loginForm.propTypes = {
  login: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired
}

export default loginForm
