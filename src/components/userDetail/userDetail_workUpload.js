import React from 'react'
import PropTypes from 'prop-types'

import VOID from '../../assets/700.gif'

const userDetailWorkUpload = props => {
  return (
    <React.Fragment>
      <div className="userDetail__workUpload__images">
        <p className="userDetail__workUpload__images__main">
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props[`workImageUrl${props.workImageUrlCurrent}`]})` }}
            alt=""
          />
        </p>

        <p className="userDetail__workUpload__images__sub" onClick={() => props.workSubImagesClicked('1')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.workImageUrl1})` }}
            alt=""
          />
        </p>

        <p className="userDetail__workUpload__images__sub" onClick={() => props.workSubImagesClicked('2')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.workImageUrl2})` }}
            alt=""
          />
        </p>

        <p className="userDetail__workUpload__images__sub" onClick={() => props.workSubImagesClicked('3')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.workImageUrl3})` }}
            alt=""
          />
        </p>

        <p className="userDetail__workUpload__images__sub" onClick={() => props.workSubImagesClicked('4')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.workImageUrl4})` }}
            alt=""
          />
        </p>

        <p className="userDetail__workUpload__images__sub" onClick={() => props.workSubImagesClicked('5')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.workImageUrl5})` }}
            alt=""
          />
        </p>

        <div className="userDetail__workUpload__images__buttons">
          <input style={{ display: 'none' }} type="file" ref={props.buttonRef} onChange={props.workImageSelected} />
          <button className="w_btn w_btn__15rem" type="button" onClick={props.workImageSelectBtnClicked}>
            Select
          </button>
          <button className="w_btn w_btn__15rem" type="button" onClick={props.resetWorkImages}>
            Clear
          </button>
        </div>
      </div>

      <div className="userDetail__workUpload__form">
        <p className="typ_form_label">* Title</p>
        <input
          className="input"
          name="workTitle"
          value={props.workTitle}
          onChange={props.workFormChanged}
          placeholder="Work Title"
        />
        <p className="typ_form_label">* Caption</p>
        <textarea
          className="input"
          name="workCaption"
          value={props.workCaption}
          onChange={props.workFormChanged}
          placeholder="caption"
        />
        <p className="typ_form_label">Technique</p>
        <input
          className="input"
          name="workTechnique"
          value={props.workTechnique}
          onChange={props.workFormChanged}
          placeholder="technique"
        />
        <p className="typ_form_label">Year</p>
        <input
          className="input"
          name="workYear"
          value={props.workYear}
          onChange={props.workFormChanged}
          placeholder="year"
        />

        <p className="typ_form_label">Sign</p>
        <input
          className="input"
          name="workSign"
          value={props.workSign}
          onChange={props.workFormChanged}
          placeholder="sign"
        />

        <p className="typ_form_label">Edition</p>
        <input
          className="input"
          name="workEdition"
          value={props.workEdition}
          onChange={props.workFormChanged}
          placeholder="edition"
        />

        <p className="typ_form_label">Frame</p>
        <input
          className="input"
          name="workFrame"
          value={props.workFrame}
          onChange={props.workFormChanged}
          placeholder="frame"
        />
        <p className="typ_form_label">*Size (mm)</p>
        <div className="userDetail__workUpload__form__sizeInputs">
          <input
            className="input"
            type="number"
            name="workHeight"
            value={props.workHeight}
            onChange={props.workFormChanged}
            placeholder="height"
          />
          <span>x</span>
          <input
            className="input"
            type="number"
            name="workWidth"
            value={props.workWidth}
            onChange={props.workFormChanged}
            placeholder="width"
          />
          <span>x</span>
          <input
            className="input"
            type="number"
            name="workDepth"
            value={props.workDepth}
            onChange={props.workFormChanged}
            placeholder="depth"
          />
        </div>

        <p className="typ_form_label">* Genre</p>
        <div className="select">
          <select name="workGenre" value={props.workGenre} onChange={props.workFormChanged}>
            {props.genres.map(g => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        <p className="typ_form_label">* SubGenre</p>
        <div className="select">
          <select name="workSubGenre" value={props.workSubGenre} onChange={props.workFormChanged}>
            {props.selectableSubGenres.map(sg => (
              <option key={sg.id} value={sg.id}>
                {sg.name}
              </option>
            ))}
          </select>
        </div>

        <p className="typ_form_label">Colors</p>
        <p className="userDetail__workUpload__form__colors1">
          <label htmlFor="crimson">
            <input id="crimson" type="checkbox" name="workColorCrimson" value={!props.workColorCrimson} checked={props.workColorCrimson} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'crimson' }} />
          </label>
          <label htmlFor="mediumBlue">
            <input id="mediumBlue" type="checkbox" name="workColorMediumBlue" value={!props.workColorMediumBlue} checked={props.workColorMediumBlue} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'mediumblue' }} />
          </label>
          <label htmlFor="forestGreen">
            <input id="forestGreen" type="checkbox" name="workColorForestGreen" value={!props.workColorForestGreen} checked={props.workColorForestGreen} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'forestgreen' }} />
          </label>
          <label htmlFor="gold">
            <input id="gold" type="checkbox" name="workColorGold" value={!props.workColorGold} checked={props.workColorGold} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'gold' }} />
          </label>
          <label htmlFor="purple">
            <input id="purple" type="checkbox" name="workColorPurple" value={!props.workColorPurple} checked={props.workColorPurple} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'purple' }} />
          </label>
        </p>
        <p className="userDetail__workUpload__form__colors2">
          <label htmlFor="brown">
            <input id="brown" type="checkbox" name="workColorBrown" value={!props.workColorBrown} checked={props.workColorBrown} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'brown' }} />
          </label>
          <label htmlFor="black">
            <input id="black" type="checkbox" name="workColorBlack" value={!props.workColorBlack} checked={props.workColorBlack} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'black' }} />
          </label>
          <label htmlFor="grey">
            <input id="grey" type="checkbox" name="workColorGrey" value={!props.workColorGrey} checked={props.workColorGrey} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'grey' }} />
          </label>
          <label htmlFor="ivory">
            <input id="ivory" type="checkbox" name="workColorIvory" value={!props.workColorIvory} checked={props.workColorIvory} onChange={props.workFormChanged} />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'ivory', border: '1px solid grey' }} />
          </label>
          <label htmlFor="dummy" style={{ opacity: '0' }}>
            <input id="dummy" type="checkbox" name="dummy" />
            <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'ivory', border: '1px solid grey' }} />
          </label>
        </p>

        <p className="typ_form_label">* Price</p>
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
      </div>
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
