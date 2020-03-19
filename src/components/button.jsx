import React from 'react';
import { Button } from 'semantic-ui-react';

const BaseButton = ({ label, type, ...rest }) => {
  return (
    <Button {...rest} type={type}>
      {label}
    </Button>
  );
};

export default BaseButton;
