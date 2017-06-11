import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger as createLoggerMiddleware } from 'redux-logger'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'

const isDev = process.env.NODE_ENV === 'development'

const configureStore = ({ history }) => {
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
  )

  const enhancers = compose(middlewares)
  const store = createStore(reducer, enhancers)

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(
        require('./reducer')
      )
    })
  }

  return store
}

export { configureStore }
