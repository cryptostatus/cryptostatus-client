import axios from 'axios';
import { API_CALL, REQUEST, SUCCESS, FAILURE } from 'actions/types'
import { cond, map, T, identity, isObject, isArray, pipe, snakeCase, fromPairs } from 'utils'
import * as User from 'features/User'

const transformRequestData = cond([
  [isObject, pipe(map((value, key) => [snakeCase(key), transformRequestData(value)]), fromPairs)],
  [isArray, map(transformRequestData)],
  [T, identity],
])

const request = (method, path, data) => (dispatch, getState) => {
  dispatch({
    type: API_CALL + REQUEST,
  });

  const accessHeaders = User.accessHeadersSelector(getState())

  const config = {
    baseURL: 'http://localhost:3000/api/v1',
    method,
    url: path,
    data: transformRequestData(data),
    headers: accessHeaders,
  }

  return axios.request(config)
    .then((res) => {
      dispatch({
        type: API_CALL + SUCCESS,
        payload: res,
      });

      return res;
    }).catch((err) => {
      dispatch({
        type: API_CALL + FAILURE,
        payload: err,
        error: true,
      });

      throw err;
    })
}

export const post = (path, data) =>
  request('post', path, data)

export const get = (path) =>
  request('get', path)
