import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  invest,
  closeNotification
} from '../../modules/loans'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
      Loan list goes here
    </p>
    <p>
      <button onClick={props.closeNotification} disabled={props.notification.display}>Close Notification</button>
    </p>
    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

const mapStateToProps = state => ({
  user: state.loans.user,
  loans: state.loans.loans,
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
