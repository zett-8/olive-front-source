import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'

const dealMessages = props => {
  return (
    <React.Fragment>
      <div className="deal__messages__box">
        <h2>Message</h2>
        {props.messages.map(m => {
          return m.sender.id === props.userId ? (
            <div key={m.id} className="deal__messages__box__mine">
              <div>
                <div>
                  <p className="typ_deal_message_mine">{m.body}</p>
                </div>
              </div>
              <span>{moment(m.send_at).tz('Asia/Tokyo').format('M/D HH:mm')}</span>
              <p style={{ backgroundImage: `url(${m.sender.icon})` }} />
            </div>
          ) : (
            <div key={m.id} className="deal__messages__box__others">
              <p className="" style={{ backgroundImage: `url(${m.sender.icon})` }} />
              <div>
                <div>
                  <p className="typ_deal_message_others">{m.body}</p>
                </div>
              </div>
              <span>{moment(m.send_at).tz('Asia/Tokyo').format('M/D HH:mm')}</span>
            </div>
          )
        })}
      </div>
      <form onSubmit={props.sendMessage}>
        <input
          className="input input__message"
          placeholder="Message"
          value={props.inputMessage}
          onChange={props.messageTyped}
        />
        <button className="b_btn b_btn__30rem" type="submit">
          メッセージを送る
        </button>
      </form>
    </React.Fragment>
  )
}

dealMessages.propTypes = {
  userId: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  inputMessage: PropTypes.string,
  messageTyped: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
}

export default dealMessages
