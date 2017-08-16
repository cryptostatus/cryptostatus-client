import { replace } from 'react-router-redux'

import Api from '../api/actions'
import { pick, expandPath } from 'utils'
import { USER_SET_ACCESS_HEADERS, USER_SIGNOUT, VALIDATE_TOKEN } from './types'
import * as storage from 'storage'
import * as path from 'routes/path'
import { SUCCESS } from '../api/types'

const extractAccessHeaders = pick([
  'access-token',
  'token-type',
  'expiry',
  'client',
  'uid',
])

export const setAccessHeaders = (headers) => {
  return {
    type: USER_SET_ACCESS_HEADERS + SUCCESS,
    payload: headers,
  }
}

export const init = () => (
  setAccessHeaders(storage.get('authData'))
)

const auth = (dispatch, path, type, data) =>
  dispatch(Api.post(`${path}`, type, { data }))
  .then((response) => {
    const accessHeaders = extractAccessHeaders(response.headers)
    storage.set('authData', accessHeaders)
    return response
  })

export const signin = (data) => (dispatch) =>
  auth(dispatch, '/auth/sign_in', USER_SET_ACCESS_HEADERS, data)

export const signup = (data) => (dispatch) =>
  auth(dispatch, '/auth', USER_SET_ACCESS_HEADERS, data)

export const validateToken = () => {
  return Api.get('auth/validate_token', VALIDATE_TOKEN, {})
}
export const signout = () => (dispatch) => {
  Promise.resolve(dispatch({type: USER_SIGNOUT})).then(response => {
    storage.remove('authData')
    return dispatch(replace(path.BALANCES))
  })
}
