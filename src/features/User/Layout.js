import Layout from './components/Layout'
import * as actions from './actions'
import { connect } from 'react-redux'

const mapDispatchToProps = actions

export default connect(
  null,
  mapDispatchToProps
)(Layout)
