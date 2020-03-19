import React from 'react';
import Joi from 'joi-browser';
import BaseForm from '../../components/baseform';
import { CreateUserModel } from '../../core/users/models/CreateUserModel';
import { createUser } from '../../core/users/services/users.service';
import { toast } from 'react-toastify';
import addUserModel from '../models/addUser.model';

const AddUser = () => {
  const doSubmit = async data => {
    const { streetAddress, pinLocation, ...rest } = data;
    await createUser({ ...rest, address: { streetAddress, pinLocation } });
    toast.success('User added successfully');
  };
  const schema = {
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
  return (
    <BaseForm
      Model={CreateUserModel}
      schema={schema}
      doSubmit={doSubmit}
      formModel={addUserModel}
    />
  );
};

export default AddUser;
