import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartButton = () => {
  const { totalCount, totalPrice } = useSelector(
    ({
      cart: {
        orderTotal: { price, count },
      },
    }) => {
      return {
        totalPrice: price,
        totalCount: count,
      };
    }
  );

  return (
    <Link to='/cart' className='user-bar'>
      <div className='user-bar__summ icon-rouble'>{totalPrice}</div>
      <div className='user-bar__cart icon-basket'>{totalCount}</div>
    </Link>
  );
};

export default CartButton;
