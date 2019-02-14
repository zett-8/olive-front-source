import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const workList = props => {
  return (
    <div className="workList">
      {props.works.map(w => (
        <div className="work" key={w.id}>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            <img src="https://www.therovingschool.com.au/wp-content/uploads/2018/10/abstract-art-artistic-935785.jpg" alt="sample" />
          </Link>
          <p>
            {w.name}
          </p>
        </div>
      ))}

      {props.works.map(w => (
        <div className="work" key={w.id}>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            <img src="https://www.telegraph.co.uk/content/dam/luxury/2018/10/23/Lot-33-Papa-Ibra-Tall-The-Warrior-2_trans_NvBQzQNjv4BqodNcBcGl77MFNsXA9PO2XJYCQ1SCH6wXj7qdqY9PoCo.jpg?imwidth=450" alt="sample" />
          </Link>
          <p>
            {w.name}
          </p>
        </div>
      ))}
      {props.works.map(w => (
        <div className="work" key={w.id}>
          <Link key={w.id} to={`/work/${w.id}/detail`}>
            <img src="https://www.moma.org/d/assets/W1siZiIsIjIwMTUvMTAvMjEvaWJ3dmJmanIyX3N0YXJyeW5pZ2h0LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/starrynight.jpg?sha=161d3d1fb5eb4b23" alt="sample" />
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
