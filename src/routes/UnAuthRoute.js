import React from 'react'
import { isEmpty } from 'lodash'
import { replace } from 'react-router-redux'

import Route from './Route'
import { store } from 'store'
import User from 'store/user'
import * as appPath from './path'
import { Preloader } from 'components'
import Layouts from 'components/layouts'

const UnAuthRoute = ({ layout, match, path, component: Component, ...rest }) => {
  const accessHeaders = User.selectors.accessHeaders()

  if (!isEmpty(accessHeaders)) {
    store.dispatch(User.actions.validateToken())
    .then(response => store.dispatch(replace(appPath.BALANCES)))
    .catch(reject => {
      User.actions.removeAccessHeaders()
      store.dispatch(replace(match))
    })
  }

  return (
    <Route path={path} {...rest} render={props => (
      isEmpty(accessHeaders)
      ? <Component { ...props} />
      : <Preloader loading={true} />
    )}/>
  )
}

export default UnAuthRoute
