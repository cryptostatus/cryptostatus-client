import React from 'react'
import PropTypes from 'prop-types'

import { map } from 'utils'
import { Table, Panel, PanelHeading } from 'components'
import CryptoCart from '../CryptoCart'

const Dashboard = ({ balances }) =>
  <div className='crypto-cart-wrap'>
    { balances.map((balance) =>
      <div key={balance.id} className='crypto-cart'>
        <CryptoCart { ...balance } />
      </div>
    )}
  </div>

Dashboard.propTypes = {
  balances: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default Dashboard
