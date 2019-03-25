import React from 'react'
import PropTypes from 'prop-types'

const userDetailWorkUpload = props => {
  return (
    <React.Fragment>
      <div className="userDetail__workUpload__images">
        <div
          className="userDetail__workUpload__images__main"
          style={{ backgroundImage: `url(${props[`workImageUrl${props.workImageUrlCurrent}`]})` }}
        />
        <div className="userDetail__workUpload__images__subs">
          <div
            role="button"
            tabIndex={0}
            style={{ backgroundImage: `url(${props.workImageUrl1})` }}
            onClick={() => props.workSubImagesClicked('1')}
          />
          <div
            role="button"
            tabIndex={0}
            style={{ backgroundImage: `url(${props.workImageUrl2})` }}
            onClick={() => props.workSubImagesClicked('2')}
          />
          <div
            role="button"
            tabIndex={0}
            style={{ backgroundImage: `url(${props.workImageUrl3})` }}
            onClick={() => props.workSubImagesClicked('3')}
          />
          <div
            role="button"
            tabIndex={0}
            style={{ backgroundImage: `url(${props.workImageUrl4})` }}
            onClick={() => props.workSubImagesClicked('4')}
          />
          <div
            role="button"
            tabIndex={0}
            style={{ backgroundImage: `url(${props.workImageUrl5})` }}
            onClick={() => props.workSubImagesClicked('5')}
          />
        </div>
        `
        <input style={{ display: 'none' }} type="file" ref={props.buttonRef} onChange={props.workImageSelected} />
        <button className="btn btn__select" type="button" onClick={props.workImageSelectBtnClicked}>
          Select
        </button>
        <button className="btn btn__clear" type="button" onClick={props.resetWorkImages}>
          Clear
        </button>
      </div>
      <p>Title</p>
      <span>*</span>
      <input
        className="input"
        name="workTitle"
        value={props.workTitle}
        onChange={props.workFormChanged}
        placeholder="Work Title"
      />
      <p>Caption</p>
      <span>*</span>
      <input
        className="input"
        name="workCaption"
        value={props.workCaption}
        onChange={props.workFormChanged}
        placeholder="caption"
      />
      <p>Technique</p>
      <span>*</span>
      <input
        className="input"
        name="workTechnique"
        value={props.workTechnique}
        onChange={props.workFormChanged}
        placeholder="technique"
      />
      <p>Year</p>
      <span>*</span>
      <input
        className="input"
        name="workYear"
        value={props.workYear}
        onChange={props.workFormChanged}
        placeholder="year"
      />
      <p>Sign</p>
      <span>*</span>
      <input
        className="input"
        name="workSign"
        value={props.workSign}
        onChange={props.workFormChanged}
        placeholder="sign"
      />
      <p>Edition</p>
      <span>*</span>
      <input
        className="input"
        name="workEdition"
        value={props.workEdition}
        onChange={props.workFormChanged}
        placeholder="edition"
      />
      <p>Frame</p>
      <span>*</span>
      <input
        className="input"
        name="workFrame"
        value={props.workFrame}
        onChange={props.workFormChanged}
        placeholder="frame"
      />
      <p>Size</p>
      <input
        className="input"
        name="workHeight"
        value={props.workHeight}
        onChange={props.workFormChanged}
        placeholder="height"
      />
      mm x
      <input
        className="input"
        name="workWidth"
        value={props.workWidth}
        onChange={props.workFormChanged}
        placeholder="width"
      />
      mm x
      <input
        className="input"
        name="workDepth"
        value={props.workDepth}
        onChange={props.workFormChanged}
        placeholder="depth"
      />
      mm
      <p>Genre</p>
      <select name="workGenre" value={props.workGenre} onChange={props.workFormChanged}>
        {props.genres.map(g => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
      <p>SubGenre</p>
      <select name="workSubGenre" value={props.workSubGenre} onChange={props.workFormChanged}>
        {props.selectableSubGenres.map(sg => (
          <option key={sg.id} value={sg.id}>
            {sg.name}
          </option>
        ))}
      </select>
      <p>Colors</p>
      <p>
        <input type="checkbox" name="workColorCrimson" value={!props.workColorCrimson} checked={props.workColorCrimson} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'crimson' }} />
        <input type="checkbox" name="workColorMediumBlue" value={!props.workColorMediumBlue} checked={props.workColorMediumBlue} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'mediumblue' }} />
        <input type="checkbox" name="workColorForestGreen" value={!props.workColorForestGreen} checked={props.workColorForestGreen} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'forestgreen' }} />
        <input type="checkbox" name="workColorGold" value={!props.workColorGold} checked={props.workColorGold} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'gold' }} />
        <input type="checkbox" name="workColorPurple" value={!props.workColorPurple} checked={props.workColorPurple} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'purple' }} />
        <input type="checkbox" name="workColorBrown" value={!props.workColorBrown} checked={props.workColorBrown} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'brown' }} />
        <input type="checkbox" name="workColorBlack" value={!props.workColorBlack} checked={props.workColorBlack} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'black' }} />
        <input type="checkbox" name="workColorGrey" value={!props.workColorGrey} checked={props.workColorGrey} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'grey' }} />
        <input type="checkbox" name="workColorIvory" value={!props.workColorIvory} checked={props.workColorIvory} onChange={props.workFormChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'ivory', border: '1px solid grey' }} />
      </p>
      <p>Price</p>
      <span>*</span>
      <input
        className="input"
        name="workPrice"
        type="number"
        value={props.workPrice}
        onChange={props.workFormChanged}
      />
      <button className="b_btn b_btn__13rem" type="button" onClick={props.upload}>
        Save
      </button>
    </React.Fragment>
  )
}

userDetailWorkUpload.propTypes = {
  upload: PropTypes.func.isRequired,
  workFormChanged: PropTypes.func.isRequired,
  workImageSelectBtnClicked: PropTypes.func.isRequired,
  workImageSelected: PropTypes.func.isRequired,
  workSubImagesClicked: PropTypes.func.isRequired,
  resetWorkImages: PropTypes.func.isRequired,
  workImageUrlCurrent: PropTypes.string,
  workImageUrl1: PropTypes.string,
  workImageUrl2: PropTypes.string,
  workImageUrl3: PropTypes.string,
  workImageUrl4: PropTypes.string,
  workImageUrl5: PropTypes.string,
  workTitle: PropTypes.string,
  workCaption: PropTypes.string,
  workEdition: PropTypes.string,
  workSign: PropTypes.string,
  workFrame: PropTypes.string,
  workTechnique: PropTypes.string,
  workHeight: PropTypes.string,
  workWidth: PropTypes.string,
  workDepth: PropTypes.string,
  workYear: PropTypes.string,
  workPrice: PropTypes.string,
  workGenre: PropTypes.string,
  workSubGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  selectableSubGenres: PropTypes.arrayOf(PropTypes.object),
  workColorCrimson: PropTypes.bool,
  workColorMediumBlue: PropTypes.bool,
  workColorForestGreen: PropTypes.bool,
  workColorGold: PropTypes.bool,
  workColorPurple: PropTypes.bool,
  workColorBrown: PropTypes.bool,
  workColorBlack: PropTypes.bool,
  workColorGrey: PropTypes.bool,
  workColorIvory: PropTypes.bool,
  buttonRef: PropTypes.shape({ current: PropTypes.object }),
}

export default userDetailWorkUpload
