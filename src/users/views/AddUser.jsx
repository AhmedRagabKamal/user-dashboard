import React from 'react';
import Joi from 'joi-browser';
import BaseForm from '../../components/baseform';
import { CreateUserModel } from '../../core/users/models/CreateUserModel';
import { Form } from 'semantic-ui-react';
import { createUser } from '../../core/users/services/users.service';
import { toast } from 'react-toastify';

class AddUser extends BaseForm {
  state = {
    data: new CreateUserModel(),
    errors: {},
    loading: false
  };

  schema = {
    firstName: Joi.string()
      .required()
      .label('First name'),
    lastName: Joi.string()
      .required()
      .label('Last name'),
    email: Joi.string()
      .email()
      .required()
      .label('Email'),
    job: Joi.string()
      .required()
      .label('Job'),
    password: Joi.string()
      .required()
      .regex(/^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/)
      .label('Password'),
    confirmPassword: Joi.string()
      .required()
      .regex(/^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/)
      .label('Confirm password'),
    streetAddress: Joi.string()
      .required()
      .label('Street address'),
    pinLocation: Joi.string()
      .required()
      .label('Pin location'),
    avatar: Joi.string()
      .required()
      .label('Avatar'),
    address: Joi.optional()
  };

  doSubmit = async () => {
    try {
      this.setState({ loading: true });
      const { streetAddress, pinLocation, ...rest } = this.state.data;
      await createUser({ ...rest, address: { streetAddress, pinLocation } });
      toast.success('User added successfully');
      this.setState({ data: new CreateUserModel() });
    } catch (error) {
      toast.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <h1>Create user</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            {this.renderInput('firstName', 'First name')}
            {this.renderInput('lastName', 'Last name')}
          </Form.Group>
          <Form.Group widths='equal'>
            {this.renderInput('email', 'Email', 'email')}
            {this.renderInput('job', 'Job')}
          </Form.Group>
          <Form.Group widths='equal'>
            {this.renderInput('streetAddress', 'Street address')}
            {this.renderInput('pinLocation', 'Pin location')}
          </Form.Group>
          <Form.Group widths='equal'>
            {this.renderInput('password', 'Password', 'password')}
            {this.renderInput(
              'confirmPassword',
              'Confirm password',
              'password'
            )}
          </Form.Group>
          <Form.Group width={1}>
            {this.renderInput('avatar', 'Avatar', 'file')}
          </Form.Group>
          {this.renderButton('Add user', 'submit', loading)}
        </Form>
      </div>
    );
  }
}

export default AddUser;
