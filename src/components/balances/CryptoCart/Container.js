import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formAdapter } from 'utils'
import Balance from 'store/entities/balances'
import CryptoCart from './Component'

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    ...Balance.selectors.initialValues(ownProps.id)
  }
})

const onSubmit = (dispatch, ownProps) => formAdapter((data) => dispatch(Balance.actions.update(data, ownProps.id)))

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  form: `Balance.Edit.${ownProps.id}`,
  onRemove: () => dispatchProps.dispatch(Balance.actions.remove(ownProps.id)),
  onSubmit: onSubmit(dispatchProps.dispatch, ownProps),
  ...Balance.selectors.byId(ownProps.id),
})

const reduxCryptoCart = reduxForm({})(CryptoCart)
export default connect(mapStateToProps, null, mergeProps)(reduxCryptoCart)
