import React from 'react'

import { Input } from 'components/fields'
import { Button, Alert } from 'components'
import { Link } from 'react-router'

const SigninForm = ({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}>
    <h1>Signin</h1>

    <Input type='email' name='email' placeholder='email' label='Email' />
    <Input type='password' name='password' placeholder='password' label='Email' />

    {error &&
      <Alert type='danger'>
        {error}
      </Alert>
    }

    <Button type='submit'>
      Signin
    </Button>

    or

    <Button as={Link} to='/signup'>
      Signup
    </Button>
  </form>

export default SigninForm
