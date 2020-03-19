export default {
  header: 'Creat user',
  attributes: [
    {
      type: 'text',
      name: 'firstName',
      label: 'First name',
      placeholder: 'Please enter first name'
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last name',
      placeholder: 'Please enter last name'
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Please enter email'
    },
    {
      type: 'text',
      name: 'job',
      label: 'Job',
      placeholder: 'Please enter job'
    },
    {
      type: 'text',
      name: 'streetAddress',
      label: 'Street address',
      placeholder: 'Please enter street address'
    },
    {
      type: 'text',
      name: 'pinLocation',
      label: 'Pin location',
      placeholder: 'Please enter pin location'
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Please enter password'
    },
    {
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm password',
      placeholder: 'Please enter confirm password'
    },
    {
      type: 'file',
      name: 'avatar',
      label: 'Avatar',
      placeholder: 'Please enter avatar',
      accept: 'image/*'
    }
  ],
  action: {
    type: 'submit',
    label: 'Add user'
  }
};
