import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import headerLogo from '../../img/header/header-logo.png';

const Header = ({ totalCount, totalPrice }) => {
  return (
    <header className='header'>
      <Link to='/' className='logo link'>
        <img className='logo__img' src={headerLogo} alt='logo' />
        <div className='logo__text'>
          <h1 className='logo__title'>react pizza</h1>
          <h4 className='logo__subtitle'>самая вкусная пицца во вселенной</h4>
        </div>
      </Link>
      <Link to={totalCount > 0 ? '/cart' : 'empty-cart'} className='user-bar'>
        <div className='user-bar__summ icon-rouble'>{totalPrice}</div>
        <div className='user-bar__cart icon-basket'>{totalCount}</div>
      </Link>
    </header>
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

export default connect(mapStateToProps)(Header);
