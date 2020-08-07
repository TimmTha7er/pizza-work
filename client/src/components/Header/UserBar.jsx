import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const UserBar = ({ totalCount, totalPrice, isLogin = false }) => {
  const btnText = isLogin ? 'Name' : 'Войти';
  const btnLink = isLogin ? '/profile' : '/login';

  return (
    <div className='user-bar'>
      <Link to={btnLink} className='button button_grey user-bar__login-btn'>
        {btnText}
      </Link>

      <Link to='/cart' className='button cart-btn'>
        <div className='cart-btn__summ icon-rouble'>{totalPrice}</div>
        <div className='cart-btn__cart icon-basket'>{totalCount}</div>
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
