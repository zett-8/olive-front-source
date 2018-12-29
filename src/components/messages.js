import React from 'react'
import PropTypes from 'prop-types'

const messages = props => {
  return (
    <div id="messages">
      {props.messages.map((m) => <p key={m.id}>{m.body}</p>)}
      <form onSubmit={props.handleSubmit}>
        <input value={props.inputMessage} onChange={props.handleInputChanged} />
        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  inputMessage: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default messages
