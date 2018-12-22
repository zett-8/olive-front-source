import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const workList = props => {
  return (
    <div id="workList">
      {props.works.map(w => (
        <div>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            {w.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

workList.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object),
}

export default workList
