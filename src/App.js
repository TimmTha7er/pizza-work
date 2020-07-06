import React, { useState, useEffect } from 'react';
import { Header, EmptyCart, NotFound } from './components';
import { Home, Cart } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/index.scss';

import PizzaService from './services/pizza-service';
import { PizzaServiceProvider } from './components/pizza-service-context';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  const [pizzasCount, setPizzasCount] = useState(0);
  const [cartPizzasList, setCartPizzasList] = useState([]);

  const handleOnAddPizza = (pizza) => {
    setPizzasCount((prevCount) => prevCount + 1);

    cartPizzasList.push(pizza);
    setCartPizzasList(cartPizzasList);
    console.log(cartPizzasList);
  };

  const onPizzasLoaded = (data) => {
    setPizzas(data.pizzas);
  };

  useEffect(() => {
    const pizzaService = new PizzaService();
    pizzaService.getPizzas().then(onPizzasLoaded);
  }, []);

  return (
    <PizzaServiceProvider value={[pizzas, handleOnAddPizza, pizzasCount]}>
      <Router>
        <div className='container'>
          <Header />
          <main>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route
                path='/cart'
                render={() => <Cart items={cartPizzasList} />}
              />
              <Route path='/empty-cart' component={EmptyCart} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    </PizzaServiceProvider>
  );
};

export default App;
