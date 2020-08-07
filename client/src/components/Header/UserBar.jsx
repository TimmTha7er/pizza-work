import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const UserBar = ({ totalCount, totalPrice }) => {
  return (
    <div class='user-bar'>
      <Link to='/' class='button button_grey user-bar__login-btn'>
        Войти
      </Link>

      <Link to='/cart' class='button cart-btn'>
        <div class='cart-btn__summ icon-rouble'>{totalPrice}</div>
        <div class='cart-btn__cart icon-basket'>{totalCount}</div>
      </Link>
    </div>
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

export default connect(mapStateToProps, null)(UserBar);
