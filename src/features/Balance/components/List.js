import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'utils'
import { Table, Panel, PanelHeading } from 'components'

const List = ({ balances }) =>
  <div>
    {map(({ id, name, amount, pricePerItem, profitPercent, invested, strategy, currentProfitPercent, currentPricePerItem, currentBalancePrice }) =>
      <Panel key={id}>
        <PanelHeading className='text-center'>
          {name} {amount}
        </PanelHeading>

        <Table bordered>
          <tbody>
            <tr>
              <td style={{ width: '25%' }}>
                {pricePerItem}
              </td>

              <td className='text-right' style={{ width: '25%' }}>
                <strong>{invested}</strong>
              </td>

              <td style={{ width: '25%' }}>
                {currentPricePerItem}
              </td>

              <td className='text-right' style={{ width: '25%' }}>
                <strong>{currentBalancePrice}</strong>
              </td>
            </tr>

            <tr>
              <td style={{ width: '25%' }}>
                Expected profit:
              </td>

              <td className='text-right' style={{ width: '25%' }}>
                <strong>{profitPercent}</strong>
              </td>

              <td style={{ width: '25%' }}>
                Reality:
              </td>

              <td className='text-right' style={{ width: '25%' }}>
                <strong>{currentProfitPercent}</strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    , balances)}
  </div>

List.propTypes = {
  balances: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    // ...
  }).isRequired).isRequired,
}

export default List
