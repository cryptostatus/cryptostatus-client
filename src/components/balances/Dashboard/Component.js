import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { Preloader } from 'components'
import * as path from 'routes/path'
import { map, isEmpty } from 'utils'
import { Table, Panel, PanelHeading } from 'components'
import CryptoCart from '../CryptoCart'

const Dashboard = ({ balancesIds, isLoaded }) =>
  <div className='main-content-wrap'>
    <Preloader loading={!isLoaded} />

    <div className='crypto-cart-wrap'>
      { balancesIds.map((balanceId) =>
        <CryptoCart key={balanceId} id={balanceId} />
      )}
    </div>

    { isEmpty(balancesIds) &&
      <div className='crypto-cart-title__wrap'>
        <p className='crypto-cart-title'>
          You have not any balances.
        </p>
        <p className='crypto-cart-title'>
          Create new <NavLink to={path.BALANCES_CREATE}>balance</NavLink>
        </p>
      </div>
    }
  </div>

export default Dashboard
