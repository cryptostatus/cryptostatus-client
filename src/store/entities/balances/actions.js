import * as actions from './types'
import Api from 'store/api/actions'

export const getList = () =>
  Api.get('balances', actions.BALANCE_GET, {})

export const create = (data) =>
  Api.post('balances', actions.BALANCE_CREATE, { data })

export const remove = (id) =>
  Api.delete(`balances/${id}`, actions.BALANCE_DESTROY, { id })

export const update = (data, id) =>
  Api.patch(`balances/${id}`, actions.BALANCE_UPDATE, { data, id })
