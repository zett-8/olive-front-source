import React from 'react'
import PropTypes from 'prop-types'

const loginForm = props => (
  <React.Fragment>
    <h2>Login</h2>
    <form onSubmit={props.login}>
      <label htmlFor="email">
        <input className="input" name="email" placeholder="Email" value={props.email} onChange={props.handleInputChanged} />
      </label>
      <label htmlFor="password">
        <input className="input" type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleInputChanged} />
      </label>
      <span role="button" tabIndex={0} onClick={props.handleForgetPassword}>forget password?</span>
      <button className="b_btn b_btn__30rem" type="submit">Login</button>
    </form>
    <p>or</p>
    <button type="button" className="w_btn w_btn__30rem" onClick={props.handleSwitch}>Create Account</button>
  </React.Fragment>
)

loginForm.propTypes = {
  login: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired,
  handleForgetPassword: PropTypes.func.isRequired
}

export default loginForm
