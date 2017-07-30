import Create from './components/Create'
import { connect } from 'react-redux'
import { always, formAdapter } from 'utils'
import * as actions from './actions'
import { createStructuredSelector } from 'reselect'
import { push } from 'react-router-redux'
import { cryptoCurrencies } from 'utils/currencies'

const mapStateToProps = createStructuredSelector({
  form: always('Balance.Create'),
  initialValues: always({
    name: cryptoCurrencies[0],
  }),
})

const mapDispatchToProps = {
  ...actions,
  push,
}

const mergeProps = (state, dispatch, own) => ({
  ...state,
  ...dispatch,
  ...own,
  onSubmit: formAdapter((data) =>
    dispatch.createBalance({
      ...data,
      strategy: own.route.strategy
    }).then(() => dispatch.push('/balances'))),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Create)
