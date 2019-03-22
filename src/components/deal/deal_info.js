import React from 'react'
import PropTypes from 'prop-types'

const dealInfo = props => {
  return (
    <div className="deal__info">
      <h2>Information</h2>
      <div className="deal__info__main" style={{ backgroundImage: `url(${props.work.image1})` }} />
      <div>
        <p>{props.work.name}</p>
        <p>{props.work.price}</p>
        <p>
          <span>〒</span>
          {props.buyerDetail.zipcode}
        </p>
        <p>{props.buyerDetail.address}</p>
      </div>
    </div>
  )
}

dealInfo.propTypes = {
  work: PropTypes.shape({
    status: PropTypes.number,
    image1: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  buyerDetail: PropTypes.shape({
    zipcode: PropTypes.string,
    address: PropTypes.string,
  }),
}

export default dealInfo
