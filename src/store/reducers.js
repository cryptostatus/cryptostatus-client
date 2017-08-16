import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import Entities from './entities'
import User from './user'
import Loader from './loader'

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  entities: Entities.reducer,
  user: User.reducer,
  loader: Loader.reducer,
})
