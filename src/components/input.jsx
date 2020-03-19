import React from 'react';
import { Form } from 'semantic-ui-react';

const BaseInput = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <Form.Input
      {...rest}
      name={name}
      label={label}
      id={name}
      placeholder={placeholder}
      error={error}
    />
  );
};

export default BaseInput;
