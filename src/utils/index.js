import { SubmissionError } from 'redux-form';
import { curry, cond, fromPairs, pipe, T, identity, props, pick, reduce, uniq, always, chain, toPairs } from 'ramda';
import lodashMap from 'lodash/map';
import snakeCase from 'lodash/snakeCase';
import camelCase from 'lodash/camelCase';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import dotProp from 'dot-prop-immutable';
import capitalize from 'lodash/capitalize';
import lowerCase from 'lodash/lowerCase';
import isNil from 'lodash/isNil';

// get :: k -> { k: a } -> a
export const get = curry((path, object) =>
  dotProp.get(object, path))

// set :: k -> b -> { k: a } -> { k: b }
export const set = curry((path, value, object) =>
  dotProp.set(object, path, value))

// Same implementation as set, but different semantics
// update :: k -> (a -> b) -> { k: a } -> { k: b }
export const update = set

export const formAdapter = (f) => (...args) =>
  f(...args).catch((err) => {
    const formatErrors = cond([
      [isNil, identity],
      [isArray, identity],
      [T, pipe(toPairs, chain(([k, vs]) => map((v) => `${capitalize(lowerCase(k))} ${v}`, vs)))]
    ])

    throw new SubmissionError({
      _error: get('response.data.errors.full_messages', err)
        || formatErrors(get('response.data.errors', err))
        || get('response.statusText', err)
        || ['Unknown error'],
    });
  })

export const map = curry((f, x) => lodashMap(x, f));

export const createReducer = (iniitialState, defs) => (state = iniitialState, { type, payload }) => {
  const f = defs[type];

  if (f) {
    return f(state, payload) ;
  } else {
    return state;
  }
}

export const expandPath = (path) => {
  const parser = document.createElement('a')
  parser.href = window.location.toString()
  parser.pathname = path
  return parser.href.toString()
}

export const deepTransformKeys = curry((f, value) => cond([
  [isArray, map(deepTransformKeys(f))],
  [isObject, pipe(map((value, key) => [f(key), deepTransformKeys(f, value)]), fromPairs)],
  [T, identity],
])(value))

export { default as componentDidMount } from './componentDidMount'
export { cond, isObject, snakeCase, pipe, fromPairs, isArray, T, identity, props, pick, reduce, uniq, always, camelCase, chain };
