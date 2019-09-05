import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import VOID from '../assets/700.gif'

const landing = props => {
  return (
    <div className="landing">
      <div className="landing__grayBar">
        <p className="typ_landing_h">Welcome to Olive</p>
        <p className="typ_landing_p">
          「現代アートをもっと自由に」を掲げたオンラインギャラリー。アーティストの完全招待制で運営しています。招待する権限を持つのは運営だけでなく、既に登録されているアーティストです。Oliveでは会員登録することなく、全ての作品が閲覧可能です。作品を自由に閲覧して頂き、気に入った作品があったら購入するだけです。（※購入の際に会員登録が必要になります）
        </p>
      </div>
      <div className="landing__grayBar" style={{ position: 'relative', gridTemplateColumns: '1fr' }}>
        <p className="typ_landing_h">Welcome to Olive</p>
        <p className="typ_landing_p">
          「現代アートをもっと自由に」を掲げたオンラインギャラリー。アーティストの完全招待制で運営しています。招待する権限を持つのは運営だけでなく、既に登録されているアーティストです。Oliveでは会員登録することなく、全ての作品が閲覧可能です。作品を自由に閲覧して頂き、気に入った作品があったら購入するだけです。（※購入の際に会員登録が必要になります）
        </p>
      </div>

      <div className="landing__recommend">
        <p className="landing__workTitle">Recommend Artworks</p>
        <div className="landing__works">
          <ul>
            {props.recommendWorks.map(w => (
              <li key={w.id}>
                <div className="landing__works__work" key={w.id}>
                  <Link key={w.id} to={`/work/${w.id}/detail`}>
                    <LazyLoad offset={150} once height={300}>
                      <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
                    </LazyLoad>
                  </Link>
                  <p>{w.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/popular">
          <div className="landing__grayLink">
            <p>See more</p>
          </div>
        </Link>
      </div>

      <div className="landing__popular">
        <p className="landing__workTitle">Popular Artworks</p>
        <div className="landing__works">
          <ul>
            {props.landingWorks.popularWorks.contents.map(w => (
              <li key={w.id}>
                <div className="landing__works__work" key={w.id}>
                  <Link key={w.id} to={`/work/${w.id}/detail`}>
                    <LazyLoad offset={150} once height={300}>
                      <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
                    </LazyLoad>
                  </Link>
                  <p>{w.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/popular">
          <div className="landing__grayLink">
            <p>See more</p>
          </div>
        </Link>
      </div>

      <div className="landing__new">
        <p className="landing__workTitle">New Artworks</p>
        <div className="landing__works">
          <ul>
            {props.landingWorks.newWorks.contents.map(w => (
              <li key={w.id}>
                <div className="landing__works__work" key={w.id}>
                  <Link key={w.id} to={`/work/${w.id}/detail`}>
                    <LazyLoad offset={150} once height={300}>
                      <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
                    </LazyLoad>
                  </Link>
                  <p>{w.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/new">
          <div className="landing__grayLink">
            <p>See more</p>
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
  })
}

export default landing
