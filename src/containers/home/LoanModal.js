import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import {
  invest
} from '../../modules/loans'

const MyModal = (props) => {

  const investSum = () => {
    console.log()
  } 

  return (
    <Modal show={props.show}>
      <form>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Please enter a sum you wish to invest:  
          <input 
            type="text" 
            placeholder={`Range: 0-$${props.available}`}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleHide}>Close</Button>
          <Button bsStyle="primary" onClick={investSum.bind(this)}>Save changes</Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

MyModal.propTypes = {
  title: PropTypes.string,
  handleHide: PropTypes.func.isRequired,
};

const DynamicModal = (props) => {
  const WrappedMyModal = connectModal(props)(MyModal)
  return <WrappedMyModal />
}

const mapStateToProps = state => ({
  user: state.loans.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  invest,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DynamicModal);
