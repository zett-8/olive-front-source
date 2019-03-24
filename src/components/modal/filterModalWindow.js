import React from 'react'
import PropTypes from 'prop-types'
import ModalSetting from 'react-modal'

const customStyles = {
  content: {
    zIndex: '100',
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
  },
  // overlay : {
  //   backgroundColor: '#f6f6f6'
  // }
}

ModalSetting.setAppElement('#root')

const filterModalWindow = props => {
  return (
    <ModalSetting
      isOpen={props.modalIsOpen}
      // onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="search filter"
    >
      <h2>Seach Filter</h2>
      {/* <h2 ref={subtitle => (subtitle = subtitle)}>Search filter</h2> */}
      <input
        type="radio"
        name="ordering"
        value="random"
        checked={props.ordering === 'random'}
        onChange={props.filterChanged}
      />
      Random
      <input
        type="radio"
        name="ordering"
        value="popular"
        checked={props.ordering === 'popular'}
        onChange={props.filterChanged}
      />
      Popular
      <input type="radio" name="ordering" value="new" checked={props.ordering === 'new'} onChange={props.filterChanged} />
      New

      <select name="genre" value={props.genre} onChange={props.filterChanged}>
        <option value="">-</option>
        {props.genres.map(g => (
          <option key={g.name} value={g.name}>
            {g.name}
          </option>
        ))}
      </select>

      <select name="subGenre" value={props.subGenre} onChange={props.filterChanged}>
        <option value="">-</option>
        {props.selectableSubGenres.map(g => (
          <option key={g.name} value={g.name}>
            {g.name}
          </option>
        ))}
      </select>

      <input name="minWidth" type="number" value={props.minWidth} onChange={props.filterChanged} />
      <input name="maxWidth" type="number" value={props.maxWidth} onChange={props.filterChanged} />
      <input name="minHeight" type="number" value={props.minHeight} onChange={props.filterChanged} />
      <input name="maxHeight" type="number" value={props.maxHeight} onChange={props.filterChanged} />
      <input name="minDepth" type="number" value={props.minDepth} onChange={props.filterChanged} />
      <input name="maxDepth" type="number" value={props.maxDepth} onChange={props.filterChanged} />

      <p>
        <input type="checkbox" name="colorCrimson" value={!props.colorCrimson} checked={props.colorCrimson} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'crimson' }} />
        <input type="checkbox" name="colorMediumBlue" value={!props.colorMediumBlue} checked={props.colorMediumBlue} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'mediumblue' }} />
        <input type="checkbox" name="colorForestGreen" value={!props.colorForestGreen} checked={props.colorForestGreen} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'forestgreen' }} />
        <input type="checkbox" name="colorGold" value={!props.colorGold} checked={props.colorGold} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'gold' }} />
        <input type="checkbox" name="colorPurple" value={!props.colorPurple} checked={props.colorPurple} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'purple' }} />
        <input type="checkbox" name="colorBrown" value={!props.colorBrown} checked={props.colorBrown} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'brown' }} />
        <input type="checkbox" name="colorBlack" value={!props.colorBlack} checked={props.colorBlack} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'black' }} />
        <input type="checkbox" name="colorGrey" value={!props.colorGrey} checked={props.colorGrey} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'grey' }} />
        <input type="checkbox" name="colorIvory" value={!props.colorIvory} checked={props.colorIvory} onChange={props.filterChanged} />
        <span style={{ display: 'inline-block', height: '2rem', width: '2rem', backgroundColor: 'ivory', border: '1px solid grey' }} />
      </p>
      <input type="number" name="price" value={props.price} onChange={props.filterChanged} />
      <input type="checkbox" name="excludeSoldWorks" value={props.excludeSoldWorks} onChange={props.filterChanged} />
      <button type="button" onClick={props.filterWorks}>search</button>
      <button type="button" onClick={() => console.log('not yet')}>
        clear
      </button>
      <button type="button" onClick={props.closeModal}>
        close
      </button>
    </ModalSetting>
  )
}

filterModalWindow.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  ordering: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  minDepth: PropTypes.string,
  maxDepth: PropTypes.string,
  genre: PropTypes.string,
  subGenre: PropTypes.string,
  selectableSubGenres: PropTypes.arrayOf(PropTypes.object),
  colorCrimson: PropTypes.bool,
  colorMediumBlue: PropTypes.bool,
  colorForestGreen: PropTypes.bool,
  colorGold: PropTypes.bool,
  colorPurple: PropTypes.bool,
  colorBrown: PropTypes.bool,
  colorBlack: PropTypes.bool,
  colorGrey: PropTypes.bool,
  colorIvory: PropTypes.bool,
  excludeSoldWorks: PropTypes.bool,
  price: PropTypes.string,
  filterChanged: PropTypes.func.isRequired,
  filterWorks: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    contents: PropTypes.object,
  }),
  genres: PropTypes.arrayOf(PropTypes.object)
}

export default filterModalWindow
