import React from 'react'
import PropTypes from 'prop-types'

const userDetailBuyer = props => {
  return (
    <div>
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
  )
}

userDetailBuyer.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  zipCode: PropTypes.string,
  address: PropTypes.string,
  phoneNumber: PropTypes.string,

  buyerFormChanged: PropTypes.func.isRequired,
  updateBuyerInfo: PropTypes.func.isRequired,
}

export default userDetailBuyer
