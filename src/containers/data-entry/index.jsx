import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from "redux-form"
import TextField from '@material-ui/core/TextField';
import Entry from '../../views/entry';
import { searchPoints } from "../actions";

const required = value => (value ? undefined : "Obligatorio");

export class DataEntry extends Component {
  renderInput = ({ input, label, type, multiline, meta: { touched, error, warning } }) => {
    return (
      <div>
        <TextField
          {...input}
          required
          label={label}
          margin="normal"
          multiline={multiline}
        />
        <div style={{ fontSize: 12, color: 'red' }}>
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div >
    );
  }
  fields = () => (
    <div>
      <Field
        name="originAddress"
        type="text"
        label="Dirección de origen"
        component={this.renderInput}
        validate={[required]}
      />
      <Field
        name="destAddresss"
        label="Dirección de destino"
        type="text"
        component={this.renderInput}
        validate={[required]}
      />
      <Field
        name="description"
        label="Descripción"
        multiline
        component={this.renderInput}
        validate={[required]}
      />
    </div>
  )
  handleForm = values => {
    this.props.searchPoints()
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.handleForm)}>
          <Entry
            {...this.props}
            fields={this.fields}
            data={data}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer
})

const mapDispatchToProps = dispatch => ({
  searchPoints: () => dispatch(searchPoints())
})

const DataEntryContainer = connect(mapStateToProps, mapDispatchToProps)(DataEntry)

export default reduxForm({ form: "points" })(DataEntryContainer)