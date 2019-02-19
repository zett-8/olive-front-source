import React from 'react'
import PropTypes from 'prop-types'

import pathRetriever from '../utils/pathRetriever'

const userDetailPrime = props => {
  const PATH = pathRetriever()

  return (
    <React.Fragment>
      <div>
        <p>
          <img ref={props.iconRef} src={PATH + props.detail.icon} alt="" />
        </p>

        <button type="button" onClick={props.fileSelectClicked}>Upload new picture</button>
        <input style={{ display: 'none' }} type="file" ref={props.buttonRef} onChange={props.imageChange} />
        <button type="submit" onClick={props.upload}>save</button>
      </div>
      <div>
        <p>Email</p>
        <p>{props.self.email}</p>
      </div>
      <div>
        <p>Sex</p>
        <p>{props.detail.sex}</p>
      </div>
    </React.Fragment>
  )
}

userDetailPrime.propTypes = {
  imageChange: PropTypes.func.isRequired,
  fileSelectClicked: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  self: PropTypes.shape({
    email: PropTypes.string,
  }),
  detail: PropTypes.shape({
    icon: PropTypes.string,
    sex: PropTypes.number,
  }),
  iconRef: PropTypes.shape({
    current: PropTypes.object
  }),
  buttonRef: PropTypes.shape({
    current: PropTypes.object
  })
}

export default userDetailPrime
