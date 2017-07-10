import React from 'react'
import * as Coins from 'react-cryptocoins';
import currencies from 'utils/currencies'

const CurrenciesIcons = currencies.map((currency, index) =>
  <label key={index} className='crypto__item' for={`currency-${index}`}>
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
)

const CryptoSelect = () =>
  <div className='crypto__wrap'>
    <div className='crypto__list'>
      {CurrenciesIcons}
    </div>
  </div>

export default CryptoSelect
