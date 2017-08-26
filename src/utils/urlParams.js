import { transform } from 'lodash'
import queryString from 'query-string'

const encodeData = (text) =>
    encodeURIComponent(text)
    .replace(/\-/g, "%2D")
    .replace(/\_/g, "%5F")
    .replace(/\./g, "%2E")
    .replace(/\!/g, "%21")
    .replace(/\~/g, "%7E")
    .replace(/\*/g, "%2A")
    .replace(/\'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%20/g, '+')

export const urlParam = (name, remove) => {
  const value = queryString.parse(window.location.search)[name]
  if (remove) {
    const encodeValue = encodeData(value)
    const newUrl = window.location.href.replace(`${name}=${encodeValue}`, '')
    window.history.pushState(null, null, newUrl.replace(/\?$/, ''))
  }
  return value
}

const urlParams = (names, remove) =>
  transform(names, (result, name) => result[name] = urlParam(name, remove), {})

export default urlParams
