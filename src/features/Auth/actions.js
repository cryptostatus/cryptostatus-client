import * as Api from 'features/Api';
import { expandPath, pick } from 'utils';
import { AUTH_SET_ACCESS_HEADERS } from 'actions/types';

export const setAccessHeaders = (headers) => ({
  type: AUTH_SET_ACCESS_HEADERS,
  payload: pick(['access-token', 'expiry', 'token-type', 'uid', 'client'], headers),
})

export const signup = (data) =>
  Api.post('auth', {
    ...data,
    confirmSuccessUrl: expandPath('/auth/signin'),
  })

export const signin = (data) => (dispatch) =>
  dispatch(Api.post('auth/sign_in', data))
    .then(({ headers }) => dispatch(setAccessHeaders(headers)))
