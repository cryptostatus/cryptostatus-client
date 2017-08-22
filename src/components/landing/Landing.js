import React from 'react'
import Main from './Main'
import { Footer } from 'components'
import SignupForm from '../user/SignUpForm'

const Landing = () =>
  <div className='container landing'>
    <Main component={SignupForm} />
    <Footer />
  </div>

export default Landing
