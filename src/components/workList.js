import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const workList = props => {
  return (
    <div>
      {props.works.map(w => <Link key={w.id} to={`/work/${w.id}/detail`}>{w.name}</Link>)}
    </div>
  )
}

workList.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object)
}

export default workList
