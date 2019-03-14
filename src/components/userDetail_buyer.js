import React from 'react'
import PropTypes from 'prop-types'

const userDetailBuyer = props => {
  return (
    <React.Fragment>
      <p>First Name</p>
      <span>*</span>
      <input type="text" name="firstName" value={props.firstName} onChange={props.buyerFormChanged} />

      <p>Last Name</p>
      <span>*</span>
      <input type="text" name="lastName" value={props.lastName} onChange={props.buyerFormChanged} />

      <p>Zipcode</p>
      <span>*</span>
      <input type="text" name="zipCode" value={props.zipCode} onChange={props.buyerFormChanged} />

      <p>Address</p>
      <span>*</span>
      <input type="text" name="address" value={props.address} onChange={props.buyerFormChanged} />

      <p>Phone Number</p>
      <span>*</span>
      <input type="text" name="phoneNumber" value={props.phoneNumber} onChange={props.buyerFormChanged} />

      <button className="btn btn__save" type="button" onClick={props.updateBuyerInfo}>
        Save
      </button>
    </React.Fragment>
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
