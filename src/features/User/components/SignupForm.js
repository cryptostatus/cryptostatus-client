import React from 'react'

import { Input } from 'components/fields'
import { Button, Alert } from 'components'
import { Link } from 'react-router'

const SignupForm = ({ handleSubmit, error, submitting }) => (
  <form onSubmit={handleSubmit}>
    <h1>Signup</h1>

    <Input type='email' name='email' placeholder='email' label='Email' />
    <Input type='password' name='password' placeholder='password' label='Password' />
    <Input type='password' name='passwordConfirmation' placeholder='password confirmation' label='Password Confirmation' />

    {error &&
      <Alert type='danger'>
        {error}
      </Alert>
    }

    <Button type='submit'>
      Signup
    </Button>

    or

    <Button as={Link} to='/signin'>
      Signin
    </Button>
  </form>
)

export default SignupForm
