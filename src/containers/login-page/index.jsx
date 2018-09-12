import React, { Component } from 'react'
import LoginPageComponent from '../../views/login-page'
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Lock from '@material-ui/icons/Lock'
import FormControl from '@material-ui/core/FormControl'
import { Redirect } from "react-router-dom";
import { login } from "../actions";

const required = value => (value ? undefined : "Obligatorio");
const maxLength = max => value =>
  value && value.length > max ? `Debe tener ${max} caracteres o menos` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Debe tener ${min} caracteres o más` : undefined;
const minLength6 = minLength(6);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Dirección de correo electrónico no válida"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Solo caracteres alfanuméricos"
    : undefined;

class LoginPage extends Component {
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <FormControl error={error && touched}>
        <TextField
          {...input}
          style={{ marginTop: 10, marginBottom: 10 }}
          label={input.name === "email" ? "Correo Electronico" : "Contraseña"}
          type={input.name === "password" ? "password" : "text"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {input.name === "password" ? <Lock /> : <AccountCircle />}
              </InputAdornment>
            ),
          }}
        />
        <div style={{ fontSize: 12, color: 'red' }}>
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </FormControl >
    );
  }
  fields = () => (
    <div>
      <Field
        name="email"
        component={this.renderInput}
        validate={[email, required]}
      />
      <Field
        name="password"
        component={this.renderInput}
        validate={[alphaNumeric, minLength6, maxLength15, required]}
      />
    </div>
  )
  handleLogin = values => {
    return this.props.login()
  }
  render() {
    const { isAuthenticate } = this.props
    return (
      isAuthenticate
        ? <Redirect to="/data-entry" />
        : <form onSubmit={this.props.handleSubmit(this.handleLogin)}>
          <LoginPageComponent
            {...this.props}
            fields={this.fields}
          />
        </form>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticate: state.authReducer.isAuthenticate
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default reduxForm({ form: "login" })(LoginContainer)
