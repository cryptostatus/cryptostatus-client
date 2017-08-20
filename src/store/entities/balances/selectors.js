import * as Entities from '../selectors'
import { pick } from 'utils'

export const all = () => Entities.all('balances')

export const allIds = () => Entities.allIds('balances')

export const byId = (id) => Entities.byId('balances', id)

export const initialValues = (id) => {
  const extractParams = pick(['amount', 'invested', 'profitPercent', 'strategy', 'name'])
  return extractParams(Entities.byId('balances', id) || {})
}
