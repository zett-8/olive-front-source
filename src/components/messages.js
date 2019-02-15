import React from 'react'
import PropTypes from 'prop-types'

const messages = props => {
  return (
    <React.Fragment>
      <div className="phase">
        <p className="circle circle__1" />
        <p className="circle circle__2" />
        <p className="circle circle__3" />
        <p className="circle circle__4" />
        <p className="circle circle__5" />
      </div>
      {props.messages.map(m => (
        <p key={m.id}>{m.body}</p>
      ))}
      <form onSubmit={props.handleSubmit}>
        <input
          className="input input__message"
          placeholder="Message"
          value={props.inputMessage}
          onChange={props.handleInputChanged}
        />
        <button className="btn btn__send" type="submit">
          メッセージを送る
        </button>
      </form>
    </React.Fragment>
  )
}

messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  inputMessage: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default messages
