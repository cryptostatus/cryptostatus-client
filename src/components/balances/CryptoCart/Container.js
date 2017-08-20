import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'

import { formAdapter } from 'utils'
import Balance from 'store/entities/balances'
import CryptoCart from './Component'

const mapStateToProps = (state, ownProps) => ({
  ...Balance.selectors.byId(ownProps.id),
  form: 'Balance.Edit.' + ownProps.id,
  enableReinitialize: true,
  initialValues: Balance.selectors.initialValues(ownProps.id),
})

const mapDispatchToProps = {
  remove: Balance.actions.remove,
  update: Balance.actions.update,
  reset,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onToggleEdit: () => { dispatchProps.reset(stateProps.form) },
  onRemove: () => dispatchProps.remove(ownProps.id),
  onSubmit: formAdapter((data) => dispatchProps.update(data, ownProps.id)),
})

const reduxCryptoCart = reduxForm({})(CryptoCart)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxCryptoCart)
