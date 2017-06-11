import { USER_SET_ACCESS_HEADERS, USER_SIGNOUT } from 'actions/types'
import { createReducer, set } from 'utils'

export default createReducer({}, {
  [USER_SET_ACCESS_HEADERS]: (state, payload) =>
    set('accessHeaders', payload, state),
  [USER_SIGNOUT]: (state, payload) =>
    set('accessHeaders', null, state),
})
