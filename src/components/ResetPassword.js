import React from 'react'
import Main from './landing/Main'
import { Footer } from 'components'
import ResetPasswordForm from './user/ResetPasswordForm'

const SignIn = () =>
  <div className='container landing'>
    <Main component={ResetPasswordForm} />
    <Footer />
  </div>

export default SignIn
