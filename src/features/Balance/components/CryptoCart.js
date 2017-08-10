import React from 'react'
import { map, values, keys } from 'lodash'
import classnames from 'classnames'

import numberFormat from 'utils/numberFormat'

const CryptoCart = (props) => {
  const { name, amount, pricePerItem, currentPricePerItem, invested, currentBalancePrice, profitPercent, currentProfitPercent } = props

  return (
    <div>
      <div className={`crypto-cart-header crypto-color-${props.name.toLowerCase()}`}>
        <h3>{ props.name }</h3>
        <span>{ props.amount }</span>
      </div>

      <div className='crypto-cart-info'>
        <div className='crypto-cart-column'>
          <span className='crypto-cart-name'>Purchase rate</span>
          <span className='crypto-cart-value'>
            {numberFormat.USD(pricePerItem)}
          </span>
        </div>

        <div className='crypto-cart-column'>
          <span className='crypto-cart-name'>Current rate</span>
          <span className='crypto-cart-value'>
            {numberFormat.USD(currentPricePerItem)}
          </span>
        </div>
      </div>

      <div className='crypto-cart-info'>
        <div className='crypto-cart-column'>
          <span className='crypto-cart-name'>Invested</span>
          <span className='crypto-cart-value'>
            {numberFormat.USD(invested)}
          </span>
        </div>

        <div className='crypto-cart-column'>
          <span className='crypto-cart-name'>Current cost</span>
          <span className='crypto-cart-value'>
            {numberFormat.USD(currentBalancePrice)}
          </span>
        </div>
      </div>

      <div className='crypto-cart-info'>
        <div className='crypto-cart-column'>
          <span className='crypto-cart-name'>Expected profit</span>
          <span className='crypto-cart-value'>
            {numberFormat.percent(profitPercent)}
          </span>
        </div>

        <div className='crypto-cart-column'>
          <span className='crypto-cart-name'>Current profit</span>
          <span className={classnames('crypto-cart-value profit', { 'positive': currentProfitPercent >= profitPercent })}>
            {numberFormat.percent(currentProfitPercent)}
            </span>
        </div>
      </div>

    </div>
  )
}


export default CryptoCart
