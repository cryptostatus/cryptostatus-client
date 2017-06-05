import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { signin } from './actions'

import Signin from './components/Signin'

import { formAdapter } from 'utils'

const mapDispatchToProps = {
  replace,
  signin,
}

const mergeProps = (_, dispatchProps, ownProps) => ({
  ...ownProps, onSubmit: formAdapter(
    (data) => dispatchProps.signin(data).then(
      () => dispatchProps.replace('/balances')
    )
  )
})

export default connect(null, mapDispatchToProps, mergeProps)(
  reduxForm({ form: 'Auth.Signin' })(Signin)
)
