import axios from 'axios'
import User from '../user'
import { camelCaseKeys, snakeCaseKeys, transform } from 'utils'
import { REQUEST, SUCCESS, FAILURE } from './types'

const request = (method, path, action, { data, params }) => (dispatch, getState) => {
  dispatch({
    type: action + REQUEST,
  });

  const headers = User.selectors.accessHeaders(getState())
  const baseURL = process.env.REACT_APP_DOMAIN

  const config = {
    baseURL,
    method,
    url: path,
    data: snakeCaseKeys(data),
    params: snakeCaseKeys(params),
    headers
  }

  return axios.request(config)
    .then((response) => {
      dispatch({
        type: action + SUCCESS,
        payload: { ...response, data: camelCaseKeys(response.data) }
      });

      return response;
    })
    .catch((reject) => {
      dispatch({
        type: action + FAILURE,
        payload: { ...reject, data: camelCaseKeys(reject.response.data) }
      });

      throw reject;
    })
}

const types = ['post', 'get', 'delete', 'patch']

const actionate = (api, method) => {
  api[method] = (path, action, {data, params}) => request(method, path, action, {data, params})
}

const api = transform(types, actionate, {})

export default api
