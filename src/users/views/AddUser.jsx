import React from 'react';
import Joi from 'joi-browser';
import BaseForm from '../../components/baseform';
import { CreateUserModel } from '../../core/users/models/CreateUserModel';
import { createUser } from '../../core/users/services/users.service';
import { toast } from 'react-toastify';
import addUserModel from '../models/addUser.model';

const AddUser = () => {
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
    avatar: Joi.any()
      .required()
      .label('Avatar'),
    address: Joi.optional()
  };

  const doSubmit = async data => {
    const { streetAddress, pinLocation, ...rest } = data;
    const form = { ...rest, address: { streetAddress, pinLocation } };

    let formData = new FormData();
    for (let item in form) {
      if (item === 'address') {
        formData.append([item], JSON.stringify(form[item]));
      } else {
        formData.append([item], form[item]);
      }
    }
    for (let val of formData.entries()) {
      console.log(val[0] + ', ' + val[1]);
    }
    await createUser(formData);
    toast.success('User added successfully');
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
