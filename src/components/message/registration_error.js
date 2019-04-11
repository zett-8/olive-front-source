import React from 'react'
import PropTypes from 'prop-types'


const registrationError = () => {
  return (
    <React.Fragment>
      <div>
        エラーです。
        <br />
        お問い合わせください。
      </div>
    </React.Fragment>
  )
}

registrationError.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default registrationError
