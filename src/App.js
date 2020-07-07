import React, { useState, useEffect } from 'react';
import { Header, EmptyCart, NotFound } from './components';
import { Home, Cart } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/index.scss';
import PizzaService from './services/pizza-service';
import { PizzaServiceProvider } from './components/pizza-service-context';


// для кнопки добавления
// 1 - поправить верстку
// 2 - поправить кол-во добавленных пицц

// для body
// сделать фильтр 
// сделать сортировку 

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartPizzasList, setCartPizzasList] = useState([]);

  const onClearCart = () => {
    setTotalCount(0);
    setTotalPrice(0);
    setCartPizzasList([]);
  };

  const onMinusPizza = (pizzaId) => {
    // изменяем totalCount и totalPrice
    setTotalCount((prevCount) => prevCount - 1);
    setTotalPrice((prevPrice) => prevPrice - 1);

    setCartPizzasList((prevPizzasList) => {
      const isInArray = prevPizzasList.some((el) => el.pizzaId === pizzaId);

      // если есть пицца в массиве с этим id
      if (isInArray) {
        // находим индекс элемента
        const idx = prevPizzasList.findIndex((el) => el.pizzaId === pizzaId);
        const oldItem = prevPizzasList[idx];
        // new item
        const newItem = { ...oldItem, count: oldItem.count - 1 };

        // создаем новый массив, удаляя ненужный элемент
        const newList = [
          ...prevPizzasList.slice(0, idx),
          newItem,
          ...prevPizzasList.slice(idx + 1),
        ];

        return newList;
      }
    });
  };

  const onAddPizza = (pizzaId) => {
    // изменяем totalCount и totalPrice
    setTotalCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + 1);

    setCartPizzasList((prevPizzasList) => {
      const isInArray = prevPizzasList.some((el) => el.pizzaId === pizzaId);

      // если есть пицца в массиве с этим id
      if (isInArray) {
        // находим индекс элемента
        const idx = prevPizzasList.findIndex((el) => el.pizzaId === pizzaId);
        const oldItem = prevPizzasList[idx];
        // new item
        const newItem = { ...oldItem, count: oldItem.count + 1 };

        // создаем новый массив, удаляя ненужный элемент
        const newList = [
          ...prevPizzasList.slice(0, idx),
          newItem,
          ...prevPizzasList.slice(idx + 1),
        ];

        return newList;
      }
    });
  };

  const onDeletePizza = (pizzaId) => {
    setCartPizzasList((prevPizzasList) => {
      const isInArray = prevPizzasList.some((el) => el.pizzaId === pizzaId);

      // если есть пицца в массиве с этим id
      if (isInArray) {
        // находим индекс элемента
        const idx = prevPizzasList.findIndex((el) => el.pizzaId === pizzaId);

        // уменьшить totalCount на кол-во удаленных пицц
        // изменить totalPrice
        const { count, price } = prevPizzasList[idx];
        setTotalCount((prevCount) => prevCount - count);
        setTotalPrice((prevPrice) => prevPrice - price * count);

        // создаем новый массив, удаляя ненужный элемент
        const newList = [
          ...prevPizzasList.slice(0, idx),
          ...prevPizzasList.slice(idx + 1),
        ];

        return newList;
      }
    });
  };

  const handleOnAddPizza = (pizza) => {
    setTotalCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + pizza.price);

    setCartPizzasList((prevPizzasList) => {
      const isInArray = prevPizzasList.some((item) => {
        return (
          item.id === pizza.id &&
          item.base === pizza.base &&
          item.size === pizza.size 
        );
      });

      if (isInArray) {
        // old item
        const idx = prevPizzasList.findIndex((el) => el.id === pizza.id);
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
        return [
          ...prevPizzasList,
          { ...pizza, pizzaId: prevPizzasList.length },
        ];
      }
    });
  };

  const onPizzasLoaded = (data) => {
    setPizzas(data.pizzas);
  };

  useEffect(() => {
    const pizzaService = new PizzaService();
    pizzaService.getPizzas().then(onPizzasLoaded);
  }, []);

  return (
    <PizzaServiceProvider value={[pizzas, handleOnAddPizza]}>
      <Router>
        <div className='container'>
          <Header totalCount={totalCount} totalPrice={totalPrice} />
          <main>
            <Switch>
              <Route
                path='/'
                render={() => <Home pizzasList={cartPizzasList} />}
                exact
              />
              <Route
                path='/cart'
                render={() => (
                  <Cart
                    items={cartPizzasList}
                    totalCount={totalCount}
                    totalPrice={totalPrice}
                    onClearCart={onClearCart}
                    onDeletePizza={onDeletePizza}
                    onAddPizza={onAddPizza}
                    onMinusPizza={onMinusPizza}
                  />
                )}
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
