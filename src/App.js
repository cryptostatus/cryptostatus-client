import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import * as Auth from 'features/Auth';
import * as Balance from 'features/Balance';
// import logo from './logo.svg';
import './App.css';

export default ({ store, history }) =>
  <Provider store={store}>
    <Router history={history}>
      <Route path='/'>
        <Route path='auth'>
          <Route path='signup' component={Auth.Signup}/>
          <Route path='signin' component={Auth.Signin}/>
        </Route>

        <Route path='balances'>
          <IndexRoute component={Balance.List}/>
        </Route>
      </Route>
    </Router>
  </Provider>
