//import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './dodo'
import {store}  from './store';

let rootElement = document.getElementById('content');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
