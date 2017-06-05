import { AUTH_SET_ACCESS_HEADERS } from 'actions/types';
import { createReducer, set } from 'utils';

export default createReducer({}, {
  [AUTH_SET_ACCESS_HEADERS]: (state, payload) =>
    set('accessHeaders', payload, state),
})
