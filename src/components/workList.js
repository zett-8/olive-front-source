import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import VOID from '../assets/700.gif'

const workList = props => {
  return (
    <React.Fragment>
      {props.works.length ? (
        props.works.map(w => (
          <div className="work" key={w.id}>
            <Link key={w.id} to={`/work/${w.id}/detail`}>
              <img alt="" src={VOID} style={{ backgroundImage: `url(${w.image1})` }} />
            </Link>
            <p>{w.name}</p>
          </div>
        ))
      ) : (
        <p>作品がありません</p>
      )}
    </React.Fragment>
  )
}

workList.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image1: PropTypes.string,
    })
  ).isRequired,
}

export default workList
