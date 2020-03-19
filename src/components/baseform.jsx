import React, { Component } from 'react';
import Joi from 'joi-browser';
import BaseInput from './input';
import BaseButton from './button';

class BaseForm extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });

    if (!error) return null;

    return error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: false });
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const { data, errors } = { ...this.state };
    data[input.name] = input.value;
    const errorMessage = this.validateProperty(input);
    errors[input.name] = errorMessage;
    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderButton(label = 'Submit', type = 'submit', loading = false) {
    return (
      <BaseButton
        disabled={Boolean(this.validate())}
        label={label}
        type={type}
        loading={loading}
      />
    );
  }

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;
    return (
      <BaseInput
        type={type}
        value={data[name]}
        label={label}
        name={name}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default BaseForm;
