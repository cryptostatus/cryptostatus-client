import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from 'components/fields';
import { Button, Alert } from 'components';
import { formAdapter } from 'utils';

const Form = reduxForm()(({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}>
    <h1>Signin</h1>
    <Field type='email' name='email' component={Input}/>
    <Field type='password' name='password' component={Input}/>
    {error &&
      <Alert type='danger'>{error}</Alert>
    }
    <Button type='submit'>Signup</Button>
  </form>
)

export default ({ signin, push, ...rest }) =>
  <Form
    {...rest}
    onSubmit={formAdapter((data) =>
      signin(data).then(() => push('/balances')))
    }
  />
