import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import PizzaStoreService from './services/PizzaStoreService';
import { App, PizzaStoreServiceProvider, ErrorBoundary} from './components';

import store from './redux/store';
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
