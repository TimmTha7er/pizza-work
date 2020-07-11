import React from 'react';
import CartItem from './CartItem';

import { connect } from 'react-redux';

const CartItemList = ({ items }) => {
  console.log('items', items);
  return (
    <div className='shopping-list cart__shopping-list'>
      {items.map((pizza, index) => {
        return <CartItem key={index} pizza={pizza} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  console.log('cartItems', cartItems )
  return {
    items: cartItems,
  };
};

export default connect(mapStateToProps)(CartItemList);
