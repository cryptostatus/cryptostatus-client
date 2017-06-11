import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'utils'
import { Button, Table } from 'components'
import { Link } from 'react-router'

const List = ({ balances }) =>
  <div>
    <Button as={Link} to='/balances/new'>
      Create balance
    </Button>

    <Table striped>
      <tbody>
        <tr>
          <td>Amount</td>
          <td>Price Per Item</td>
          <td>Profit Percent</td>
          <td>Strategy</td>
        </tr>

        {map(({ id, amount, pricePerItem, profitPercent, strategy }) =>
          <tr key={id}>
            <td>{amount}</td>
            <td>{pricePerItem}</td>
            <td>{profitPercent}</td>
            <td>{strategy}</td>
          </tr>
        , balances)}
      </tbody>
    </Table>
  </div>

List.propTypes = {
  balances: PropTypes.arrayOf(PropTypes.shape({
    // ...
  }).isRequired).isRequired,
}

export default List
