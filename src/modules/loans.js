import initialState from '../helpers/initialState.js'

export const INVEST = 'loans/INVEST'
export const NOTIFICATION = 'loans/NOTIFICATION'

export default (state = initialState, action) => {
  switch (action.type) {
    case INVEST:
      const loan = getLoan(state, action.loanId)
      if (loan === null){
        return {
          ...state,
          notification: {
            display: true,
            message: 'no such loan',
          }
        }
      }
      if (validateInvestment(loan, state.user, action.amount)){
        const loanIndex = getLoanIndex(state.loan_data, action.loanId)
        const newBalanceLoan = loan.available - action.amount
        const updatedLoan = {
          ...loan, 
          available: newBalanceLoan,
        }
        const newLoanData = [
            ...state.loan_data.slice(0, loanIndex),
            updatedLoan,
            ...state.loan_data.slice(loanIndex+1)
        ]
        return {
          ...state,
          user: {
            ...state.user,
            balance: state.user.balance - action.amount,
            loans: [
              ...state.user.loans,
              {
                id: action.loanId,
                amount: action.amount,
                time: state.time,
              }
            ]
          },
          loan_data: newLoanData,        
        }
      }
      else{
        return {
          ...state,
          notification: {
            display: true,
            message: 'insufficient funds',
          }
        }
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

const validateInvestment = (loan, user, amount) => {
  if( (loan.available - amount) < 0 || (user.balance - amount) < 0)
    return false
  else
    return true
}

const getLoan = (state, loanId) => {
  for(let i=0; i<state.loan_data.length; i++)
    if (state.loan_data[i].id === loanId)
      return state.loan_data[i]
  return null
}

const getLoanIndex = (loans, loanId) => {
  for (let i in loans) {
    if (loans[i].id === loanId)
      return i
  }
  return -1
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
    message: '',
  })
}

export const invest = (loanId, amount) => dispatch => {
  dispatch({
    type: INVEST,
    amount,
    loanId
  })
}
