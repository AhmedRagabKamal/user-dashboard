import React, { useReducer } from 'react';
import Joi from 'joi-browser';
import { Form } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { formDataReducer } from '../reducers/formDataReducer';
import BaseInput from './input';
import BaseButton from './button';

const BaseForm = ({ Model, schema: formSchema, doSubmit, formModel }) => {
  const initialState = {
    data: new Model(),
    loading: false,
    errors: {}
  };
  const { attributes, action, header } = formModel;
  const [state, dispatch] = useReducer(formDataReducer, initialState);
  const validate = () => {
    const { error } = Joi.validate(state.data, formSchema, {
      abortEarly: false
    });
    if (!error) return null;
    return error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
  };
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: formSchema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const { data, errors } = state;
    data[input.name] = input.type === 'file' ? input.files[0] : input.value;
    const errorMessage = validateProperty(input);
    errors[input.name] = errorMessage;
    dispatch({ type: 'handleChange', data, errors });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate() || {};
    dispatch({ type: 'formInvalid', errors });
    if (Object.keys(errors).length) return;
    dispatch({ type: 'post' });
    try {
      doSubmit(state.data);
      dispatch({ type: 'reset', data: new Model() });
    } catch (error) {
      toast.error(error);
    } finally {
      dispatch({ type: 'stopLoading' });
    }
  };

  if (!state && !state.data) return null;

  return (
    <div>
      <h1>{header}</h1>
      <Form onSubmit={handleSubmit}>
        {attributes.map(({ name, ...attr }) => (
          <Form.Group key={name} widths={2}>
            <BaseInput
              {...attr}
              value={attr.type === 'file' ? undefined : state.data[name]}
              name={name}
              onChange={handleChange}
              error={state.errors[name]}
            />
          </Form.Group>
        ))}
        <BaseButton
          label={action.label}
          type={action.type}
          loading={state.loading}
          disabled={Boolean(validate()) || !state.data.avatar}
        />
      </Form>
    </div>
  );
};

export default BaseForm;
