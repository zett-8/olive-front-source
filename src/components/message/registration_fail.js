import React from 'react'
import PropTypes from 'prop-types'


const registrationFail = () => {
  return (
    <React.Fragment>
      <div>
        リンクの有効期限が切れています。
        <br />
        もう一度新規登録ページから申し込みお願いします。
      </div>
    </React.Fragment>
  )
}

registrationFail.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default registrationFail
