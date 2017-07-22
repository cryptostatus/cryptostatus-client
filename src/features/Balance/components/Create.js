import React from 'react'
import { reduxForm } from 'redux-form'
import currencies from 'utils/currencies'
import { map } from 'utils'

import { FormButton, Alert } from 'components'
import { Input, Select } from 'components/fields'
import CryptoSelect from './CryptoSelect'

const currencyOptions = map((name) => ({ text: name, value: name }), currencies)

const Create = ({ handleSubmit, error, submitting }) =>
  <form className='balance__form' onSubmit={handleSubmit}>
    <CryptoSelect className='yellow__theme' />

    <div className='balance__field'>
      <Input className='purple__theme' type='number' name='amount' placeholder='amount' label='Amount'/>
      <Input className='orange__theme' type='number' name='invested' placeholder='invested' label='Invested'/>
      <Input className='blue__theme' type='number' name='profitPercent' placeholder='profit percent' label='Profit percent'/>

      {error &&
        <Alert type='danger'>
          {error}
        </Alert>
      }

      <FormButton className='blue__theme' type='submit' loading={submitting} text='Create balance' />
    </div>
  </form>

export default reduxForm()(Create)
