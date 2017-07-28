import React from 'react'

import { Input } from 'components/fields'
import { FormButton, Button, Alert } from 'components'
import { Link } from 'react-router'

const SignupForm = ({ handleSubmit, error, submitting }) => (
  <form onSubmit={handleSubmit} className='form__auth label__off'>
    <h2>Sign Up</h2>

    <Input className='black__theme' type='email' name='email' placeholder='email' />
    <Input className='black__theme' type='password' name='password' placeholder='password' />
    <Input className='black__theme' type='password' name='passwordConfirmation' placeholder='password confirmation' />

    {error &&
      <Alert type='danger'>
        {error}
      </Alert>
    }

    <div className='form__submit'>
      <FormButton className='black__theme' type='submit' loading={submitting} text='Create account' />

      <span className='form__hint'>
        or
      </span>

      <Button className='btn-link btn-hint' as={Link} to='/signin'>
        sign in
      </Button>
    </div>
  </form>
)

export default SignupForm
