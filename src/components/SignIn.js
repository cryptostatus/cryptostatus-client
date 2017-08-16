import React from 'react'
import Main from './landing/Main'
import Footer from './landing/Footer'
import SigninForm from './user/SignInForm'

const SignIn = () =>
  <div className='container landing'>
    <Main component={SigninForm} />
    <Footer />
  </div>

export default SignIn
