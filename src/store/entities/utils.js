import normalize from './schemas'
import { transform, pickBy, keys, forIn, filter, uniq, isEmpty } from 'lodash'
import dotProp from 'dot-prop-immutable'
import Entities from 'store/entities'

const initialState = {
  byId: [],
  allIds: [],
}

const transformEntities = (state, data, callback) => {
  const normalizedData = normalize(data)

  const transformedEntities = transform(normalizedData.entities, (result, entities, name) => {
    return result[name] = callback(state, entities, name)
  }, {})

  return { ...state, ...transformedEntities }
}

const complementEntities = (state, entities, name) => {
  const stateEntities = state[name] || initialState

  return {
    ...stateEntities,
    byId: {...stateEntities.byId, ...updateGroupEntities(state, entities, name) },
    allIds: uniq([ ...stateEntities.allIds, ...keys(entities) ])
  }
}

const updateGroupEntities = (state, entities, name, whitReplace) => {
  return transform(entities, (result, entity, id) => {
    const newEntity = whitReplace ? { ...Entities.selectors.byId(state, name, id), ...entity } : entity
    return result[id] = { ...Entities.selectors.byId(state, name, id), ...entity }
  }, {})
}


const sliceEnities = (state, entities, name) => {
  const stateEntities = state[name] || initialState

  return {
    ...stateEntities,
    byId: pickBy(stateEntities.byId, ({ id }) => !keys(entities).map(Number).includes(id)),
    allIds: uniq(filter(stateEntities.allIds, (id) => !keys(entities).includes(id))),
  }
}

const replaceEntities = (state, data, entityName) => {
  const normalizedData = normalize(data)

  if (isEmpty(normalizedData)) { return { ...state, [entityName]: initialState } }

  const transformedEntities = transform(normalizedData.entities, (result, entities, name) => {
    const stateEntities = state[name] || initialState

    return result[name] = {
      ...stateEntities,
      byId: updateGroupEntities(state, entities, name, true),
      allIds: keys(entities)
    }
  }, {})

  return { ...state, ...transformedEntities }
}

export const replace = (state, data, entityName) => replaceEntities(state, data, entityName)
export const complement = (state, data) => transformEntities(state, data, complementEntities)
export const slice = (state, data) => transformEntities(state, data, sliceEnities)
