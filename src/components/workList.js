import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const workList = props => {
  return (
    <React.Fragment>
      {props.works.map(w => (
        <div className="work" key={w.id}>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            <img src={w.image1} alt="sample" />
          </Link>
          <p>
            {w.name}
          </p>
        </div>
      ))}

      {props.works.map(w => (
        <div className="work" key={w.id}>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            <img src={w.image1} alt="sample" />
          </Link>
          <p>
            {w.name}
          </p>
        </div>
      ))}
    </React.Fragment>
  )
}

workList.propTypes = {
  works: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image1: PropTypes.string
  })).isRequired,
}

export default workList
