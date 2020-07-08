import React from 'react';
import Pizza from './Pizza';

const PizzasList = ({ cartPizzasList, homePizzasList, handlePlusPizza }) => {


  const pizzasList = homePizzasList.map((pizza) => {
    const count = cartPizzasList.reduce((prev, cur) => {
      return cur.pizzaId === pizza.id ? prev + cur.count : prev;
    }, 0);

    return (
      <Pizza
        key={pizza.id}
        {...pizza}
        count={count}
        handlePlusPizza={handlePlusPizza}
      />
    );
  });

  return <div className='content__pizza-list'>{pizzasList}</div>;
};

export default PizzasList;
