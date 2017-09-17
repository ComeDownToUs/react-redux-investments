import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

const MyModal = (props) => {
  const { handleHide, message, show } = props

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Hello</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        { message }
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleHide}>Close</Button>
        <Button bsStyle="primary" onClick={this.handleClose}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

MyModal.propTypes = {
  message: PropTypes.string.isRequired,
  handleHide: PropTypes.func.isRequired
};

const DynamicModal = (props) => {
  const { name } = props
  const WrappedMyModal = connectModal({ name })(MyModal)
  return <WrappedMyModal />
}

export default DynamicModal;
