import axios from 'axios';
import { API_CALL, REQUEST, SUCCESS, FAILURE } from 'actions/types'
import { snakeCase, deepTransformKeys, camelCase } from 'utils'
import * as User from 'features/User'

const request = (method, path, data) => (dispatch, getState) => {
  dispatch({
    type: API_CALL + REQUEST,
  });

  const accessHeaders = User.accessHeadersSelector(getState())

  const config = {
    baseURL: 'http://localhost:3000/api/v1',
    method,
    url: path,
    data: deepTransformKeys(snakeCase, data),
    headers: accessHeaders,
  }

  return axios.request(config)
    .then((res) => {
      dispatch({
        type: API_CALL + SUCCESS,
        payload: {
          ...res,
          data: deepTransformKeys(camelCase, res.data),
        },
      });

      return res;
    }).catch((err) => {
      dispatch({
        type: API_CALL + FAILURE,
        payload: {
          ...err,
          data: deepTransformKeys(camelCase, err.data),
        },
        error: true,
      });

      throw err;
    })
}

export const post = (path, data) =>
  request('post', path, data)

export const get = (path) =>
  request('get', path)
