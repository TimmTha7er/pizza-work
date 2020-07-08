import React from 'react';
import CartItem from '../components/CartItem';

const ShoppingList = ({cartPizzasList, handleDeletePizza, handlePlusPizza, handleMinusPizza}) => {
  return (
    <div className='shopping-list cart__shopping-list'>
      {cartPizzasList.map((pizza, index) => {
        return (
          <CartItem
            key={index}
            {...pizza}
            handleDeletePizza={handleDeletePizza}
            handlePlusPizza={handlePlusPizza}
            handleMinusPizza={handleMinusPizza}
          />
        );
      })}
    </div>
  );
};

export default ShoppingList;
