import axios from 'axios';
import { API_CALL, REQUEST, SUCCESS, FAILURE } from 'actions/types'
import { cond, map, T, identity, isObject, isArray, pipe, snakeCase, fromPairs } from 'utils'

const transformRequestData = cond([
  [isObject, pipe(map((value, key) => [snakeCase(key), transformRequestData(value)]), fromPairs)],
  [isArray, map(transformRequestData)],
  [T, identity],
])

const client = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

const request = (method, path, data) => (dispatch) => {
  dispatch({
    type: API_CALL + REQUEST,
  });

  client[method](path, transformRequestData(data))
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
