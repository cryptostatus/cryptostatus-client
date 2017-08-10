import React from 'react'

import { Button } from 'components'
import { Link } from 'react-router'

const Header = ({ signout }) =>
  <header className='header navbar navbar-default'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to='/' className='navbar-brand'>
          Cryptostatus
        </Link>
      </div>

      <div className='collapse navbar-collapse'>
        <div className='navbar-right'>
          <Button className='white__theme' type='button' navbar onClick={signout}>
            Signout
          </Button>
        </div>
      </div>
    </div>
  </header>

export default Header
