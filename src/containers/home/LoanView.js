import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { show } from 'redux-modal'
import { Button } from 'react-bootstrap'
import LoanModal from './LoanModal.js'
import { invest } from '../../modules/loans'
import { floatToCommaSeparated } from '../../helpers/currency.js'
import { asWeekString } from '../../helpers/time.js'
import './home.css'


const LoanView = props => {
  const modalName = `loan-${props.id}`
  const canBorrow = ((props.available > 0) && (props.user.balance > 0))

  const handleOpen = name => () => {
    props.show(modalName, {...props, canBorrow})
  };

  const isInvested = () => {
    for(let i=0; i<props.userLoans.length; i++)
      if(props.userLoans[i].id === props.id)
        return <div className="invested">Invested</div> 
  }

  return (
    <div className="col-lg-4 col-sm-12">
      <div className={`row loan-card ${props.available > 0 ? 'available':'unavailable'}`}>
        <div className="col-sm-9">
          <div className="title">{props.title}</div>
          <div className="time">{asWeekString(props.term_remaining)}</div>
        </div>
        <div className="col-sm-3 sm-right">
          {isInvested()}
          <div className="available">${floatToCommaSeparated(props.available)}</div>
          <div className="interest">{props.annualised_return}%</div>
        </div>
        <div className="col-sm-12 pull-right sm-right">
          <Button 
            onClick={handleOpen(modalName)} 
            disabled={ (props.available <= 0) || (props.user.balance <= 0) }>
            Invest
          </Button>
        </div>
        <LoanModal name={modalName} {...props} />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.loans.user,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  show, invest,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoanView)
