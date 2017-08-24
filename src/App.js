import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import ReactGA from 'react-ga'

import { AuthRoute, UnAuthRoute } from 'routes'
import { Landing, SignIn, NotFound } from 'components'
import Layouts from 'components/layouts'
import Balance from 'components/balances'
import * as path from 'routes/path'

export default ({ store, history }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layouts.GoogleAnalytic>
        <Switch>
          <UnAuthRoute path={path.ROOT} component={Landing} exact />
          <UnAuthRoute path={path.SIGN_IN} component={SignIn} exact />
          <AuthRoute path={path.BALANCES} layout={Layouts.AuthLayout} component={Balance.Dashboard} exact />
          <AuthRoute path={path.BALANCES_CREATE} layout={Layouts.AuthLayout} component={Balance.Create} exact />

          <Route path='*' component={NotFound} />
        </Switch>
        </Layouts.GoogleAnalytic>
    </ConnectedRouter>
  </Provider>
