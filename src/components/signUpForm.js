import React from 'react'
import PropTypes from 'prop-types'

const loginForm = props => (
  <React.Fragment>
    <p>Create Account</p>
    <form onSubmit={props.signUp}>
      <label htmlFor="email">
        <input className="input" name="email" placeholder="Email" value={props.email} onChange={props.handleInputChanged} />
      </label>
      <label htmlFor="password">
        <input className="input" type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleInputChanged} />
      </label>
      <label htmlFor="invitation">
        <input className="input" name="invitation" placeholder="Invitation code" value={props.invitation} onChange={props.handleInputChanged} />
      </label>
      <button className="btn btn__login" type="submit">Create Account</button>
    </form>
    <p>or</p>
    <button type="button" className="btn btn__switch" onClick={props.handleSwitch}>Login</button>
  </React.Fragment>
)

loginForm.propTypes = {
  signUp: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  invitation: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired
}

export default loginForm
