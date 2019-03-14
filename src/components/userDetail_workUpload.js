import React from 'react'
import PropTypes from 'prop-types'

const userDetailWorkUpload = props => {
  return (
    <React.Fragment>
      <div>
        <img ref={props.workImageRef1} src="" alt="" />
        <img ref={props.workImageRef2} src="" alt="" />
        <img ref={props.workImageRef3} src="" alt="" />
        <img ref={props.workImageRef4} src="" alt="" />
        <img ref={props.workImageRef5} src="" alt="" />
        <input style={{ display: 'none' }} type="file" ref={props.buttonRef} onChange={props.workImageSelected} />
        <button type="button" onClick={props.workImageSelectBtnClicked}>
          +
        </button>
      </div>

      <label htmlFor="title">
        <input
          className="input"
          name="workTitle"
          value={props.workTitle}
          onChange={props.workFormChanged}
          placeholder="Work Title"
        />
      </label>
      <label htmlFor="caption">
        <input
          className="input"
          name="workCaption"
          value={props.workCaption}
          onChange={props.workFormChanged}
          placeholder="caption"
        />
      </label>
      <label htmlFor="price">
        <input
          className="input"
          name="workPrice"
          type="number"
          value={props.workPrice}
          onChange={props.workFormIntChanged}
        />
      </label>
      <button className="btn btn__save" type="button" onClick={props.upload}>
        Save
      </button>
    </React.Fragment>
  )
}

userDetailWorkUpload.propTypes = {
  upload: PropTypes.func.isRequired,
  workFormChanged: PropTypes.func.isRequired,
  workFormIntChanged: PropTypes.func.isRequired,
  workImageSelectBtnClicked: PropTypes.func.isRequired,
  workImageSelected: PropTypes.func.isRequired,
  workImageRef1: PropTypes.shape({ current: PropTypes.object }),
  workImageRef2: PropTypes.shape({ current: PropTypes.object }),
  workImageRef3: PropTypes.shape({ current: PropTypes.object }),
  workImageRef4: PropTypes.shape({ current: PropTypes.object }),
  workImageRef5: PropTypes.shape({ current: PropTypes.object }),
  workTitle: PropTypes.string,
  workCaption: PropTypes.string,
  workPrice: PropTypes.number,
  buttonRef: PropTypes.shape({ current: PropTypes.object }),
}

export default userDetailWorkUpload
