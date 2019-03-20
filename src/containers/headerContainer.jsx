import React from 'react'
import { connect } from 'react-redux'

import ModalWindow from '../components/modalWindow'
import Header from '../components/header'
import DownMenu from '../components/downMenu'

import { getGenres } from '../actions/genres'

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      downMenuClass: true,

      // filter modal
      main: 'random',
      genre: '',
      selectableSubGenres: [],
      subGenre: '',
      width: '',
      height: '',
      depth: '',
      colorCrimson: false,
      colorMediumBlue: false,
      colorForestGreen: false,
      colorGold: false,
      colorPurple: false,
      colorBrown: false,
      colorBlack: false,
      colorGrey: false,
      colorIvory: false,
      price: '',
    }
  }

  componentWillMount() {
    this.props.getGenres()
  }

  burgerToggleClicked = () => {
    this.setState({ downMenuClass: !this.state.downMenuClass })
  }

  // slide down menu function
  menuClicked = page => {
    this.props.history.push(page)
    this.setState({ downMenuClass: true })
  }

  // modal functions
  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false })

  filterChanged = e => {
    let { name, value } = e.target
    if (value === 'false' || value === 'true') value = value === 'true'

    if (name === 'genre') {
      if (value === '') {
        this.setState({
          genre: '',
          selectableSubGenres: []
        })
        return null
      }
      const selectedGenre = this.props.genres.contents.filter(g => g.name === value)

      this.setState({
        genre: selectedGenre[0].name,
        selectableSubGenres: selectedGenre[0].subgenres,
      })
      return null
    }

    this.setState({ [name]: value })
  }

  render() {
    if (this.props.genres.pristine) return null

    return (
      <React.Fragment>
        <DownMenu
          class={this.state.downMenuClass}
          menuClicked={this.menuClicked}
          loggedIn={!!Object.keys(this.props.loginStatus).length}
        />

        <header className="nav">
          <ModalWindow
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            main={this.state.main}
            genre={this.state.genre}
            subGenre={this.state.subGenre}
            width={this.state.width}
            height={this.state.height}
            depth={this.state.depth}
            colorCrimson={this.state.colorCrimson}
            colorMediumBlue={this.state.colorMediumBlue}
            colorForestGreen={this.state.colorForestGreen}
            colorGold={this.state.colorGold}
            colorPurple={this.state.colorPurple}
            colorBrown={this.state.colorBrown}
            colorBlack={this.state.colorBlack}
            colorGrey={this.state.colorGrey}
            colorIvory={this.state.colorIvory}
            price={this.state.price}
            selectableSubGenres={this.state.selectableSubGenres}
            genres={this.props.genres.contents}
            filterChanged={this.filterChanged}
          />

          <Header
            menuClicked={this.menuClicked}
            burgerToggleClicked={this.burgerToggleClicked}
            loginStatus={this.props.loginStatus}
            openModal={this.openModal}
          />
        </header>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    genres: state.genres,
  }),
  dispatch => ({
    getGenres: () => dispatch(getGenres())
  })
)(HeaderContainer)
