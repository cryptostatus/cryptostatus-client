import React from 'react'

import { Input } from 'components/fields'
import { Button, Alert } from 'components'

const Form = ({ handleSubmit, error, submitting }) => (
  <form onSubmit={handleSubmit}>
    <h1>Signin</h1>

    <Input type='email' name='email' placeholder='Email' />
    <Input type='password' name='password' placeholder='Password' />

    {error &&
      <Alert type='danger'>
        {error}
      </Alert>
    }

    <Button type='submit'>
      Signup
    </Button>
  </form>
)

export default Form
