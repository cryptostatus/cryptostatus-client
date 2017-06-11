const type = (value) => 'CRYPTOSTATUS/' + value

export const REQUEST = '/REQUEST'
export const SUCCESS = '/SUCCESS'
export const FAILURE = '/FAILURE'

export const API_CALL = type('API_CALL')

export const USER_SET_ACCESS_HEADERS = type('USER/SET_ACCESS_HEADERS')
export const USER_SIGNOUT            = type('USER/SIGNOUT')
