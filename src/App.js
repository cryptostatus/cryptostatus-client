import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import * as Auth from './features/Auth';
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
      </Route>
    </Router>
  </Provider>
