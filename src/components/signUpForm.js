import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../assets/loading.gif'

const loginForm = props => (
  <React.Fragment>
    <h2>Create Account</h2>
    <form onSubmit={props.signUp}>
      <label htmlFor="email">
        <input
          className="input"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={props.handleInputChanged}
        />
      </label>
      <label htmlFor="password">
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={props.password}
          onChange={props.handleInputChanged}
        />
      </label>
      {props.guest ? null : (
        <label htmlFor="invitation">
          <input
            className="input"
            name="invitation"
            placeholder="Invitation code (Optional)"
            value={props.invitation}
            readOnly={props.guest}
            onChange={props.handleInputChanged}
          />
        </label>
      )}
      <span><a href="/terms" target="_blank">* 利用規約</a></span>
      {props.signUpButtonIsWorking ? (
        <button className="w_btn b_btn__30rem" disabled={true} type="button">
          <span><img alt="" src={Loading} height="10px" /></span>
        </button>
      ) : (
        <button className="b_btn b_btn__30rem" type="submit">
          Create Account
        </button>
      )}
    </form>
    {props.guest ? null : (
      <React.Fragment>
        <p>or</p>
        <button type="button" className="w_btn w_btn__30rem" onClick={props.handleSwitch}>
          Login
        </button>
      </React.Fragment>
    )}
  </React.Fragment>
)

loginForm.propTypes = {
  guest: PropTypes.bool.isRequired,
  signUp: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  invitation: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired,
  signUpButtonIsWorking: PropTypes.bool
}

export default loginForm
