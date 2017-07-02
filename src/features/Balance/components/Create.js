import React from 'react'
import { reduxForm } from 'redux-form'
import currencies from 'utils/currencies'
import { map } from 'utils'

import { Button, Alert } from 'components'
import { Input, Select } from 'components/fields'
import CryptoSelect from './CryptoSelect'

const currencyOptions = map((name) => ({ text: name, value: name }), currencies)

const Create = ({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}>
    <CryptoSelect />

    <Select name='name' placeholder='name' label='Name' options={currencyOptions}/>
    <Input type='number' name='amount' placeholder='amount' label='Amount'/>
    <Input type='number' name='invested' placeholder='invested' label='Invested'/>
    <Input type='number' name='profitPercent' placeholder='profit percent' label='Profit percent'/>

    {error &&
      <Alert type='danger'>
        {error}
      </Alert>
    }

    <Button type='submit' disabled={submitting}>
      Create balance
    </Button>
  </form>

export default reduxForm()(Create)
