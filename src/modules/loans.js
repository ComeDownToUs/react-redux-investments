import initialState from '../helpers/initialState.js'

export const INVEST = 'loans/INVEST'
export const NOTIFICATION = 'loans/NOTIFICATION'

export default (state = initialState, action) => {
  switch (action.type) {
    case INVEST:
      return {
        ...state,
        user: {
          ...state.user,
          balance: action.userBalance,
          loans: [
            ...state.user.loans,
            action.newLoan,
          ]
        },
      }
    case NOTIFICATION:
      return {
        ...state,
        notification: {
          display: action.display,
          message: action.message,
        },
      }
    default:
      return state
  }
}

export const openNotification = (state, message) => dispatch => {
  dispatch({
    type: NOTIFICATION,
    display: true,
    message: message,
  })
}

export const closeNotification = (state) => dispatch => {
  dispatch({
    type: NOTIFICATION,
    display: true,
    message: 'Oh yes',
  })
}

const getLoan = (state, loanId) => {
  for(const loan in state.loans){
    if (loan.id === loanId)
      return loan
  }
  return null
}

export const invest = (state, loanId, amount) => {
  const loan = getLoan(state, loanId)

  if(amount < state.user.balance && amount < loan.available) {
    return dispatch => dispatch({
      type: INVEST,
      userBalance: state.user.balance - amount,
      newLoan: {
        id: loanId,
        amount: amount,
        date: state.time,
      }
    })
  }
  openNotification(state, "Loan cannot be completed")
}
