import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'components'
import Header from './Header'
import { Link, IndexLink } from 'react-router'

const Layout = ({ children, signout }) =>
  <div className='user__layout'>
  <Header signout={signout} />

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
