import React from 'react'
import PropTypes from 'prop-types'

const userDetailPrime = props => {
  return (
    <React.Fragment>
      <div className="userDetail__prime__iconForm">
        <div
          className="userDetail__prime__iconForm__icon"
          ref={props.iconRef}
          style={{
            backgroundImage: `url(${(process.env.NODE_ENV === 'local' ? '' : '') +
              props.detail.icon})`,
          }}
        />

        <button className="btn btn__selectPic" type="button" onClick={props.userIconSelectBtnClicked}>
          Select new picture
        </button>
        <input style={{ display: 'none' }} type="file" ref={props.buttonRef} onChange={props.userIconSelected} />
        <button className="btn btn__save" type="submit" onClick={props.upload}>
          Save
        </button>
      </div>
      <div>
        <p>Email</p>
        <input className="input" type="text" name="email" placeholder={props.self.email} />
        <button className="btn" type="button">Change Email</button>
      </div>
      <div>
        <label>Password</label>  {/* eslint-disable-line */}
        <input className="input" type="password" name="password" placeholder="現在のパスワード" />
        <input className="input" type="password" name="password" placeholder="新しいパスワード" />
        <button className="btn" type="button">Change password</button>
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
    current: PropTypes.object,
  }),
  buttonRef: PropTypes.shape({
    current: PropTypes.object,
  }),
}

export default userDetailPrime
