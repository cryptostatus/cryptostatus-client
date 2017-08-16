import { normalize as normalizeSchema, schema } from 'normalizr';
import { transform, camelCase, isArray } from 'lodash'

import { camelCaseKeys } from 'utils'

const schemaKey = (input, parent, key) => camelCase(input.type)

const schemaArray = {
  users: new schema.Entity('users'),
  balances: new schema.Entity('balances'),
}

const schemaEntities = new schema.Array({...schemaArray}, schemaKey)

const normalize = (data) => {
  const formatedData = isArray(data) ? data : [data]
  return normalizeSchema(formatedData, schemaEntities)
}

export default normalize
