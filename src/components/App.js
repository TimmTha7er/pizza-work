import React, { useState, useEffect } from 'react';
import { Home, Cart } from '../pages';
import { Header, EmptyCart, NotFound } from './';
import PizzaService from '../services/PizzaStoreService';
import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';

// добавить Redux

const App = () => {
  const [homePizzasList, setHomePizzasList] = useState([]);
  const [cartPizzasList, setCartPizzasList] = useState([]);

  const [copyPizzasList, setCopyPizzasList] = useState([]);

  const onPizzasLoaded = (data) => {
    const sortPizzasList = sortPizza(data.pizzas, 'популярности');
    setHomePizzasList(sortPizzasList);
    setCopyPizzasList(sortPizzasList);
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
    // находим выбранную пиццу
    const selectPizza = homePizzasList.find((el) => el.id === pizza.pizzaId);

    // извлекаем из нее нужные данные
    const {
      pizzaId,
      // ??? возможно это нужно переделать
      // если пользователь не выбрал основы и размера
      base = selectPizza.bases.find((el) => el.available === true).name,
      size = selectPizza.sizes.find((el) => el.available === true).name,
    } = pizza;

    setCartPizzasList((prevPizzasList) => {
      // если такая пицца уже есть, то просто увеличиваем кол-во
      const isInArray = prevPizzasList.some((item) => {
        return (
          item.pizzaId === pizzaId && item.base === base && item.size === size
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
        const { price, name, imageUrl } = selectPizza;

        return [
          ...prevPizzasList,
          {
            pizzaId: pizzaId,
            base: base,
            size: size,
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

  const sortPizza = (oldList, category) => {
    const newList = [...oldList];

    switch (category) {
      case 'популярности':
        newList.sort((a, b) => b.rating - a.rating);
        break;
      case 'цене':
        newList.sort((a, b) => b.price - a.price);
        break;
      case 'алфавиту':
        newList.sort((a, b) => {
          const x = a.name.toLowerCase();
          const y = b.name.toLowerCase();

          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        break;

      default:
        break;
    }

    return newList;
  };

  const handleSortPizza = (category) => {
    const sortPizzasList = sortPizza(homePizzasList, category);

    setHomePizzasList(sortPizzasList);
  };

  const handleFilterPizza = (index) => {
    if (index === 0) {
      setHomePizzasList(copyPizzasList);
      return;
    }

    const newList = [...copyPizzasList].filter((el) => {
      return el.category === index;
    });

    // console.log('body', newList)

    setHomePizzasList(newList);
  };

  return (
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
                handleSortPizza={handleSortPizza}
                handleFilterPizza={handleFilterPizza}
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
  );
};

export default App;
