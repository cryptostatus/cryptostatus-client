import React from 'react'
import { Route } from 'react-router'
import { replace } from 'react-router-redux'

import * as storage from 'storage'
import { store } from 'store'
import User from 'store/user'
import * as appPath from './path'
import { Preloader } from 'components'
import Layouts from 'components/layouts'

const redirectForAuthed = () => {
  store.dispatch(replace(appPath.BALANCES))
}

const AuthRoute = ({ layout, match, path, component: Component, accessForAuthed = true, ...rest }) => {
  let accessHeaders = store.getState().user.accessHeaders
  const Layout = layout ? layout : Layouts.BaseLayout

  if (accessHeaders && !accessForAuthed) {
    redirectForAuthed()
  }

  if (!accessHeaders) {
    store.dispatch(User.actions.validateToken())
    .then(response => accessForAuthed ? store.dispatch(replace(match)) : redirectForAuthed())
    .catch(reject => { if (accessForAuthed) { store.dispatch(replace(appPath.ROOT)) }})
  }

  return (
    <Route {...rest} render={props => (
      accessHeaders
      ? <Layout><Component { ...props} /></Layout>
      : accessForAuthed ? <Preloader /> : <Layout><Component { ...props} /></Layout>
    )}/>
  )
}

export default AuthRoute
