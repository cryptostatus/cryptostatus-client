import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { signup } from './actions'

import SignupForm from './components/SignupForm'

import { formAdapter } from 'utils'

const mapDispatchToProps = {
  replace,
  signup,
}

const mergeProps = (_, dispatchProps, ownProps) => ({
  ...ownProps, onSubmit: formAdapter(
    (data) => dispatchProps.signup(data).then(
      () => dispatchProps.replace('/balances')
    )
  )
})

export default connect(null, mapDispatchToProps, mergeProps)(
  reduxForm({ form: 'User.SignupForm' })(SignupForm)
)
