import React from 'react'
import PropTypes from 'prop-types'
import ModalSetting from 'react-modal'

const customStyles = {
  content: {
    zIndex: '12',
    top: '48%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content'
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
      <div className="searchFilterModal">
        <h2>Seach Filter</h2>
        {/* <h2 ref={subtitle => (subtitle = subtitle)}>Search filter</h2> */}
        <div className="searchFilterModal__first_row">
          <div className="searchFilterModal__first_row__ordering">
            <p>Ordering</p>
            <div>
              <label htmlFor="random">
                <input
                  id="random"
                  type="radio"
                  name="ordering"
                  value="random"
                  checked={props.ordering === 'random'}
                  onChange={props.filterChanged}
                />
                <span>Random</span>
              </label>

              <label htmlFor="popular">
                <input
                  id="popular"
                  type="radio"
                  name="ordering"
                  value="popular"
                  checked={props.ordering === 'popular'}
                  onChange={props.filterChanged}
                />
                <span>Popular</span>
              </label>

              <label htmlFor="new">
                <input
                  id="new"
                  type="radio"
                  name="ordering"
                  value="new"
                  checked={props.ordering === 'new'}
                  onChange={props.filterChanged}
                />
                <span>New</span>
              </label>
            </div>
          </div>

          <div className="searchFilterModal__first_row__sell radio-btn">
            <input id="onSellOnly" type="checkbox" name="excludeSoldWorks" value={props.excludeSoldWorks} onChange={props.filterChanged} />
            <label htmlFor="onSellOnly">On Sell Only</label> {/* eslint-disable-line */}
          </div>
        </div>

        <div className="searchFilterModal__genres">
          <div className="searchFilterModal__genres__genre">
            <p>Genre</p>
            <div className="select">
              <select name="genre" value={props.genre} onChange={props.filterChanged}>
                <option value="">-</option>
                {props.genres.map(g => (
                  <option key={g.name} value={g.name}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="searchFilterModal__genres__subgenre">
            <p>Sub Genre</p>
            <div className="select">
              <select name="subGenre" value={props.subGenre} onChange={props.filterChanged}>
                <option value="">-</option>
                {props.selectableSubGenres.map(g => (
                  <option key={g.name} value={g.name}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="searchFilterModal__width">
          <p>Width</p>
          <input className="input" name="minWidth" type="number" value={props.minWidth} onChange={props.filterChanged} />
          <span> 〜 </span>
          <input className="input" name="maxWidth" type="number" value={props.maxWidth} onChange={props.filterChanged} />
          <span> mm</span>
        </div>

        <div className="searchFilterModal__height">
          <p>Height</p>
          <input className="input" name="minHeight" type="number" value={props.minHeight} onChange={props.filterChanged} />
          <span> 〜 </span>
          <input className="input" name="maxHeight" type="number" value={props.maxHeight} onChange={props.filterChanged} />
          <span> mm</span>
        </div>

        <div className="searchFilterModal__depth">
          <p>Depth</p>
          <input className="input" name="minDepth" type="number" value={props.minDepth} onChange={props.filterChanged} />
          <span> 〜 </span>
          <input className="input" name="maxDepth" type="number" value={props.maxDepth} onChange={props.filterChanged} />
          <span> mm</span>
        </div>

        <div className="searchFilterModal__colors">
          <p>Color</p>
          <div>
            <label htmlFor="crimson">
              <input id="crimson" type="checkbox" name="colorCrimson" value={!props.colorCrimson} checked={props.colorCrimson} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'crimson' }} />
            </label>
            <label htmlFor="mediumBlue">
              <input id="mediumBlue" type="checkbox" name="colorMediumBlue" value={!props.colorMediumBlue} checked={props.colorMediumBlue} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'mediumblue' }} />
            </label>
            <label htmlFor="forestGreen">
              <input id="forestGreen" type="checkbox" name="colorForestGreen" value={!props.colorForestGreen} checked={props.colorForestGreen} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'forestgreen' }} />
            </label>
            <label htmlFor="gold">
              <input id="gold" type="checkbox" name="colorGold" value={!props.colorGold} checked={props.colorGold} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'gold' }} />
            </label>
            <label htmlFor="purple">
              <input id="purple" type="checkbox" name="colorPurple" value={!props.colorPurple} checked={props.colorPurple} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'purple' }} />
            </label>
            <label htmlFor="brown">
              <input id="brown" type="checkbox" name="colorBrown" value={!props.colorBrown} checked={props.colorBrown} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'brown' }} />
            </label>
            <label htmlFor="black">
              <input id="black" type="checkbox" name="colorBlack" value={!props.colorBlack} checked={props.colorBlack} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'black' }} />
            </label>
            <label htmlFor="grey">
              <input id="grey" type="checkbox" name="colorGrey" value={!props.colorGrey} checked={props.colorGrey} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'grey' }} />
            </label>
            <label htmlFor="ivory">
              <input id="ivory" type="checkbox" name="colorIvory" value={!props.colorIvory} checked={props.colorIvory} onChange={props.filterChanged} />
              <span style={{ display: 'inline-block', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'ivory', border: '1px solid grey' }} />
            </label>
          </div>
        </div>

        <div className="searchFilterModal__price">
          <p>Price</p>
          <span>¥ 0 〜 </span>
          <input className="input" type="number" name="price" value={props.price} onChange={props.filterChanged} />
        </div>

        <div className="searchFilterModal__buttons">
          <button className="b_btn b_btn__8rem" type="button" onClick={props.filterWorks}>search</button>
          <button className="w_btn w_btn__8rem" type="button" onClick={() => null}>
            clear
          </button>
          <button className="w_btn w_btn__8rem" type="button" onClick={props.closeModal}>
            close
          </button>
        </div>
      </div>
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
