import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import * as path from 'routes/path'
import { formAdapter } from 'utils'
import { cryptoCurrencies } from 'utils/currencies'
import Balance from 'store/entities/balances'
import Create from './Component'

const formValues = (values) => {
  return { ...values, strategy: values.strategy ? 'seller' : 'buyer' }
}

const mapStateToProps = () => ({
  initialValues: {
    name: cryptoCurrencies[0],
    strategy: true,
  },
})

const mapDispatchToProps = {
  create: Balance.actions.create,
  onSuccess: () => replace(path.BALANCES)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter((data) => dispatchProps.create(formValues(data)).then(response => dispatchProps.onSuccess()))
})

const reduxCreate = reduxForm({form: 'Balance.Create'})(Create)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxCreate)
