import * as Api from 'features/Api';
import { expandPath, pick } from 'utils';
import { AUTH_SET_ACCESS_HEADERS } from 'actions/types';
import * as storage from 'storage';

const extractAccessHeaders = pick(['access-token', 'expiry', 'token-type', 'uid', 'client']);

export const setAccessHeaders = (headers) => ({
  type: AUTH_SET_ACCESS_HEADERS,
  payload: headers,
})

export const init = () =>
  setAccessHeaders(storage.get('authData'))

export const signup = (data) =>
  Api.post('auth', {
    ...data,
    confirmSuccessUrl: expandPath('/auth/signin'),
  })

export const signin = (data) => (dispatch) =>
  dispatch(Api.post('auth/sign_in', data))
    .then((res) => {
      const accessHeaders = extractAccessHeaders(res.headers);
      dispatch(setAccessHeaders(accessHeaders));
      storage.set('authData', accessHeaders);
      return res;
    })
