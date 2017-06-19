import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SignupForm from '../../features/User/SignupForm'

const Landing = () =>
  <div className='landing'>
    <Header />
    <div className='col-lg-5 col-sm-12 form__auth--landing'>
      <SignupForm />
    </div>
    <Footer />
  </div>

export default Landing
