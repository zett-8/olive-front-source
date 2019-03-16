import React from 'react'
import PropTypes from 'prop-types'

const dealMessages = props => {
  return (
    <React.Fragment>
      {props.messages.map(m => (
        <p key={m.id}>{m.body}</p>
      ))}
      <form onSubmit={props.sendMessage}>
        <input
          className="input input__message"
          placeholder="Message"
          value={props.inputMessage}
          onChange={props.messageTyped}
        />
        <button className="btn btn__send" type="submit">
          メッセージを送る
        </button>
      </form>
    </React.Fragment>
  )
}

dealMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  inputMessage: PropTypes.string,
  messageTyped: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
}

export default dealMessages
