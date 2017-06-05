import axios from 'axios';
import { cond, map, T, identity, isObject, isArray, pipe, snakeCase, fromPairs } from 'utils'

const transformRequestData = cond([
  [isObject, pipe(map((value, key) => [snakeCase(key), transformRequestData(value)]), fromPairs)],
  [isArray, map(transformRequestData)],
  [T, identity],
])

const client = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

const request = (method, path, data) => (dispatch) =>
  client[method](path, transformRequestData(data))

export const post = (path, data) =>
  request('post', path, data)
