import Create from './components/Create'
import { connect } from 'react-redux'
import { always, formAdapter } from 'utils'
import * as actions from './actions'
import { createStructuredSelector } from 'reselect'
import { push } from 'react-router-redux'

const mapStateToProps = createStructuredSelector({
  form: always('Balance.Create'),
})

const mapDispatchToProps = {
  ...actions,
  push,
}

const mergeProps = (state, dispatch, own) => ({
  ...state,
  ...dispatch,
  ...own,
  onSubmit: formAdapter((...args) =>
    dispatch.createBalance(...args).then(() => dispatch.push('/balances'))),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Create)
