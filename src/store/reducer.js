import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import * as User from 'features/User'
import * as Entities from 'features/Entities'

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  user: User.reducer,
  entities: Entities.reducer,
})
