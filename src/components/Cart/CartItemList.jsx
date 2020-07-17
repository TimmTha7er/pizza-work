import React from 'react';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';
import { useActions } from '../Hooks/useActions';
import {
  pizzaRemovedFromCart,
  pizzaIncrease,
  pizzaDecrease,
} from '../../redux/actions';

const CartItemList = () => {
  const { items } = useSelector(({ cart: { cartItems } }) => {
    return {
      items: cartItems,
    };
  });

  const { onIncrease, onDecrease, onDelete } = useActions({
    onDecrease: pizzaDecrease,
    onIncrease: pizzaIncrease,
    onDelete: pizzaRemovedFromCart,
  });

  return (
    <div className='shopping-list cart__shopping-list'>
      {items.map((pizza, index) => {
        return (
          <CartItem
            key={index}
            cartPizza={pizza}
            {...{ onIncrease, onDecrease, onDelete }}
          />
        );
      })}
    </div>
  );
};

export default CartItemList;
