import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import VOID from '../assets/700.gif'

const landing = props => {
  return (
    <div className="landing">
      <div className="landing__grayBar">
        <p className="typ_landing_h">Welcome to Olive</p>
        <p className="typ_landing_p">
          「現代アートをもっと自由に」を掲げたオンラインギャラリー。Oliveでは会員登録することなく、全ての作品が閲覧可能です。作品を自由に閲覧して頂き、気に入った作品があったら購入するだけです。（※購入の際に会員登録が必要になります）アーティストの完全招待制で運営しています。招待する権限を持つのは運営だけでなく、既に登録されているアーティストです。
        </p>
      </div>
      <div className="landing__grayBar" style={{ position: 'relative', gridTemplateColumns: '1fr' }}>
        <p className="typ_landing_h">Welcome to Olive</p>
        <p className="typ_landing_p">
          「現代アートをもっと自由に」を掲げたオンラインギャラリー。Oliveでは会員登録することなく、全ての作品が閲覧可能です。作品を自由に閲覧して頂き、気に入った作品があったら購入するだけです。（※購入の際に会員登録が必要になります）アーティストの完全招待制で運営しています。招待する権限を持つのは運営だけでなく、既に登録されているアーティストです。
        </p>
      </div>

      <div className="landing__recommend">
        <p className="landing__workTitle">Recommend Artworks</p>
        <div className="landing__works">
          <div role="button" tabIndex={0} className="arrow leftArrow" onClick={() => props.scrollLeft('sc1', -1)}>&lt;</div>
          <div role="button" tabIndex={0} className="arrow rightArrow" onClick={() => props.scrollLeft('sc1', 1)}>&gt;</div>
          <ul id="sc1">
            {props.recommendWorks.map(w => (
              <li key={w.id}>
                <div className="landing__works__work" key={w.id}>
                  <Link to={`/work/${w.id}/detail`}>
                    <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
                  </Link>
                  <p>{w.title}</p>
                  <p>
                    ¥&nbsp;
                    {String(w.price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="landing__popular">
        <p className="landing__workTitle">Popular Artworks</p>
        <div className="landing__works">
          <div role="button" tabIndex={0} className="arrow leftArrow" onClick={() => props.scrollLeft('sc2', -1)}>&lt;</div>
          <div role="button" tabIndex={0} className="arrow rightArrow" onClick={() => props.scrollLeft('sc2', 1)}>&gt;</div>
          <ul id="sc2">
            {props.landingWorks.popularWorks.contents.map(w => (
              <li key={w.id}>
                <div className="landing__works__work" key={w.id}>
                  <Link key={w.id} to={`/work/${w.id}/detail`}>
                    <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
                  </Link>
                  <p>{w.title}</p>
                  <p>
                    ¥&nbsp;
                    {String(w.price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/popular">
          <div className="landing__grayLink">
            <p>Load more</p>
          </div>
        </Link>
      </div>

      <div className="landing__new">
        <p className="landing__workTitle">New Artworks</p>
        <div className="landing__works">
          <div role="button" tabIndex={0} className="arrow leftArrow" onClick={() => props.scrollLeft('sc3', -1)}>&lt;</div>
          <div role="button" tabIndex={0} className="arrow rightArrow" onClick={() => props.scrollLeft('sc3', 1)}>&gt;</div>
          <ul id="sc3">
            {props.landingWorks.newWorks.contents.map(w => (
              <li key={w.id}>
                <div className="landing__works__work" key={w.id}>
                  <Link key={w.id} to={`/work/${w.id}/detail`}>
                    <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
                  </Link>
                  <p>{w.title}</p>
                  <p>
                    ¥&nbsp;
                    {String(w.price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/new">
          <div className="landing__grayLink">
            <p>Load more</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

landing.propTypes = {
  recommendWorks: PropTypes.arrayOf(PropTypes.object),
  landingWorks: PropTypes.shape({
    newWorks: PropTypes.object,
    popularWorks: PropTypes.object
  }),
  scrollLeft: PropTypes.func
}

export default landing
