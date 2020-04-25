import React from 'react';
import {hydrate} from 'react-dom';
import App from '../application/app';

import {Provider} from 'react-redux';
import configureStore from '../application/redux/configureStore';

//const _state = window.__STATE__ || {};
//delete window.__STATE__;

const store = configureStore(window.__STATE__ || {});

hydrate(<Provider store={store}>
  <App></App>
</Provider>, window.document.getElementById('app'));
