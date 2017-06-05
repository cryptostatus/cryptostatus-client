const type = (x) =>
  'CRYPTOSTATUS/' + x

export const REQUEST = '/REQUEST';
export const SUCCESS = '/SUCCESS';
export const FAILURE = '/FAILURE';

export const API_CALL = type('API_CALL');

export const AUTH_SET_ACCESS_HEADERS = type('AUTH/SET_ACCESS_HEADERS');
