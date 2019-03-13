import React from 'react'
import { connect } from 'react-redux'

import ModalWindow from '../components/modalWindow'
import Header from '../components/header'
import DownMenu from '../components/downMenu'

import { getColors, getGenres } from '../actions/filters'

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      downMenuClass: true,

      // filter modal
      main: 'random',
      color: '',
      genre: '',
      selectableSubGenres: [],
      subGenre: '',
      width: '',
      height: '',
      depth: '',
      price: '',
    }
  }

  componentWillMount() {
    this.props.getColors()
    this.props.getGenres()
  }

  top = () => this.props.history.push('/')

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
    if (e.target.name === 'genre') {
      const selectedGenre = this.props.filters.contents.genres.filter(g => g.name === e.target.value)

      this.setState({
        genre: selectedGenre[0].name,
        selectableSubGenres: selectedGenre[0].subgenres
      })
      return null
    }

    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (this.props.filters.pristine) return null

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
            price={this.state.price}
            selectableSubGenres={this.state.selectableSubGenres}

            filters={this.props.filters}
            filterChanged={this.filterChanged}
          />

          <Header
            menuClicked={this.menuClicked}
            burgerToggleClicked={this.burgerToggleClicked}
            loginStatus={this.props.loginStatus}
            userId={this.props.loginStatus.user_id}
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
    filters: state.filters,
  }),
  dispatch => ({
    getColors: () => dispatch(getColors()),
    getGenres: () => dispatch(getGenres()),
  })
)(HeaderContainer)
