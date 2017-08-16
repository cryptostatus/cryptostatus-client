import { connect } from 'react-redux'

import AuthLayout from './Component'
import User from 'store/user'

const mapDispatchToProps = User.actions

export default connect(null, mapDispatchToProps)(AuthLayout)
