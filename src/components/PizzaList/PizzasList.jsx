import React from 'react';
import { Pizza } from '../../components';

import {  useSelector } from 'react-redux';
import { useActions } from '../Hooks/useActions';
import {
  pizzaAddedToCart,
  setActiveSize,
  setActiveBase,
} from '../../redux/actions';

const PizzasList = () => {
  const { items, activeBases, activeSizes, cartItems } = useSelector(
    ({
      filters: { sortedAndFiltredPizzas },
      pizzasList: { activeBases, activeSizes },
      cart: { cartItems },
    }) => {
      return {
        activeBases,
        activeSizes,
        cartItems,
        items: sortedAndFiltredPizzas,
      };
    }
  );

  const { onPizzaAddedToCart, onBaseClick, onSizeClick } = useActions({
    onPizzaAddedToCart: pizzaAddedToCart,
    onBaseClick: setActiveBase,
    onSizeClick: setActiveSize,
  });

  const pizzasList = items.map((pizza) => {
    const activeBase = activeBases.find((el) => el.pizzaId === pizza.id);
    const activeSize = activeSizes.find((el) => el.pizzaId === pizza.id);
    const count = cartItems.reduce((count, cur) => {
      return cur.pizzaId === pizza.id ? count + cur.count : count;
    }, 0);

    return (
      <Pizza
        key={pizza.id}
        pizza={pizza}
        {...{
          activeBase,
          activeSize,
          onBaseClick,
          onSizeClick,
          count,
          onPizzaAddedToCart,
        }}
      />
    );
  });

  return <div className='content__pizza-list'>{pizzasList}</div>;
};

export default PizzasList;
