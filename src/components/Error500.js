import React from 'react'
import { NavLink } from 'react-router-dom'

import { urlParam } from 'utils/urlParams'
import * as path from 'routes/path'

const Error500 = ({ className }) => {
  const errorMessage = urlParam('error', true)

  return (
    <div className='not-found__wrap'>
      <h1 className='not-found__title'>500</h1>
      { errorMessage &&
        <p className='not-found__content'>
          { errorMessage }
        </p>
      }
      <p className='not-found__content'>
        {"Let's better create "}
        <NavLink className='create' to={path.BALANCES_CREATE}>balance</NavLink>
      </p>
    </div>
  )
}

export default Error500
