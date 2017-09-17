import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { show } from 'redux-modal'
import { Button } from 'react-bootstrap'
import LoanModal from './LoanModal.js'


const LoanView = props => {
  const modalName = `loan-${props.id}`

  const handleOpen = name => () => {
    props.show(modalName, { message: `This is a ${name} modal` })
  };

  return (
    <div className="col-md-4 col-sm-12">
      <div className={`loan-card ${props.available > 0 ? 'available':'unavailable'}`}>
        <div className="title">{props.title}</div>
        {props.userLoans.indexOf(props.id) !== -1 ? <div className="invested">Invested</div> : ''}
        <div className="available">${props.available}</div>
        <div className="interest">{props.annualised_return}%</div>
        <Button onClick={handleOpen(modalName)} />
        <LoanModal name={modalName} {...props} />
      </div>
    </div>
  )
};


export default connect(
  null,
  dispatch => bindActionCreators({ show }, dispatch)
)(LoanView)