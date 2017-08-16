import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { history } from 'store'
import { signin } from 'store/user/actions'
import * as path from 'routes/path'
import SigninForm from './Component'
import { formAdapter } from 'utils'

const mapDispatchToProps = {
  signin,
  onSuccess: () => replace(path.BALANCES_CREATE)
}

const mergeProps = (_, dispatchProps, ownProps) => ({
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.signin(data).then(response => dispatchProps.onSuccess()))
})

const reduxSignInForm = reduxForm({ form: 'User.SigninForm' })(SigninForm)

export default connect(null, mapDispatchToProps, mergeProps)(reduxSignInForm)
