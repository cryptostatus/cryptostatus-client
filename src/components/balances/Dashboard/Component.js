import React from 'react'
import PropTypes from 'prop-types'

import { map } from 'utils'
import { Table, Panel, PanelHeading } from 'components'
import CryptoCart from '../CryptoCart'

const Dashboard = ({ balancesIds }) =>
  <div className='crypto-cart-wrap'>
    { balancesIds.map((balanceId) =>
      <CryptoCart key={balanceId} id={balanceId} />
    )}
  </div>

export default Dashboard
