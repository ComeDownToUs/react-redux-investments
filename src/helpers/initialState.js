import loanfile from './loans.json'
import { commaSeparatedToFloat } from './currency.js'


const formatLoans = (loans) => {
  loans.forEach(loan => {
    loan.available = commaSeparatedToFloat(loan.available)
    loan.amount = commaSeparatedToFloat(loan.amount)
    loan.ltv = parseFloat(loan.ltv)
    loan.term_remaining = parseInt(loan.term_remaining, 10)
    loan.annualised_return = parseFloat(loan.annualised_return)
  })
  return loans
}

export default {
  loans: {
    loan_data: formatLoans(loanfile.loans),
    user: {
      name: "Bob",
      balance: 15000,
      loans: [],
    },
    notification: {
      display: false,
      message: '',
    },
    time: 0,
  },
  routing: {},
  modal: {},
}
