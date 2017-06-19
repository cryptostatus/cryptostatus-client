import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import { Layout, Landing } from 'components'
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
      <Route path='/' component={Layout}>
        <IndexRoute component={Landing} />

        <Route onEnter={requireNotAuthorized(store)}>
          <Route path='signup' component={User.SignupForm} />
          <Route path='signin' component={User.SigninForm} />
        </Route>

        <Route onEnter={requireAuthorized(store)} component={User.Layout}>
          <Route path='balances'>
            <IndexRoute component={Balance.List} />

            <Route path='new/seller' component={Balance.Create} strategy='seller'/>
            <Route path='new/buyer' component={Balance.Create} strategy='buyer'/>
          </Route>
        </Route>

        <Route path='*' component={() => <h1>Route not found</h1>}/>
      </Route>
    </Router>
  </Provider>
