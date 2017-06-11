import React from 'react'
import { Button, Alert } from 'components'
import { reduxForm } from 'redux-form'
import { Input, Select } from 'components/fields'

const strategyOptions = [
  { text: 'seller', value: 'seller' },
  { text: 'buyer', value: 'buyer' },
]

const Create = ({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}>
    <Input type='text' name='name' placeholder='name' label='Name'/>
    <Input type='number' name='amount' placeholder='amount' label='Amount'/>
    <Input type='number' name='invested' placeholder='invested' label='Invested'/>
    <Input type='number' name='profitPercent' placeholder='profit percent' label='Profit percent'/>
    <Select name='strategy' placeholder='strategy' label='Strategy' options={strategyOptions}/>

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
