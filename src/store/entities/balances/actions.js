import * as actions from './types'
import { fetchUrlParam } from 'utils/urlParams'
import Api from 'store/api/actions'

export const getList = () =>
  Api.get('balances', actions.BALANCES_LIST, {})

export const create = (data) =>
  Api.post('balances', actions.BALANCE_CREATE, { data })

export const remove = (id) =>
  Api.delete(`balances/${id}`, actions.BALANCE_DESTROY, { id })

export const update = (data, id) =>
  Api.patch(`balances/${id}`, actions.BALANCE_UPDATE, { data, id })

export const removeCallback = (response) => {
  const deleteId = fetchUrlParam('delete_id', true)
  if (!deleteId) return response
  return remove(deleteId)
}

export const onLoadBalances = (response) => removeCallback(response)
