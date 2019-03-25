import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const dealInfo = props => {
  return (
    <React.Fragment>
      <h2>Information</h2>
      <div className="deal__info__main" style={{ backgroundImage: `url(${props.work.image1})` }} />
      <div className="deal__info__list">
        <p className="typ_infoList_left">Work Title</p>
        <p className="typ_infoList_right">{props.work.name}</p>
        <p className="typ_infoList_left">Work Price</p>
        <p className="typ_infoList_right">
          ¥&nbsp;
          {props.work.price.toString(10).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
        </p>
        <p className="typ_infoList_left">Artist</p>
        <p className="typ_infoList_right"><Link to={`/artist/${props.work.artist.id}`}>{props.work.artist.artist_name}</Link></p>
        <p className="typ_infoList_left">Buyer Info</p>
        <div>
          <p className="typ_infoList_right">
            <span>〒</span>
            {props.buyerDetail.zipcode}
          </p>
          <p className="typ_infoList_right">{props.buyerDetail.address}</p>
          <p className="typ_infoList_right">{props.buyerDetail.last_name + ' ' + props.buyerDetail.first_name}</p>
          <p className="typ_infoList_right">{props.buyerDetail.phone_number}</p>
        </div>

      </div>
    </React.Fragment>
  )
}

dealInfo.propTypes = {
  work: PropTypes.shape({
    status: PropTypes.number,
    image1: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    artist: PropTypes.shape({
      id: PropTypes.number,
      artist_name: PropTypes.string
    })
  }),
  buyerDetail: PropTypes.shape({
    zipcode: PropTypes.string,
    address: PropTypes.string,
    last_name: PropTypes.string,
    first_name: PropTypes.string,
    phone_number: PropTypes.string
  }),
}

export default dealInfo
