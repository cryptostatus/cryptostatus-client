import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import ReactGA from 'react-ga'

import { AuthRoute, UnAuthRoute } from 'routes'
import { Landing, SignIn, NotFound404, Error500 } from 'components'
import Layouts from 'components/layouts'
import Balance from 'components/balances'
import * as path from 'routes/path'
import * as BalanceActions from 'store/entities/balances/actions'

export default ({ store, history }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layouts.GoogleAnalytic>
        <Switch>
          <UnAuthRoute path={path.ROOT} component={Landing} exact />
          <UnAuthRoute path={path.SIGN_IN} component={SignIn} exact />

          <AuthRoute
            path={path.BALANCES}
            layout={Layouts.AuthLayout}
            component={Balance.Dashboard}
            successCallback={BalanceActions.onLoadBalances}
            exact
          />

          <AuthRoute
            path={path.BALANCES_CREATE}
            layout={Layouts.AuthLayout}
            component={Balance.Create}
            exact
          />


          <Route path={path.ERROR_500} component={Error500} />
          <Route path='*' component={NotFound404} />
        </Switch>
        </Layouts.GoogleAnalytic>
    </ConnectedRouter>
  </Provider>
