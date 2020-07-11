import React from 'react';
import { Home, Cart } from '../pages';
import { Header, NotFound, CartEmpty } from './';

import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';

// TODO
// Redux
// 1 combineReducers - можно ли получить доступ из одного редюсера к другому??
// 2 доделать что бы вся логика просто работала
// 3 подумать как лучше сделать фильтр и сортировку
// 4 подумать где и как лучше хранить категории для фильтра и сортировки

// APP
// 2 Подумать как лучше разместить img, fonts, scss 

const App = () => {

 
  // const changePizzasCount = (cartId, count) => {
  //   setCartPizzasList((prevPizzasList) => {
  //     // находим индекс элемента
  //     const idx = prevPizzasList.findIndex((el) => el.cartId === cartId);
  //     const oldItem = prevPizzasList[idx];
  //     // new item
  //     const newItem = { ...oldItem, count: oldItem.count + count };

  //     // создаем новый массив, удаляя ненужный элемент
  //     const newList = [
  //       ...prevPizzasList.slice(0, idx),
  //       newItem,
  //       ...prevPizzasList.slice(idx + 1),
  //     ];

  //     return newList;
  //   });
  // };

  // const handleMinusPizza = (cartId) => {
  //   changePizzasCount(cartId, -1);
  // };

  // const handlePlusPizza = (cartId) => {
  //   changePizzasCount(cartId, +1);
  // };

  // const handleDeletePizza = (cartId) => {
  //   setCartPizzasList((prevPizzasList) => {
  //     // находим индекс элемента
  //     const idx = prevPizzasList.findIndex((el) => el.cartId === cartId);

  //     // создаем новый массив, удаляя ненужный элемент
  //     const newList = [
  //       ...prevPizzasList.slice(0, idx),
  //       ...prevPizzasList.slice(idx + 1),
  //     ];

  //     return newList;
  //   });
  // };

  // const handleAddPizza = (pizza) => {
  //   // находим выбранную пиццу
  //   const selectPizza = homePizzasList.find((el) => el.id === pizza.pizzaId);

  //   // извлекаем из нее нужные данные
  //   const {
  //     pizzaId,
  //     // ??? возможно это нужно переделать
  //     // если пользователь не выбрал основы и размера
  //     base = selectPizza.bases.find((el) => el.available === true).name,
  //     size = selectPizza.sizes.find((el) => el.available === true).name,
  //   } = pizza;

  //   setCartPizzasList((prevPizzasList) => {
  //     // если такая пицца уже есть, то просто увеличиваем кол-во
  //     const isInArray = prevPizzasList.some((item) => {
  //       return (
  //         item.pizzaId === pizzaId && item.base === base && item.size === size
  //       );
  //     });

  //     // change pizza count
  //     if (isInArray) {
  //       // old item
  //       const idx = prevPizzasList.findIndex(
  //         (el) => el.pizzaId === pizza.pizzaId
  //       );
  //       const oldItem = prevPizzasList[idx];
  //       // new item
  //       const newItem = { ...oldItem, count: oldItem.count + 1 };

  //       // new pizzas list
  //       const newPizzasList = [
  //         ...prevPizzasList.slice(0, idx),
  //         newItem,
  //         ...prevPizzasList.slice(idx + 1),
  //       ];

  //       return newPizzasList;
  //     } else {
  //       // add new pizza
  //       const { price, name, imageUrl } = selectPizza;

  //       return [
  //         ...prevPizzasList,
  //         {
  //           pizzaId: pizzaId,
  //           base: base,
  //           size: size,
  //           cartId: prevPizzasList.length,
  //           name: name,
  //           price: price,
  //           imageUrl: imageUrl,
  //           count: 1,
  //         },
  //       ];
  //     }
  //   });
  // };


 
  return (
    <div className='container'>
      <Header />
      <main>
        <Switch>
          <Route path='/' render={() => <Home />} exact />
          <Route path='/cart' render={() => <Cart />} />
          <Route path='/empty-cart' component={CartEmpty} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
