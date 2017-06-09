import { createSelector } from 'reselect'
import { props } from 'utils'
import * as Entities from 'features/Entities'

export const balancesSelector = createSelector(
  Entities.entitiesSelector,
  ({ balances }) => balances || { allIds: [] }
)

export const allBalancesSelector = createSelector(
  balancesSelector,
  ({ byId, allIds }) => props(allIds, byId)
)
