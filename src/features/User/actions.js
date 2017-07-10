import * as Api from 'features/Api'
import { pick, expandPath } from 'utils'
import { USER_SET_ACCESS_HEADERS, USER_SIGNOUT } from 'actions/types'
import * as storage from 'storage'
import { push } from 'react-router-redux'

const extractAccessHeaders = pick([
  'access-token',
  'token-type',
  'expiry',
  'client',
  'uid',
])

export const setAccessHeaders = (headers) => ({
  type: USER_SET_ACCESS_HEADERS,
  payload: headers,
})

export const init = () => (
  setAccessHeaders(
    storage.get('authData')
  )
)

const auth = (dispatch, data, path) =>
  dispatch(Api.post(`${path}`, data)).then((response) => {
    const accessHeaders = extractAccessHeaders(response.headers)
    dispatch(setAccessHeaders(accessHeaders))
    storage.set('authData', accessHeaders)
    return response
  })

export const signin = (data) => (dispatch) =>
  auth(dispatch, data, '/auth/sign_in')

export const signup = (data) => (dispatch) =>
  auth(dispatch, data, '/auth')

export const signout = () => (dispatch) => {
  dispatch({ type: USER_SIGNOUT })
  storage.remove('authData')
  dispatch(push('/'))
}
