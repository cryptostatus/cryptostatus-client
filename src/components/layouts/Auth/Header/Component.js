import React from 'react'
import { Link } from 'react-router-dom'

import * as path from 'routes/path'
import { Button } from 'components'

const Header = ({ signout }) =>
  <header className='header navbar navbar-default'>
    <div className='container__header'>
      <div className='navbar-header'>
        <Link to={path.BALANCES} className='navbar-brand'>
          <img src="/cryptostatus_logo.png" />
        </Link>
      </div>

      <div className='navbar-right'>
        <Button className='white__theme' type='button' navbar onClick={signout}>
          Signout
        </Button>
      </div>
    </div>
  </header>

export default Header
