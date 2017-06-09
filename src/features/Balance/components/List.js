import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'utils'

const List = ({ balances }) =>
  <table>
    <tbody>
      <tr>
        <td>Amount</td>
        <td>Price Per Item</td>
        <td>Profit Percent</td>
        <td>Strategy</td>
      </tr>

      {map(({ amount, pricePerItem, profitPercent, strategy }) =>
        <tr>
          <td>{amount}</td>
          <td>{pricePerItem}</td>
          <td>{profitPercent}</td>
          <td>{strategy}</td>
        </tr>
      , balances)}
    </tbody>
  </table>

List.propTypes = {
  balances: PropTypes.arrayOf(PropTypes.shape({
    // ...
  }).isRequired).isRequired,
}

export default List
