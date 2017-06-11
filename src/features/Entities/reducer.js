import { API_CALL, SUCCESS } from 'actions/types'
import { set, reduce, createReducer, pipe, update, uniq, isArray } from 'utils'

export default createReducer({}, {
  [API_CALL + SUCCESS]: (state, payload) => reduce(
    (state, entity) => pipe(
      set(`${entity.type}.byId.${entity.id}`, entity),
      update(`${entity.type}.allIds`, (allIds) => uniq([...allIds, entity.id]))
    )(state),
    state,
    isArray(payload.data) ? payload.data : [payload.data]
  ),
})
