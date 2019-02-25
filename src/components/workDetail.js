import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const workDetail = props => {
  return (
    <React.Fragment>
      <p className="workDetail__mainImage">
        <img
          ref={props.mainImageRef}
          src={(process.env.NODE_ENV === 'local' ? 'http://localhost:8008' : null) + props.detail.image1}
          alt="work image1"
        />
      </p>

      {['1', '2', '3', '4', '5'].map(n => {
        if (props.detail['image' + n] !== null) {
          return (
            <p key={n} className="workDetail__subImage">
              <img
                src={(process.env.NODE_ENV === 'local' ? 'http://localhost:8008' : null) + props.detail['image' + n]}
                alt={'sub img' + n}
                onClick={() =>
                  props.changeMainImage(
                    (process.env.NODE_ENV === 'local' ? 'http://localhost:8008' : null) + props.detail['image' + n]
                  )
                }
              />
            </p>
          )
        }
      })}

      <p>{props.detail.name}</p>
      <p>{props.detail.caption}</p>
      <p>{props.detail.price}</p>
      <p>
        <Link to={`/artist/${props.detail.artist.user_id}`}>{props.detail.artist.artist_name}</Link>
      </p>
      {props.detail.favorite_users.indexOf(props.self.user_id) === -1 ? (
        <button className="btn btn_favorite" type="button" onClick={props.toggleFavorite}>
          Favorite
        </button>
      ) : (
        <button className="btn btn_favorite" type="button" onClick={props.toggleFavorite}>
          UnFavorite
        </button>
      )}
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
  self: PropTypes.shape({
    user_id: PropTypes.number,
  }),
  detail: PropTypes.shape({
    id: PropTypes.number,
    image1: PropTypes.string,
    image2: PropTypes.string,
    image3: PropTypes.string,
    image4: PropTypes.string,
    image5: PropTypes.string,
    name: PropTypes.string,
    caption: PropTypes.string,
    price: PropTypes.number,
    artist: PropTypes.object,
    buyer: PropTypes.object,
    sold: PropTypes.bool,
    favorite_users: PropTypes.arrayOf(PropTypes.number),
  }),
  buy: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  bought: PropTypes.bool,
  mainImageRef: PropTypes.shape({
    current: PropTypes.object,
  }),
  // changeMainImage: PropTypes.func.isRequired,
}

export default workDetail
