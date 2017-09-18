import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormControl, Button } from 'react-bootstrap'

class InvestForm extends Component {
  getMaxInvestment(){
    if(this.props.user.balance < this.props.available)
      return this.props.user.balance
    else
      return this.props.available
  }

  inputText({input, meta: {touched, error}, ...custom}){
    const hasError = touched && error !== undefined
    return (
      <div>
        <FormControl 
          type="text"
          {...input}
          {...custom}
          {...hasError}
        />
      </div>
    )
  }

  render(){
    const { handleSubmit } = this.props

    return (
      <form onSubmit={ handleSubmit }>
        <Field 
          name='investsum' 
          component={this.inputText} 
          placeholder={`Enter value (max: ${this.getMaxInvestment()})`}
        />
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}

const validate = values => {
  const { investsum } = values
  const errors = {}
  if(!investsum || investsum.trim() ==='')
    errors.investsum = "enter a valid investment"
  console.log(errors)
  return errors
}

export default reduxForm({
  form: 'investor',
  validate
})(InvestForm)
