import React from 'react'
import Main from './Main'
import Footer from './Footer'
import SignupForm from '../../features/User/SignupForm'

const Landing = () =>
  <div className='container landing'>
    <Main component={SignupForm} />
    <Footer />
  </div>

export default Landing
