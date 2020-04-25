import React from 'react'
import { renderToString } from 'react-dom/server'
import data from '../application/data/data.json';

import { Provider } from 'react-redux'
import configureStore from '../application/redux/configureStore'
import App from '../application/app'
import Template from '../layout/index'


let initialState = {
    isFetching: false,
    apps: data
  }

module.exports = function render() {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState()

  const _html = Template('Server rendering', preloadedState,content);
  
  return {_html};
}


