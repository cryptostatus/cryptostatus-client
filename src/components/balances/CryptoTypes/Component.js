import React from 'react'
import * as Coins from 'react-cryptocoins';
import classnames from 'classnames'
import { Field } from 'redux-form'

import { cryptoCurrencies } from 'utils/currencies'

const CurrenciesField = ({ currency, index, className }) =>
  <label key={index} className={classnames('crypto__item', className)} for={`currency-${index}`}>
    <Field
      id={`currency-${index}`}
      name='name'
      type='radio'
      component='input'
      value={currency}
    />

    <div className='item__info'>
      <p className='item__icon'>
        { React.createElement(Coins[currency], {}) }
      </p>
      <p className='item__title'>
        { currency }
      </p>
    </div>
  </label>

const CryptoTypes = ({ className }) =>
  <div className='crypto__wrap'>
    <div className='crypto__list'>

      { cryptoCurrencies.map((currency, index) =>
        <CurrenciesField index={index} currency={currency} className={className} />
      )}

    </div>
  </div>

export default CryptoTypes
