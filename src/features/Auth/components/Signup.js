import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from 'components/fields';
import { Button, Alert } from 'components';

export default reduxForm()(({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}>
    <h1>Signup</h1>
    <Field type='email' name='email' component={Input}/>
    <Field type='password' name='password' component={Input}/>
    <Field type='password' name='passwordConfirmation' component={Input}/>
    {error &&
      <Alert type='danger'>{error}</Alert>
    }
    <Button type='submit'>Signup</Button>
  </form>
)
