import React from 'react';
import CartItem from './CartItem';

import { connect } from 'react-redux';
import {
  pizzaRemovedFromCart,
  pizzaIncrease,
  pizzaDecrease,
} from '../../redux/actions';

const CartItemList = ({ items, onIncrease, onDecrease, onDelete }) => {
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

const mapDispatchToProps = {
  onDecrease: pizzaDecrease,
  onIncrease: pizzaIncrease,
  onDelete: pizzaRemovedFromCart,
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    items: cartItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);
