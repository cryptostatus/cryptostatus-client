import React from 'react'
import { NavLink } from 'react-router-dom'

import { fetchUrlParam } from 'utils/urlParams'
import * as path from 'routes/path'
import * as text from 'constants/Text'

const ForgotPasswordEmail = ({ className }) => {
  return (
    <div className='forgot-password__wrap'>
      <h4 className='forgot-password__title'>{text.FORGOT_PASSWORD_EMAIL}</h4>
      <p className='forgot-password__content'>
        <NavLink className='create' to={path.ROOT}>To main page</NavLink>
      </p>
    </div>
  )
}

export default ForgotPasswordEmail
