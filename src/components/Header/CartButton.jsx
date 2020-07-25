import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CartButton = ({ totalCount, totalPrice }) => {
  return (
    <Link to='/cart' className='user-bar'>
      <div className='user-bar__summ icon-rouble'>{totalPrice}</div>
      <div className='user-bar__cart icon-basket'>{totalCount}</div>
    </Link>
  );
};

const mapStateToProps = ({
  cart: {
    orderTotal: { price, count },
  },
}) => {
  return {
    totalPrice: price,
    totalCount: count,
  };
};

export default connect(mapStateToProps, null)(CartButton);
