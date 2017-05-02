import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions/index.js';
import { Checkbox } from 'react-bootstrap';

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="input-container">
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)


class Login extends Component {
  
  handleFormSubmit({email, password}) {
    console.log(email, password);
    this.props.logIn({email, password});
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>OOPS!</strong>
        </div>
      )
    }
  }


  render() {
    const { handleSubmit} = this.props;

     return (
      <div className="access-container">
        <h4><strong>Welcome, Login To Your Account</strong></h4>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field 
            name="email" 
            type="email"
            component={renderField} 
            label="Enter Your Email"
            validate={email}
            warn={aol}
          />
          <Field 
            name="password" 
            type="password"
            component={renderField} 
            label="Your Password"
            validate={[ required, maxLength15 ]}
          />
          <Checkbox>Remember me</Checkbox>
          <button action="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login'
}, mapStateToProps, actions)(Login);