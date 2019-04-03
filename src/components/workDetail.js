import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import VOID from '../assets/700.gif'
import HeartIMG from 'react-svg-loader!../assets/heart.svg' // eslint-disable-line

const workDetail = props => {
  const circumstantialUrl = process.env.NODE_ENV === 'local' ? '' : ''

  return (
    <React.Fragment>
      <div className="workDetail__left">
        <p className="workDetail__left__mainImage">
          <img
            ref={props.mainImageRef}
            src={VOID}
            style={{ backgroundImage: `url(${circumstantialUrl + props.detail.image1})` }}
            alt="main"
          />
        </p>

        {['1', '2', '3', '4', '5'].map(n => {
          if (props.detail['image' + n] !== null) {
            return (
              <p key={n} className={`workDetail__left__subImage${n}`}>
                <img
                  src={VOID}
                  style={{ backgroundImage: `url(${circumstantialUrl + props.detail['image' + n]})` }}
                  alt={'img' + n}
                  onClick={() => props.changeMainImage(circumstantialUrl + props.detail['image' + n])}
                />
              </p>
            )
          }
        })}
      </div>
      <div className="workDetail__right">
        <h3>{props.detail.title}</h3>
        <div className="workDetail__right__list">
          <p className="typ_infoList_left">Artist</p>
          <p className="typ_infoList_right">
            <Link to={`/artist/${props.detail.artist.id}`}>{props.detail.artist.artist_name}</Link>
          </p>
          <p className="typ_infoList_left">Year</p>
          <p className="typ_infoList_right">{props.detail.year ? props.detail.year : '-'}</p>
          <p className="typ_infoList_left">Technique</p>
          <p className="typ_infoList_right">{props.detail.technique ? props.detail.technique : '-'}</p>
          <p className="typ_infoList_left">Genre</p>
          <p className="typ_infoList_right">{props.detail.genre.name}</p>
          <p className="typ_infoList_left">Sub genre</p>
          <p className="typ_infoList_right">{props.detail.subgenre.name}</p>
          <p className="typ_infoList_left">Size</p>
          <p className="typ_infoList_right">{`W ${props.detail.width} mm x H ${props.detail.height} mm x D ${props.detail.depth} mm`}</p>
          <p className="typ_infoList_left">Color</p>
          <p className="typ_infoList_right">
            {Object.keys(props.detail.colors).map(Cname => {
              if (props.detail.colors[Cname]) return <span key={Cname} style={{ display: 'inline-block', borderRadius: '50%', height: '2rem', width: '2rem', marginRight: '2rem', backgroundColor: Cname }} />
            })}
          </p>
          <p className="typ_infoList_left">Edition</p>
          <p className="typ_infoList_right">{props.detail.edition ? props.detail.edition : '-'}</p>
          <p className="typ_infoList_left">Frame</p>
          <p className="typ_infoList_right">{props.detail.frame ? props.detail.frame : '-'}</p>
          <p className="typ_infoList_left">Sign</p>
          <p className="typ_infoList_right">{props.detail.sign ? props.detail.sign : '-'}</p>
          <p className="typ_infoList_left">Caption</p>
          <div className="typ_infoList_caption">{props.detail.caption}</div>
        </div>

        <p className="workDetail__right__price">
          {'¥ ' + String(props.detail.price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
        </p>

        <div className="workDetail__right__buttons">
          {props.detail.sold ? ( // eslint-disable-line
            props.bought ? (
              <p className="b_btn message">
                <Link
                  to={`/work/${props.detail.id}/deal/${props.self.UUID}/${
                    props.detail.artist.id === props.self.user_id ? props.detail.buyer.id : props.detail.artist.id
                  }`}
                >
                  Message
                </Link>
              </p>
            ) : (
              <p className="sold">SOLD</p>
            )
          ) : (
            <button className="b_btn b_btn__13rem" type="button" onClick={props.chosePaymentMethod}>
              Buy
            </button>
          )}
          {props.detail.favorite_users.indexOf(props.self.user_id) === -1 ? (
            <button className="w_btn w_btn__favorite" type="button" onClick={props.toggleFavorite}>
              <HeartIMG className="w_btn__favorite__nega" alt="heart" />
              Like
            </button>
          ) : (
            <button className="w_btn w_btn__favorite" type="button" onClick={props.toggleFavorite}>
              <HeartIMG className="w_btn__favorite__posi" alt="heart" />
              Like
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

workDetail.propTypes = {
  self: PropTypes.shape({
    UUID: PropTypes.string,
    user_id: PropTypes.number,
  }),
  detail: PropTypes.shape({
    id: PropTypes.number,
    image1: PropTypes.string,
    image2: PropTypes.string,
    image3: PropTypes.string,
    image4: PropTypes.string,
    image5: PropTypes.string,
    title: PropTypes.string,
    caption: PropTypes.string,
    technique: PropTypes.string,
    sign: PropTypes.string,
    edition: PropTypes.string,
    frame: PropTypes.string,
    year: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    depth: PropTypes.number,
    genre: PropTypes.object,
    subgenre: PropTypes.object,
    colors: PropTypes.object,
    price: PropTypes.number,
    artist: PropTypes.object,
    buyer: PropTypes.object,
    sold: PropTypes.bool,
    favorite_users: PropTypes.arrayOf(PropTypes.number),
  }),
  chosePaymentMethod: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  bought: PropTypes.bool,
  mainImageRef: PropTypes.shape({
    current: PropTypes.object,
  }),
}

export default workDetail
