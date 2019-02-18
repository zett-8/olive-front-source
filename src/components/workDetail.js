import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const workDetail = props => {
  return (
    <React.Fragment>
      <p className="workDetail__mainImage">
        <img ref={props.mainImageRef} src={props.detail.images[0].url} alt="work image1" />
      </p>
      {props.detail.images.map((img, idx) => (
        <p key={img.id} className="workDetail__subImage">
          <img
            src={props.detail.images[idx].url}
            alt={`sub img${idx + 1}`}
            onClick={() => props.changeMainImage(props.detail.images[idx].url)}
          />
        </p>
      ))}
      <p>{props.detail.name}</p>
      <p>{props.detail.caption}</p>
      <p>{props.detail.price}</p>
      <p>
        <Link to={`/artist/${props.detail.artist.user_id}`}>{props.detail.artist.artist_name}</Link>
      </p>
      {props.detail.sold ? ( // eslint-disable-line
        props.bought ? (
          <p>
            <Link to={`/work/${props.detail.id}/deal/${props.detail.artist.user_id}/${props.detail.buyer.user_id}`}>
              MESSAGE
            </Link>
          </p>
        ) : (
          <p>SOLD</p>
        )
      ) : (
        <button className="btn btn__buy" type="button" onClick={props.buy}>
          Buy
        </button>
      )}
      <p onClick={props.back}>back</p>
    </React.Fragment>
  )
}

workDetail.propTypes = {
  detail: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.array,
    name: PropTypes.string,
    caption: PropTypes.string,
    price: PropTypes.number,
    artist: PropTypes.object,
    buyer: PropTypes.object,
    sold: PropTypes.bool,
  }),
  buy: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  bought: PropTypes.bool,
  mainImageRef: PropTypes.shape({
    current: PropTypes.object
  }),
  changeMainImage: PropTypes.func.isRequired
}

export default workDetail
