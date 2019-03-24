import React from 'react'
import PropTypes from 'prop-types'
import ModalSetting from 'react-modal'
import { CardElement } from 'react-stripe-elements'

const customStyles = {
  content: {
    zIndex: '100',
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    width: '80%'
  },
  // overlay : {
  //   backgroundColor: '#f6f6f6'
  // }
}

const purchaseModalWindow = props => {
  return (
    <ModalSetting
      isOpen={props.modalIsOpen}
      // onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Purchase Work"
    >
      <div className="checkout">
        <p>支払方法を選択</p>
        <CardElement />
        <button type="button" onClick={props.purchaseWithCredit}>Pay With Card</button>
      </div>
    </ModalSetting>
  )
}

purchaseModalWindow.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  purchaseWithCredit: PropTypes.func.isRequired
}

export default purchaseModalWindow
