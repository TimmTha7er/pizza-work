import React, { useState, useEffect } from 'react';
import { Home, Cart } from './pages';
import { Header, EmptyCart, NotFound } from './components';
import PizzaService from './services/pizza-service';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/index.scss';

// для кнопки добавления
// 1 - поправить верстку
// 2 - поправить кол-во добавленных пицц

// для body
// сделать фильтр
// сделать сортировку

const App = () => {
  const [homePizzasList, setHomePizzasList] = useState([]);
  const [cartPizzasList, setCartPizzasList] = useState([]);

  const onPizzasLoaded = (data) => {
    setHomePizzasList(data.pizzas);
  };

  useEffect(() => {
    const pizzaService = new PizzaService();
    pizzaService.getPizzas().then(onPizzasLoaded);
  }, []);

  const totalCount = cartPizzasList.reduce((prev, cur) => {
    return prev + cur.count;
  }, 0);

  const totalPrice = cartPizzasList.reduce((prev, cur) => {
    return prev + cur.price * cur.count;
  }, 0);

  const handleClearCart = () => {
    setCartPizzasList([]);
  };

  const changePizzasCount = (cartId, count) => {
    setCartPizzasList((prevPizzasList) => {
      // находим индекс элемента
      const idx = prevPizzasList.findIndex((el) => el.cartId === cartId);
      const oldItem = prevPizzasList[idx];
      // new item
      const newItem = { ...oldItem, count: oldItem.count + count };

      // создаем новый массив, удаляя ненужный элемент
      const newList = [
        ...prevPizzasList.slice(0, idx),
        newItem,
        ...prevPizzasList.slice(idx + 1),
      ];

      return newList;
    });
  };

  const handleMinusPizza = (cartId) => {
    changePizzasCount(cartId, -1);
  };

  const handlePlusPizza = (cartId) => {
    changePizzasCount(cartId, +1);
  };

  const handleDeletePizza = (cartId) => {
    setCartPizzasList((prevPizzasList) => {
      // находим индекс элемента
      const idx = prevPizzasList.findIndex((el) => el.cartId === cartId);

      // создаем новый массив, удаляя ненужный элемент
      const newList = [
        ...prevPizzasList.slice(0, idx),
        ...prevPizzasList.slice(idx + 1),
      ];

      return newList;
    });
  };

  const handleAddPizza = (pizza) => {
    setCartPizzasList((prevPizzasList) => {
      const isInArray = prevPizzasList.some((item) => {
        return (
          item.pizzaId === pizza.pizzaId &&
          item.base === pizza.base &&
          item.size === pizza.size
        );
      });

      // change pizza count
      if (isInArray) {
        // old item
        const idx = prevPizzasList.findIndex(
          (el) => el.pizzaId === pizza.pizzaId
        );
        const oldItem = prevPizzasList[idx];
        // new item
        const newItem = { ...oldItem, count: oldItem.count + 1 };

        // new pizzas list
        const newPizzasList = [
          ...prevPizzasList.slice(0, idx),
          newItem,
          ...prevPizzasList.slice(idx + 1),
        ];

        return newPizzasList;
      } else {
        // add new pizza
        const { price, name, imageUrl } = homePizzasList[pizza.pizzaId];

        return [
          ...prevPizzasList,
          {
            ...pizza,
            cartId: prevPizzasList.length,
            name: name,
            price: price,
            imageUrl: imageUrl,
            count: 1,
          },
        ];
      }
    });
  };

  return (
    <Router>
      <div className='container'>
        <Header totalCount={totalCount} totalPrice={totalPrice} />
        <main>
          <Switch>
            <Route
              path='/'
              render={() => (
                <Home
                  cartPizzasList={cartPizzasList}
                  homePizzasList={homePizzasList}
                  handlePlusPizza={handleAddPizza}
                />
              )}
              exact
            />
            <Route
              path='/cart'
              render={() => (
                <Cart
                  cartPizzasList={cartPizzasList}
                  totalCount={totalCount}
                  totalPrice={totalPrice}
                  handleClearCart={handleClearCart}
                  handleDeletePizza={handleDeletePizza}
                  handlePlusPizza={handlePlusPizza}
                  handleMinusPizza={handleMinusPizza}
                />
              )}
            />
            <Route path='/empty-cart' component={EmptyCart} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
