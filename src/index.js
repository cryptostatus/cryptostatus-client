import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const store = configureStore({ browserHistory });
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));
registerServiceWorker();
