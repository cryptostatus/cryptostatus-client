import React from 'react'

import { Input } from 'components/fields'
import { Button, Alert } from 'components'
import { Link } from 'react-router'

const SigninForm = ({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}  className='form__auth'>
    <h2>Sign In</h2>

    <Input type='email' name='email' placeholder='email' label='Email' />
    <Input type='password' name='password' placeholder='password' label='Email' />

    {error &&
      <Alert type='danger'>
        {error}
      </Alert>
    }

    <div className='form__submit'>
      <Button type='submit'>
        Login
      </Button>

      <span className='form__hint'>
        or
      </span>

      <Button className='btn-link btn-hint' as={Link} to='/'>
        Sign Up
      </Button>
    </div>
  </form>

export default SigninForm
