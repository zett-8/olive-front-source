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

const modalWindow = props => {
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
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(e.value)
        }}
      >
        <input
          type="radio"
          name="main"
          value="random"
          checked={props.main === 'random'}
          onChange={props.filterChanged}
        />
        Random
        <input
          type="radio"
          name="main"
          value="popular"
          checked={props.main === 'popular'}
          onChange={props.filterChanged}
        />
        Popular
        <input type="radio" name="main" value="new" checked={props.main === 'new'} onChange={props.filterChanged} />
        New

        {props.filters.contents.colors.map(c => (
          <React.Fragment key={c.name}>
            <input type="checkbox" name="color" value={c.name} />
            {c.name}
          </React.Fragment>
        ))}

        <select name="genre" value={props.genre} onChange={props.filterChanged}>
          <option value="">-</option>
          {props.filters.contents.genres.map(g => (
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

        <select name="width" value={props.width} onChange={props.filterChanged}>
          <option value="">-</option>
          <option value="300">〜 300mm</option>
          <option value="1000">〜 1000mm</option>
          <option value="2000">〜 2000mm</option>
        </select>
        <select name="height" value={props.height} onChange={props.filterChanged}>
          <option value="">-</option>
          <option value="300">〜 300mm</option>
          <option value="1000">〜 1000mm</option>
          <option value="2000">〜 2000mm</option>
        </select>
        <select name="depth" value={props.depth} onChange={props.filterChanged}>
          <option value="">-</option>
          <option value="300">〜 300mm</option>
          <option value="1000">〜 1000mm</option>
          <option value="2000">〜 2000mm</option>
        </select>
        <input type="number" name="price" value={props.price} onChange={props.filterChanged} />
        <button type="submit">search</button>
        <button type="button" onClick={() => console.log('not yet')}>
          clear
        </button>
        <button type="button" onClick={props.closeModal}>
          close
        </button>
      </form>
    </ModalSetting>
  )
}

modalWindow.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  main: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  depth: PropTypes.string,
  genre: PropTypes.string,
  subGenre: PropTypes.string,
  selectableSubGenres: PropTypes.arrayOf(PropTypes.object),
  price: PropTypes.string,
  filterChanged: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    contents: PropTypes.object,
  }),
}

export default modalWindow
