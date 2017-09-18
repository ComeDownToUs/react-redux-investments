import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import InvestForm from './InvestForm.js'
import { invest } from '../../modules/loans'

const MyModal = (props) => {

  const submit = (values) => {
    console.log(values)
    props.invest(props.id, values.investsum)
    props.handleHide()
  }

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Button onClick={props.handleHide} className="close-icon">X</Button>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InvestForm onSubmit={submit} {...props}/>
      </Modal.Body>
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
