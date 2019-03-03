import React from 'react'
import PropTypes from 'prop-types'


const userDetailPrime = props => {
  return (
    <React.Fragment>
      <div>
        <p>
          <img className="user_icon" ref={props.iconRef} src={(process.env.NODE_ENV === 'local' ? 'http://localhost:8008' : null) + props.detail.icon} alt="" />
        </p>

        <button type="button" onClick={props.userIconSelectBtnClicked}>Upload new picture</button>
        <input style={{ display: 'none' }} type="file" ref={props.buttonRef} onChange={props.userIconSelected} />
        <button type="submit" onClick={props.upload}>save</button>
      </div>
      <div>
        <p>Email</p>
        <p>{props.self.email}</p>
      </div>
      <div>
        <p>Sex</p>
        <p>{props.detail.sex}</p>
      </div>
    </React.Fragment>
  )
}

userDetailPrime.propTypes = {
  userIconSelected: PropTypes.func.isRequired,
  userIconSelectBtnClicked: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  self: PropTypes.shape({
    email: PropTypes.string,
  }),
  detail: PropTypes.shape({
    icon: PropTypes.string,
    sex: PropTypes.number,
  }),
  iconRef: PropTypes.shape({
    current: PropTypes.object
  }),
  buttonRef: PropTypes.shape({
    current: PropTypes.object
  })
}

export default userDetailPrime
