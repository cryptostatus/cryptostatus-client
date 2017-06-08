import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import * as User from 'features/User'
import * as Balance from 'features/Balance'

export default ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/'>
        <Route path='signup' component={User.SignupForm} />
        <Route path='signin' component={User.SigninForm} />

        <Route path='balances'>
          <IndexRoute component={Balance.List} />
        </Route>
      </Route>
    </Router>
  </Provider>
)
