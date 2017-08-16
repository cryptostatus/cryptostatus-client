import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { Button, ButtonGroup } from 'components'
import Header from './Header'
import * as path from 'routes/path'
import Layouts from 'components/layouts'

const AuthLayout = ({ children, signout }) =>
  <Layouts.BaseLayout>
    <div className='user__layout'>
    <Header signout={signout} />

      <div className='container'>
        <ButtonGroup>
          <Button className='white__theme' as={NavLink} to={path.BALANCES_CREATE} activeClassName='active' exact>
            Create balance
          </Button>

          <Button className='white__theme' as={NavLink} to={path.BALANCES} activeClassName='active' exact>
            View balances
          </Button>
        </ButtonGroup>

        {children}
      </div>
    </div>
  </Layouts.BaseLayout>

AuthLayout.propTypes = {
  signout: PropTypes.func.isRequired,
}

export default AuthLayout
