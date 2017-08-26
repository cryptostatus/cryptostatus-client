import * as balance from '../entities/balances/types'
import * as user from '../user/types'
import * as api from '../api/types'
import { isEmpty } from 'lodash'

const schemaEntities = {
  [balance.BALANCES_LIST + api.REQUEST]: 'balances',
  [balance.BALANCES_LIST + api.FAILURE]: 'balances',
  [balance.BALANCES_LIST + api.SUCCESS]: 'balances',
  [user.VALIDATE_TOKEN + api.REQUEST]: 'user',
  [user.VALIDATE_TOKEN + api.FAILURE]: 'user',
  [user.VALIDATE_TOKEN + api.SUCCESS]: 'user',
}

const loader = (state = {}, { type, data }) => {
  const name = schemaEntities[type]

  if (isEmpty(name)) { return state }

  if (api.isRequest(type)) {
    return { ...state, [name]: { ...state[name], loading: true } }
  }

  if (api.isSuccess(type) || api.isFailure(type)) {
    return { ...state, [name]: { ...state[name], loading: false } }
  }

  return state
}

export default loader
