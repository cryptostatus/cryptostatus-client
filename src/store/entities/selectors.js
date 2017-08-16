import { get } from 'dot-prop-immutable'
import { values } from 'lodash'
import { store } from 'store'

export const all = (type) => {
  const entities = store.getState().entities
  return values(get(entities, `${type}.byId`))
}
