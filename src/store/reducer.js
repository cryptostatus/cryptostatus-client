import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import * as Auth from 'features/Auth'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: Auth.reducer,
})
