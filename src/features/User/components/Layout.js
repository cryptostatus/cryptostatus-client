import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'components'
import { Link, IndexLink } from 'react-router'

const Layout = ({ children, signout }) =>
  <div className='user__layout'>
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>
            Cryptostatus
          </Link>
        </div>

        <div className='collapse navbar-collapse'>
          <div className='navbar-right'>
            <Button type='button' navbar onClick={signout}>
              Signout
            </Button>
          </div>
        </div>
      </div>
    </nav>

    <div className='container'>
      <ButtonGroup>
        <Button as={Link} to='/balances/new/seller' activeClassName='active'>
          Sell crypto
        </Button>

        <Button as={Link} to='/balances/new/buyer' activeClassName='active'>
          Buy crypto
        </Button>

        <Button as={IndexLink} to='/balances' activeClassName='active'>
          View balances
        </Button>
      </ButtonGroup>

      {children}
    </div>
  </div>

Layout.propTypes = {
  signout: PropTypes.func.isRequired,
}

export default Layout
