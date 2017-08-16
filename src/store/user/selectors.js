import * as storage from 'storage'

export const accessHeaders = (state) => state.user.accessHeaders || storage.get('authData')
