import React from 'react'
import PropTypes from 'prop-types'

import VOID from '../assets/700.gif'

const userDetailWorkUpload = props => {
  return (
    <React.Fragment>
      <div className="workEditAndUpload__images">
        <p className="workEditAndUpload__images__main">
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.work[`imageUrl${props.workImageUrlCurrent}`]})` }}
            alt=""
          />
        </p>

        <p className="workEditAndUpload__images__sub" onClick={() => props.workSubImagesClicked('1')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.work.imageUrl1})` }}
            alt=""
          />
        </p>

        <p className="workEditAndUpload__images__sub" onClick={() => props.workSubImagesClicked('2')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.work.imageUrl2})` }}
            alt=""
          />
        </p>

        <p className="workEditAndUpload__images__sub" onClick={() => props.workSubImagesClicked('3')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.work.imageUrl3})` }}
            alt=""
          />
        </p>

        <p className="workEditAndUpload__images__sub" onClick={() => props.workSubImagesClicked('4')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.work.imageUrl4})` }}
            alt=""
          />
        </p>

        <p className="workEditAndUpload__images__sub" onClick={() => props.workSubImagesClicked('5')}>
          <img
            src={VOID}
            style={{ backgroundImage: `url(${props.work.imageUrl5})` }}
            alt=""
          />
        </p>

        <div className="workEditAndUpload__images__buttons">
          <input style={{ display: 'none' }} type="file" accept="image/*" ref={props.buttonRef} onChange={props.workImageSelected} />
          <button className="w_btn w_btn__15rem" type="button" onClick={props.workImageSelectBtnClicked}>
            Select
          </button>
          <button className="w_btn w_btn__15rem" type="button" onClick={props.resetWorkImages}>
            Clear
          </button>
        </div>
      </div>

      <div className="workEditAndUpload__form">
        <p className="typ_form_label">* Title</p>
        <input
          className="input"
          name="title"
          required={true}
          value={props.work.title}
          onChange={props.workFormChanged}
          placeholder="Work Title"
        />
        <p className="typ_form_label">* Caption</p>
        <textarea
          className="text_input"
          name="caption"
          required={true}
          value={props.work.caption}
          onChange={props.workFormChanged}
          placeholder="caption"
        />
        <p className="typ_form_label">Technique</p>
        <input
          className="input"
          name="technique"
          value={props.work.technique}
          onChange={props.workFormChanged}
          placeholder="例）銀塩プリント、油絵"
        />
        <p className="typ_form_label">Year</p>
        <input
          className="input"
          name="year"
          value={props.work.year}
          onChange={props.workFormChanged}
          placeholder="例）2013年制作、2015年秋頃"
        />

        <p className="typ_form_label">Sign</p>
        <input
          className="input"
          name="sign"
          value={props.work.sign}
          onChange={props.workFormChanged}
          placeholder="例）有り（作品裏側）"
        />

        <p className="typ_form_label">Edition</p>
        <input
          className="input"
          name="edition"
          value={props.work.edition}
          onChange={props.workFormChanged}
          placeholder="例）1/20、エディション無し"
        />

        <p className="typ_form_label">Frame</p>
        <input
          className="input"
          name="frame"
          value={props.work.frame}
          onChange={props.workFormChanged}
          placeholder="例）フレーム無し、メタルフレーム"
        />
        <p className="typ_form_label">*Size (mm)</p>
        <div className="workEditAndUpload__form__sizeInputs">
          <input
            className="input"
            type="number"
            name="height"
            required={true}
            value={props.work.height}
            onChange={props.workFormChanged}
            placeholder="height"
          />
          <span>x</span>
          <input
            className="input"
            type="number"
            name="width"
            required={true}
            value={props.work.width}
            onChange={props.workFormChanged}
            placeholder="width"
          />
          <span>x</span>
          <input
            className="input"
            type="number"
            name="depth"
            required={true}
            value={props.work.depth}
            onChange={props.workFormChanged}
            placeholder="depth"
          />
        </div>

        <p className="typ_form_label">* Genre</p>
        <div className="select">
          <select name="genre" required={true} value={props.work.genre} onChange={props.workFormChanged}>
            <option value="">select genre</option>
            {props.genres.map(g => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        <p className="typ_form_label">* SubGenre</p>
        <div className="select">
          <select name="subgenre" required={true} value={props.work.subgenre} onChange={props.workFormChanged}>
            <option value="">select sub genre</option>
            {props.selectableSubGenres.map(sg => (
              <option key={sg.id} value={sg.id}>
                {sg.name}
              </option>
            ))}
          </select>
        </div>

        <p className="typ_form_label">Colors (Max 3)</p>
        <p className="workEditAndUpload__form__colors1">
          <label className="colorChecker" htmlFor="crimson">
            <input id="crimson" type="checkbox" name="crimson" value={!props.work.crimson} checked={props.work.crimson} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'crimson' }} />
          </label>
          <label className="colorChecker" htmlFor="mediumBlue">
            <input id="mediumBlue" type="checkbox" name="mediumblue" value={!props.work.mediumblue} checked={props.work.mediumblue} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'mediumblue' }} />
          </label>
          <label className="colorChecker" htmlFor="forestGreen">
            <input id="forestGreen" type="checkbox" name="forestgreen" value={!props.work.forestgreen} checked={props.work.forestgreen} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'forestgreen' }} />
          </label>
          <label className="colorChecker" htmlFor="gold">
            <input id="gold" type="checkbox" name="gold" value={!props.work.gold} checked={props.work.gold} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'gold' }} />
          </label>
          <label className="colorChecker" htmlFor="purple">
            <input id="purple" type="checkbox" name="purple" value={!props.work.purple} checked={props.work.purple} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'purple' }} />
          </label>
          <label className="colorChecker" htmlFor="brown">
            <input id="brown" type="checkbox" name="brown" value={!props.work.brown} checked={props.work.brown} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'brown' }} />
          </label>
          <label className="colorChecker" htmlFor="black">
            <input id="black" type="checkbox" name="black" value={!props.work.black} checked={props.work.black} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'black' }} />
          </label>
          <label className="colorChecker" htmlFor="grey">
            <input id="grey" type="checkbox" name="grey" value={!props.work.grey} checked={props.work.grey} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'grey' }} />
          </label>
          <label className="colorChecker" htmlFor="ivory">
            <input id="ivory" type="checkbox" name="ivory" value={!props.work.ivory} checked={props.work.ivory} onChange={props.workFormChanged} />
            <span style={{ backgroundColor: 'ivory', border: '1px solid grey' }} />
          </label>
        </p>

        <p className="typ_form_label">* Price</p>
        <input
          className="input"
          name="price"
          type="number"
          required={true}
          value={props.work.price}
          onChange={props.workFormChanged}
        />
        {props.edit ? (
          <button className="b_btn b_btn__13rem" type="button" onClick={props.update}>
            Save
          </button>
        ) : (
          <button className="b_btn b_btn__13rem" type="button" onClick={props.upload}>
            Upload!
          </button>
        )}

      </div>
    </React.Fragment>
  )
}

userDetailWorkUpload.propTypes = {
  upload: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  workFormChanged: PropTypes.func.isRequired,
  workImageSelectBtnClicked: PropTypes.func.isRequired,
  workImageSelected: PropTypes.func.isRequired,
  workSubImagesClicked: PropTypes.func.isRequired,
  resetWorkImages: PropTypes.func.isRequired,
  buttonRef: PropTypes.shape({ current: PropTypes.object }),
  genres: PropTypes.arrayOf(PropTypes.object),
  selectableSubGenres: PropTypes.arrayOf(PropTypes.object),
  workImageUrlCurrent: PropTypes.string,
  work: PropTypes.shape({
    imageUrl1: PropTypes.string,
    imageUrl2: PropTypes.string,
    imageUrl3: PropTypes.string,
    imageUrl4: PropTypes.string,
    imageUrl5: PropTypes.string,
    title: PropTypes.string,
    caption: PropTypes.string,
    edition: PropTypes.string,
    sign: PropTypes.string,
    frame: PropTypes.string,
    technique: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    depth: PropTypes.string,
    year: PropTypes.string,
    price: PropTypes.string,
    genre: PropTypes.string,
    subgenre: PropTypes.string,
    crimson: PropTypes.bool,
    mediumblue: PropTypes.bool,
    forestgreen: PropTypes.bool,
    gold: PropTypes.bool,
    purple: PropTypes.bool,
    brown: PropTypes.bool,
    black: PropTypes.bool,
    grey: PropTypes.bool,
    ivory: PropTypes.bool,
  }),
  edit: PropTypes.bool
}

export default userDetailWorkUpload
