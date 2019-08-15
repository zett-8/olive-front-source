import React from 'react'
import PropTypes from 'prop-types'

const invite = props => {
  return (
    <div>
      <p>
        現在、あと
        {props.userDetail.ticket}
        人招待できます
        <br />
        (招待したアーティストが登録した段階でカウントが減ります)
      </p>
      <input
        className="input"
        placeholder="招待したいアーティストのEmail"
        value={props.inviteEmail}
        onChange={e => props.inviteEmailIsTyped(e)}
      />
      {props.userDetail.ticket ? (
        <button className="b_btn b_btn__13rem" type="button" onClick={() => props.inviteOtherArtist()}>
          Invite
        </button>
      ) : (
        <button style={{ textDecoration: 'line-through' }} type="button" className="w_btn b_btn__13rem">
          Invite
        </button>
      )}

    </div>
  )
}

invite.propTypes = {
  userDetail: PropTypes.shape({
    ticket: PropTypes.number,
  }),
  inviteEmail: PropTypes.string,
  inviteEmailIsTyped: PropTypes.func,
  inviteOtherArtist: PropTypes.func
}

export default invite
