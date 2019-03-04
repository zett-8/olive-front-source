import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import Header from '../components/header'
import DownMenu from '../components/downMenu'

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

Modal.setAppElement('#root')

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      downMenuClass: true,
    }
  }

  top = () => this.props.history.push('/')

  burgerToggleClicked = () => {
    this.setState({ downMenuClass: !this.state.downMenuClass })
  }

  // modal functions
  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false })
  afterOpenModal = () => (this.subtitle.style.color = '#000')

  menuClicked = page => {
    this.props.history.push(page)
    this.setState({ downMenuClass: true })
  }

  render() {
    return (
      <React.Fragment>
        <DownMenu
          class={this.state.downMenuClass}
          menuClicked={this.menuClicked}
          loggedIn={!!Object.keys(this.props.loginStatus).length}
        />
        <header className="nav">
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel={'search filter'}
          >
            <h2 ref={subtitle => (this.subtitle = subtitle)}>Search filter</h2>
            <div>I am a modal</div>
            <button onClick={() => console.log('not yet')}>save</button>
            <button onClick={() => console.log('not yet')}>clear</button>
            <button onClick={this.closeModal}>close</button>
          </Modal>

          <Header
            menuClicked={this.menuClicked}
            burgerToggleClicked={this.burgerToggleClicked}
            loggedIn={Object.keys(this.props.loginStatus).length ? true : false}
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
  }),
  null
)(HeaderContainer)
