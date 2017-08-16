import connectWithLifeCycle from 'utils/lifecycle'

import Balance from 'store/entities/balances'
import Loader from 'store/loader'
import Dashboard from './Component'

const mapStateToProps = (state) => ({
  balances: Balance.selectors.all(),
  isLoaded: Loader.selectors.isLoaded('balances')
})

const componentDidMount = () => (dispatch, getState) => dispatch(Balance.actions.getList())

const mapDispatchToProps = {
  componentDidMount
}

export default connectWithLifeCycle(mapStateToProps, mapDispatchToProps)(Dashboard)
