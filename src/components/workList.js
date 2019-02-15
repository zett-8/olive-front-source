import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const workList = props => {
  return (
    <div className="workList">
      {props.works.map(w => (
        <div className="work" key={w.id}>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            <img src={w.images[0].url} alt="sample" />
          </Link>
          <p>
            {w.name}
          </p>
        </div>
      ))}

      {props.works.map(w => (
        <div className="work" key={w.id}>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            <img src={w.images[0].url} alt="sample" />
          </Link>
          <p>
            {w.name}
          </p>
        </div>
      ))}
    </div>
  )
}

workList.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object),
}

export default workList
