import React from 'react'

import { Input } from 'components/fields'
import { FormButton, Button, Alert, OAuthButton } from 'components'
import { Link } from 'react-router-dom'

const SignupForm = ({ handleSubmit, error, submitting }) => (
  <div className='form__auth label__off'>
    <form onSubmit={handleSubmit}>
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

    <div className='oauth-providers'>
      <OAuthButton className='btn-icon' provider='github' />
      <OAuthButton className='btn-icon' provider='facebook' />
      <OAuthButton className='btn-icon' provider='google_oauth2' />
    </div>
  </div>
)

export default SignupForm
