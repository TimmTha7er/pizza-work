import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App, ErrorBoundary } from './components';
import PizzaStoreService from './services/PizzaStoreService';
import { PizzaStoreServiceProvider } from './components/PizzaStoreServiceContext';

import store from './store';
const pizzaStoreService = new PizzaStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <PizzaStoreServiceProvider value={pizzaStoreService}>
        <Router>
          <App />
        </Router>
      </PizzaStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
