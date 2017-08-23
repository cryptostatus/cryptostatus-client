import React from 'react'
import { NavLink } from 'react-router-dom'

import * as path from 'routes/path'
import { Button, ButtonGroup } from 'components'

const Navigation = ({ signout }) =>
  <div className='navigation'>
    <ButtonGroup>
      <Button className='white__theme' as={NavLink} to={path.BALANCES_CREATE} activeClassName='active' exact>
        Create balance
      </Button>

      <Button className='white__theme' as={NavLink} to={path.BALANCES} activeClassName='active' exact>
        View balances
      </Button>
    </ButtonGroup>
  </div>

export default Navigation
