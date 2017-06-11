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

export const signin = (data) => (dispatch) =>
  dispatch(Api.post('/auth/sign_in', data)).then((response) => {
    const accessHeaders = extractAccessHeaders(response.headers)
    dispatch(setAccessHeaders(accessHeaders))
    storage.set('authData', accessHeaders)
    return response
  })

export const signup = (data) =>
  Api.post('auth', {
    ...data,
    confirmSuccessUrl: expandPath('/signin'),
  })

export const signout = () => (dispatch) => {
  dispatch({ type: USER_SIGNOUT })
  storage.remove('authData')
  dispatch(push('/'))
}
