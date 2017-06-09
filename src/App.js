import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import * as User from 'features/User'
import * as Balance from 'features/Balance'

const redirect = ({ location }, replace, redirectPath) => replace({
  pathname: redirectPath,
  state: { nextPathname: location.pathname },
})

const requireNotAuthorized = (store) => (nextState, replace) => {
  const user = User.userSelector(store.getState())

  if (user) {
    redirect(nextState, replace, '/balances')
  }
}

const requireAuthorized = (store) => (nextState, replace) => {
  const user = User.userSelector(store.getState())

  if (!user) {
    redirect(nextState, replace, '/signin')
  }
}

export default ({ store, history }) =>
  <Provider store={store}>
    <Router history={history}>
      <Route path='/'>
        <IndexRedirect to='signin'/>

        <Route onEnter={requireNotAuthorized(store)}>
          <Route path='signup' component={User.SignupForm} />
          <Route path='signin' component={User.SigninForm} />
        </Route>

        <Route onEnter={requireAuthorized(store)}>
          <Route path='balances'>
            <IndexRoute component={Balance.List} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
