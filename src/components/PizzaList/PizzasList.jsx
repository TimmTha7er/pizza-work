import React from 'react';
import { Pizza } from '../../components';

const PizzasList = ({ pizzas }) => {
  const pizzasList = pizzas.map((pizza) => {
    // const count = cartItems.reduce((prev, cur) => {
    //   return cur.pizzaId === pizza.id ? prev + cur.count : prev;
    // }, 0);
    // if (filter === 0 || pizza.category === filter) {

    return (
      <Pizza
        key={pizza.id}
        pizza={pizza}
        // count={count}
      />
    );
  });

  return <div className='content__pizza-list'>{pizzasList}</div>;
};

export default PizzasList;
