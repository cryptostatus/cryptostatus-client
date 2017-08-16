import * as balance from '../entities/balances/types'
import * as user from '../user/types'
import * as api from '../api/types'

const schemaEntities = {
  [balance.BALANCES_LIST]: 'balances',
  [balance.BALANCE_GET]: 'balances',
  [balance.BALANCE_UPDATE]: 'balances',
  [balance.BALANCE_DESTROY]: 'balances',
  [user.USER_SET_ACCESS_HEADERS]: 'user',
  [user.USER_SIGNOUT]: 'user',
  [user.VALIDATE_TOKEN]: 'user',
}

const loader = (state = {}, { type, data }) => {
  const name = schemaEntities[type]
  if (!name) { return state }

  if (api.isFetchRequest(type)) {
    return { state, [name]: { ...state.name, loading: true } }
  }

  if (api.isFetchSuccess(type) || api.isFetchFailure(type)) {
    return { state, [name]: { ...state.name, loading: false } }
  }

  return state
}

export default loader
