import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { reducer as userReducer } from 'features/User'

export default combineReducers({
  form: formReducer,
  user: userReducer,
  routing: routerReducer
})
