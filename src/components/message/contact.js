import React from 'react'
import PropTypes from 'prop-types'

const contact = props => {
  return (
    <React.Fragment>
      <div>
        お問い合わせありがとうございます。
        <br />
        できる限り早急に対応させていただきます。
      </div>
      <button className="w_btn w_btn__20rem" type="button" onClick={() => props.history.push('/')}>Top Page</button>
    </React.Fragment>
  )
}

contact.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default contact
