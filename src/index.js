import React from 'react'
import ReactDOM from 'react-dom'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from 'App'

import * as Auth from 'features/Auth'

import { configureStore } from 'store'

import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore({ history: browserHistory })
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(Auth.init())

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,

  document.getElementById('root')
)

require('registerServiceWorker').default()
