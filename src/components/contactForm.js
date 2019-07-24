import React from 'react'
import PropTypes from 'prop-types'

const contactForm = props => {
  return (
    <form className="contactForm" onSubmit={props.sendContact}>
      <p className="contactForm__label typ_form_label">Email</p>
      <input
        className="contactForm__input input"
        name="email"
        value={props.email}
        readOnly={props.loggedIn}
        required={true}
        onChange={props.contactFormIsTyped}
        style={props.loggedIn ? { color: 'grey' } : null}
      />
      <p className="contactForm__label typ_form_label">Type</p>
      <div className="select">
        <select name="type" value={props.type} required={true} onChange={props.contactFormIsTyped}>
          <option value="">お問い合わせ内容</option>
          <option>アカウントについて</option>
          <option>作品について</option>
          <option>サービスの不具合について</option>
          <option>その他</option>
        </select>
      </div>
      <p className="contactForm__label typ_form_label">Message</p>
      <textarea
        className="contactForm__textArea text_input"
        name="message"
        value={props.message}
        required={true}
        onChange={props.contactFormIsTyped}
      />
      <button className="contactForm__button b_btn b_btn__13rem" type="submit">
        Send
      </button>
    </form>
  )
}

contactForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  contactFormIsTyped: PropTypes.func.isRequired,
  sendContact: PropTypes.func.isRequired,
}

export default contactForm
