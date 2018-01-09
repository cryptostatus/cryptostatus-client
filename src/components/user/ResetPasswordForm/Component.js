import React from 'react'

import { Alert, Fields, FormButton } from 'components'
import { Link } from 'react-router-dom'
import { Input } from 'components/fields'
import * as path from 'routes/path'

const ResetPasswordForm = ({ handleSubmit, error, submitting }) =>
  <div className='form__auth'>
    <form onSubmit={handleSubmit}>
      <h2>Reset password</h2>

      <Input className='black__theme' type='password' name='password' placeholder='password' />
      <Input className='black__theme' type='password' name='passwordConfirmation' placeholder='password confirmation' />

      {error &&
        <Alert type='danger'>
          {error}
        </Alert>
      }

      <div className='form__submit'>
        <FormButton className='black__theme' type='submit' loading={submitting} text='Reset password' />
      </div>
    </form>
  </div>

export default ResetPasswordForm
