import React from 'react'
import Main from './landing/Main'
import { Footer } from 'components'
import ForgotPasswordForm from './user/ForgotPasswordForm'

const SignIn = () =>
  <div className='container landing'>
    <Main component={ForgotPasswordForm} />
    <Footer />
  </div>

export default SignIn
