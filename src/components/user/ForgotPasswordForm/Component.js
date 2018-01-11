import React from 'react'

import { Alert, Fields, FormButton, Button } from 'components'
import { Link } from 'react-router-dom'
import { Input } from 'components/fields'
import * as path from 'routes/path'

const ForgotPasswordForm = ({ handleSubmit, error, submitting }) =>
  <div className='form__auth'>
    <form onSubmit={handleSubmit}>
      <h2>Forgot password</h2>

      <Input className='black__theme' type='email' name='email' placeholder='email' />

      {error &&
        <Alert type='danger'>
          {error}
        </Alert>
      }

      <div className='form__submit'>
        <FormButton className='black__theme' type='submit' loading={submitting} text='Forgot password' />

        <span className='form__hint'></span>

        <Button className='btn-link btn-hint' as={Link} to={path.SIGN_IN}>
          sign in
        </Button>
      </div>
    </form>
  </div>

export default ForgotPasswordForm
