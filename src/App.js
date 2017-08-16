import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import ReactGA from 'react-ga'

import { AuthRoute } from 'routes'
import { Landing, SignIn } from 'components'
import Layouts from 'components/layouts'
import Balance from 'components/balances'
import * as path from 'routes/path'

export default ({ store, history }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layouts.LayoutGA>
        <Switch>
          <AuthRoute path={path.ROOT} component={Landing} accessForAuthed={false} exact />
          <AuthRoute path={path.SIGN_IN} component={SignIn} accessForAuthed={false} exact />
          <AuthRoute path={path.BALANCES} layout={Layouts.AuthLayout} component={Balance.Dashboard} exact />
          <AuthRoute path={path.BALANCES_CREATE} layout={Layouts.AuthLayout} component={Balance.Create} exact />

          <Route component={() => <h1>404</h1>} />
        </Switch>
        </Layouts.LayoutGA>
    </ConnectedRouter>
  </Provider>
