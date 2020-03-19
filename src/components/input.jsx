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
    // <Form.Field>
    //   <label htmlFor={name}>{label}</label>
    //   <Input
    //     {...rest}
    //     name={name}
    //     id={name}
    //     placeholder={placeholder}
    //     error='error'
    //   />
    // </Form.Field>
  );
};

export default BaseInput;
