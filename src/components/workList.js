import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

import VOID from '../assets/700.gif'

const workList = props => {
  const workListRenderer = () => (
    props.works.length === 1 ? (
      <div className="oneWorkList">
        {props.works.map(w => (
          <div className="work" key={w.id}>
            <Link key={w.id} to={`/work/${w.id}/detail`}>
              <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
            </Link>
            <p>{w.title}</p>
          </div>
        ))}
      </div>
    ) : (
      <div className="workList">
        {props.works.map(w => (
          <div className="work" key={w.id}>
            <Link key={w.id} to={`/work/${w.id}/detail`}>
              <LazyLoad offset={300}>
                <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
              </LazyLoad>
            </Link>
            <p>{w.title}</p>
          </div>
        ))}
      </div>
    )
  )

  return (
    <React.Fragment>
      {props.works.length ? (
        workListRenderer()
      ) : (
        <div className="noWorkList">
          <p className="noWorks">作品がありません</p>
        </div>
      )}
    </React.Fragment>
  )
}

workList.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image1: PropTypes.string,
    })
  ).isRequired,
}

export default workList
