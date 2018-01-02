import React from 'react'
import ReactDOM from 'react-dom'

import { store, history } from 'store'
import User from 'store/user'
import App from 'App'

import 'styles/dist/styles/App.css'

import { unregister as unregisterServiceWorker } from './registerServiceWorker'

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,

  document.getElementById('root')
)

unregisterServiceWorker();
