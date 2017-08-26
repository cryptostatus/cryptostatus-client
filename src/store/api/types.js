export const REQUEST = '_REQUEST'
export const FAILURE = '_FAILURE'
export const SUCCESS = '_SUCCESS'

export const isRequest = (type) => /_REQUEST$/.test(type)
export const isSuccess = (type) => /_SUCCESS$/.test(type)
export const isFailure = (type) => /_FAILURE$/.test(type)

export const nameRequest = (type) => type.split(REQUEST)[0]
export const nameSuccess = (type) => type.split(SUCCESS)[0]
export const nameFailure = (type) => type.split(FAILURE)[0]
