import React from 'react';
import Pizza from './Pizza';

const PizzasList = ({ cartPizzasList, homePizzasList, handlePlusPizza }) => {
  const list = homePizzasList.map((pizza) => {
    const idx = cartPizzasList.findIndex((el) => el.id === pizza.id);
    const element = cartPizzasList[idx];
    const count = element ? element.count : 0;

    return (
      <Pizza
        key={pizza.id}
        {...pizza}
        count={count}
        handlePlusPizza={handlePlusPizza}
      />
    );
  });

  return <div className='content__pizza-list'>{list}</div>;
};

export default PizzasList;
