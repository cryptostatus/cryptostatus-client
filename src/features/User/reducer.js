import { USER_SET_ACCESS_HEADERS } from 'actions/types'

import { createReducer, set } from 'utils'

export default createReducer({}, {
  [USER_SET_ACCESS_HEADERS]: (state, payload) =>
    set('accessHeaders', payload, state),
})
