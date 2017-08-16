import React from 'react'
import ReactDOM from 'react-dom'

import { store, history } from 'store'
import User from 'store/user'
import App from 'App'

import 'styles/dist/styles/App.css'

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,

  document.getElementById('root')
)

require('registerServiceWorker').default()
