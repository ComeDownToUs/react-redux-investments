import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoanView from './LoanView.js'
import {
  invest,
  closeNotification
} from '../../modules/loans'
import {floatToCommaSeparated} from '../../helpers/currency.js'

const Home = props => (
  <div className="container">
    <h1>Home</h1>
    <div className="row">
      {props.loans.map((loan) => <LoanView key={loan.id} {...loan} userLoans={props.user.loans} />)}
    </div>
    <div className="row">
      <div className="col-md-12">
        <h1>You have ${floatToCommaSeparated(props.user.balance)} available</h1>
      <button onClick={props.closeNotification} disabled={props.notification.display}>Close Notification</button>
      <button onClick={() => props.changePage()}>View Full User Info</button>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  user: state.loans.user,
  loans: state.loans.loan_data,
  notification: state.loans.notification,
  time: state.loans.time,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  invest,
  closeNotification,
  changePage: () => push('/user-info')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)
