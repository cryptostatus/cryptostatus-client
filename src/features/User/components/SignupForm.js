import React from 'react'

import { Input } from 'components/fields'
import { Button, Alert } from 'components'
import { Link } from 'react-router'

const SignupForm = ({ handleSubmit, error, submitting }) => (
  <form onSubmit={handleSubmit} className='form__auth'>
    <h2>Sign Up</h2>

    <Input type='email' name='email' placeholder='email' />
    <Input type='password' name='password' placeholder='password' />
    <Input type='password' name='passwordConfirmation' placeholder='password confirmation' />

    {error &&
      <Alert type='danger'>
        {error}
      </Alert>
    }

    <div className='form__submit'>
      <Button type='submit'>
        Create account
      </Button>

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
