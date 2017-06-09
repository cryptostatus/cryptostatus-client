import { createSelector } from 'reselect'
import { pick } from 'utils'
import * as Entities from 'features/Entities'

export const balancesSelector = createSelector(
  Entities.entitiesSelector,
  ({ balances }) => balances || {}
)

export const allBalancesSelector = createSelector(
  balancesSelector,
  ({ byId, allIds }) => pick(allIds, byId)
)
