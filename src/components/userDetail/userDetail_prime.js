import React from 'react'
import PropTypes from 'prop-types'

const userDetailPrime = props => {
  return (
    <div>
      <div className="userDetail__prime__iconForm">
        <div
          className="userDetail__prime__iconForm__icon"
          ref={props.iconRef}
          style={{ backgroundImage: `url(${props.detail.icon})` }}
        />

        <button className="w_btn w_btn__15rem" type="button" onClick={props.userIconSelectBtnClicked}>
          Select picture
        </button>
        <input style={{ display: 'none' }} type="file" accept="image/*" ref={props.buttonRef} onChange={props.userIconSelected} />
        <button className="b_btn b_btn__10rem" type="submit" onClick={props.upload}>
          Save
        </button>
      </div>

      <div className="userDetail__prime__form">
        <p className="typ_form_label">Email</p>
        <input className="input" type="text" name="email" value={props.email} placeholder={props.self.email} onChange={props.primeFormChanged} />
        <button className="b_btn b_btn__20rem" type="button" onClick={props.updateEmail}>Change Email</button>

        <p className="typ_form_label">Password</p>
        <input className="input mb-1rem" type="password" name="oldPassword" placeholder="現在のパスワード" value={props.oldPassword} onChange={props.primeFormChanged} />
        <input className="input" type="password" name="newPassword" placeholder="新しいパスワード" value={props.newPassword} onChange={props.primeFormChanged} />
        <button className="b_btn b_btn__20rem" type="button" onClick={props.updatePassword}>Change password</button>
      </div>

      <div className="userDetail__prime__shopping">
        <p>*作品を購入するには、発送先情報を設定してください</p>
        <p className="typ_form_label">* First Name</p>
        <input className="input" type="text" name="firstName" value={props.firstName} onChange={props.buyerFormChanged} />

        <p className="typ_form_label">* Last Name</p>
        <input className="input" type="text" name="lastName" value={props.lastName} onChange={props.buyerFormChanged} />

        <p className="typ_form_label">* Zipcode</p>
        <input className="input" type="text" name="zipCode" value={props.zipCode} onChange={props.buyerFormChanged} />

        <p className="typ_form_label">* Address</p>
        <input className="input" type="text" name="address" value={props.address} onChange={props.buyerFormChanged} />

        <p className="typ_form_label">* Phone Number (ハイフンなし)</p>
        <input className="input" type="tel" name="phoneNumber" value={props.phoneNumber} onChange={props.buyerFormChanged} />

        <button className="b_btn b_btn__13rem" type="button" onClick={props.updateBuyerInfo}>
          Save
        </button>
      </div>
      <button type="button" className="b_btn b_btn__20re logout" onClick={props.logout}>Logout</button>
    </div>
  )
}

userDetailPrime.propTypes = {
  userIconSelected: PropTypes.func.isRequired,
  userIconSelectBtnClicked: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  email: PropTypes.string,
  oldPassword: PropTypes.string,
  newPassword: PropTypes.string,
  primeFormChanged: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
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
  logout: PropTypes.func.isRequired,
  buyerFormChanged: PropTypes.func.isRequired,
  updateBuyerInfo: PropTypes.func.isRequired,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  zipCode: PropTypes.string,
  phoneNumber: PropTypes.string,
  address: PropTypes.string,
}

export default userDetailPrime
