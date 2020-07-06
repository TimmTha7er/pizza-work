import React, { useState, useEffect } from 'react';
import { Header, EmptyCart } from './components';
import { Home, Cart } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/index.scss';

import PizzaService from './services/pizza-service';

const NotFound = () => {
  return (
    <main>
      <div>!</div>
      <h2>Страница не найдена</h2>
    </main>
  );
};

const App = () => {
  const [pissas, setPissas] = useState([]);

  const onPizzasLoaded = (pissas) => {
    setPissas(pissas);
    console.log(pissas)
  };

  useEffect(() => {
    const pizzaService = new PizzaService();
    pizzaService.getPizzas().then((onPizzasLoaded));
  }, []);

  return (
    <Router>
      <div className='container'>
        <Header />
        <main>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/cart' component={Cart} />
            <Route path='/empty-cart' component={EmptyCart} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
