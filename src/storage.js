export const set = (path, data) =>
  window.localStorage.setItem(`Cryptostatus.${path}`, JSON.stringify(data))

export const get = (path) => {
  const item = window.localStorage.getItem(`Cryptostatus.${path}`);
  return item && JSON.parse(item);
}
