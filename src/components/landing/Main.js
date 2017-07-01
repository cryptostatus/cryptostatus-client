import React from 'react'
import SignupForm from '../../features/User/SignupForm'

const Main = () =>
  <div className='main__landing'>
    <div className='title__landing col-lg-7 col-md-7 col-sm-12'>
      <h1>Cryptostatus</h1>
      <p>Easy monitoring of your cryptocurrencies portfolio growth.</p>
    </div>

    <div className='form__auth--landing col-lg-5 col-sm-12'>
      <SignupForm />
    </div>
  </div>

export default Main
