import React from 'react'
import { NavLink } from 'react-router-dom'

import * as path from 'routes/path'

const NotFound404 = ({ className }) =>
  <div className='not-found__wrap'>
    <h1 className='not-found__title'>404</h1>
    <p className='not-found__content'>
      {"Let's better create "}
      <NavLink className='create' to={path.BALANCES_CREATE}>balance</NavLink>
    </p>
  </div>

export default NotFound404
