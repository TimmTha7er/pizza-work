import React from 'react';
import CartItem from '../components/CartItem';

import { connect } from 'react-redux';

const ShoppingList = ({ items }) => {
  console.log('items', items);
  return (
    <div className='shopping-list cart__shopping-list'>
      {items.map((pizza, index) => {
        return <CartItem key={index} pizza={pizza} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    items: cartItems,
  };
};

export default connect(mapStateToProps)(ShoppingList);
