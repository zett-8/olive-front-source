import React from 'react'
import { connect } from 'react-redux'

import ModalWindow from '../components/modal/filterModalWindow'
import Header from '../components/header'
import DownMenu from '../components/downMenu'

import { getGenres } from '../actions/genres'
import { getFilteredWorks } from '../actions/workList'
import { getUserDetail } from '../actions/userDetail'

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      downMenuClass: true,

      // filter modal
      ordering: 'random',
      genre: '',
      selectableSubGenres: [],
      subGenre: '',
      minWidth: '',
      maxWidth: '',
      minHeight: '',
      maxHeight: '',
      minDepth: '',
      maxDepth: '',
      colorCrimson: false,
      colorMediumBlue: false,
      colorForestGreen: false,
      colorGold: false,
      colorPurple: false,
      colorBrown: false,
      colorBlack: false,
      colorGrey: false,
      colorIvory: false,
      excludeSoldWorks: false,
      price: '',
    }
  }

  componentWillMount() {
    this.props.getGenres()

    if (Object.keys(this.props.loginStatus).length) this.props.getUserDetail(this.props.loginStatus.uuid)
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
    // refine data
    if (value === 'false' || value === 'true') value = value === 'true'
    if ( value.length > 1 && value[0] === '0') value = value.slice(1)

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

  filterWorks = async () => {
    let q = `ordering=${this.state.ordering}`

    let colors = [];
    ['Crimson', 'MediumBlue', 'ForestGreen', 'Gold', 'Purple', 'Brown', 'Black', 'Grey', 'White'].forEach(color => {
      if (this.state[`color${color}`]) colors.push(color.toLowerCase())
    })

    if (colors.length) q += `&colors=${colors.join('-')}`
    if (this.state.genre) q += `&genre=${this.state.genre}`
    if (this.state.subGenre) q += `&subgenre=${this.state.subGenre}`
    if (this.state.minWidth || this.state.maxWidth)
      q += `&width=${this.state.minWidth || '0'}-${this.state.maxWidth || '100000'}`
    if (this.state.minHeight || this.state.maxHeight)
      q += `&height=${this.state.minHeight || '0'}-${this.state.maxHeight || '100000'}`
    if (this.state.minDepth || this.state.maxDepth)
      q += `&depth=${this.state.minDepth || '0'}-${this.state.maxDepth || '0'}`
    if (this.state.price) q += `&price=${this.state.price}`
    if (this.state.excludeSoldWorks) q += '&excludeSoldWorks=true'

    this.closeModal()
    await this.props.getFilteredWorks(q)
    this.props.history.push(`/filteredWorks/${q}`)
  }

  render() {
    return (
      <React.Fragment>
        <DownMenu
          class={this.state.downMenuClass}
          menuClicked={this.menuClicked}
          loginStatus={this.props.loginStatus}
        />

        <header className="nav">
          <ModalWindow
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            ordering={this.state.ordering}
            genre={this.state.genre}
            subGenre={this.state.subGenre}
            minWidth={this.state.minWidth}
            maxWidth={this.state.maxWidth}
            minHeight={this.state.minHeight}
            maxHeight={this.state.maxHeight}
            minDepth={this.state.minDepth}
            maxDepth={this.state.maxDepth}
            colorCrimson={this.state.colorCrimson}
            colorMediumBlue={this.state.colorMediumBlue}
            colorForestGreen={this.state.colorForestGreen}
            colorGold={this.state.colorGold}
            colorPurple={this.state.colorPurple}
            colorBrown={this.state.colorBrown}
            colorBlack={this.state.colorBlack}
            colorGrey={this.state.colorGrey}
            colorIvory={this.state.colorIvory}
            excludeSoldWorks={this.state.excludeSoldWorks}
            price={this.state.price}
            selectableSubGenres={this.state.selectableSubGenres}
            genres={this.props.genres.contents}
            filterChanged={this.filterChanged}
            filterWorks={this.filterWorks}
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
    getGenres: () => dispatch(getGenres()),
    getFilteredWorks: q => dispatch(getFilteredWorks(q)),
    getUserDetail: UUID => dispatch(getUserDetail(UUID))
  })
)(HeaderContainer)
