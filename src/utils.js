import { SubmissionError } from 'redux-form';
import { curry, cond, fromPairs, pipe, T, identity, pick } from 'ramda';
import lodashMap from 'lodash/map';
import snakeCase from 'lodash/snakeCase';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import dotProp from 'dot-prop-immutable';

export const get = curry((path, object) =>
  dotProp.get(object, path))

export const set = curry((path, value, object) =>
  dotProp.set(object, path, value))

export const formAdapter = (f) => (...args) =>
  f(...args).catch((err) => {
    console.error(err);

    throw new SubmissionError({
      _error: get('response.data.errors.full_messages', err)
        || get('response.data.errors', err)
        || ['Unknown error'],
    });
  })

export const expandPath = (path) => {
  const parser = document.createElement('a')
  parser.href = window.location.toString()
  parser.pathname = path
  return parser.href.toString()
}

export const map = curry((f, x) => lodashMap(x, f));

export const createReducer = (iniitialState, defs) => (state = iniitialState, { type, payload }) => {
  const f = defs[type];

  if (f) {
    return f(state, payload) ;
  } else {
    return state;
  }
}

export { cond, isObject, snakeCase, pipe, fromPairs, isArray, T, identity, pick };
