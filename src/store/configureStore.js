import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogger as createLoggerMiddleware } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer'

const isDev = process.env.NODE_ENV === 'development';

export default ({ history }) => {
  const routerMiddleware = createRouterMiddleware(history)
  const loggerMiddleware = createLoggerMiddleware({
    collapsed: true,
    timestamp: false,
    duration: true,
  })

  const devMiddleware = isDev ?
    [loggerMiddleware] :
    []

  const middlewares = applyMiddleware(
    thunkMiddleware,
    routerMiddleware,
    ...devMiddleware
  );

  const initialState = {};
  const enhancers = compose(middlewares);
  const store = createStore(reducer, initialState, enhancers);

  if (module.hot) {
    module.hot.accept(() => {
      const reducer = require('./reducer');
      store.replaceReducer(reducer);
    });
  }

  return store
}
