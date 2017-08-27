import React from 'react'
import { cryptoCurrencies } from 'utils/currencies'
import { map } from 'utils'

import { FormButton, Alert } from 'components'
import { Input, Select, Toggler } from 'components/fields'
import CryptoSelect from '../CryptoTypes'

const currencyOptions = map((name) => ({ text: name, value: name }), cryptoCurrencies)

const Create = ({ handleSubmit, error, submitting }) =>
  <form className='balance__form' onSubmit={handleSubmit}>
    <CryptoSelect className='yellow__theme' />

    <div className='balance__field'>
      <Input name='amount' className='purple__theme' type='number' step='0.000001' placeholder='amount' label='Amount of coins'/>
      <Input name='invested' className='orange__theme' type='number' step='0.01' placeholder='invested' label='Invested money'/>
      <Input name='profitPercent' className='blue__theme' type='number' step='0.01' min='1' max='999999' placeholder='profit percent' label='Expected growth of investments'/>

      <FormButton className='white__theme' type='submit' loading={submitting} text='Create balance' />
    </div>
  </form>

export default Create
