import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Navigation from './Navigation'
import { Footer } from 'components'
import Layouts from 'components/layouts'

const AuthLayout = ({ children, signout }) =>
  <Layouts.Base className='container sticky-footer-wrap'>
    <div className='user__layout'>
      <Header signout={signout} />
      <Navigation />
      {children}
    </div>
    <Footer className='footer__sticky' />
  </Layouts.Base>

AuthLayout.propTypes = {
  signout: PropTypes.func.isRequired,
}

export default AuthLayout
