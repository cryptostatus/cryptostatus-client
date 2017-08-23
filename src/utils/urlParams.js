import { transform } from 'lodash'
import queryString from 'query-string'

export const fetchUrlParam = (name, remove) => {
  const value = queryString.parse(window.location.search)[name]
  if (remove) {
    const newUrl = window.location.href.replace(`${name}=${encodeURIComponent(value)}`, '')
    window.history.pushState(null, null, newUrl.replace(/\?$/, ''))
  }
  return value
}

const urlParams = (names, remove) =>
  transform(names, (result, name) => result[name] = fetchUrlParam(name, remove), {})

export default urlParams
