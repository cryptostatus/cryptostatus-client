import React from 'react'
import * as Coins from 'react-cryptocoins';
import classnames from 'classnames'

import currencies from 'utils/currencies'

const CurrenciesIcon = ({ currency, index, className }) =>
  <label key={index} className={classnames('crypto__item', className)} for={`currency-${index}`}>
    <input id={`currency-${index}`} name='currency' type='radio' />
    <div className='item__info'>
      <p className='item__icon'>
        { React.createElement(Coins[currency], {}) }
      </p>
      <p className='item__title'>
        { currency }
      </p>
    </div>
  </label>

const CryptoSelect = ({ className }) =>
  <div className='crypto__wrap'>
    <div className='crypto__list'>

      { currencies.map((currency, index) =>
        <CurrenciesIcon index={index} currency={currency} className={className} />
      )}

    </div>
  </div>

export default CryptoSelect
