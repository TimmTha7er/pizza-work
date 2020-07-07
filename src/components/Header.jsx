import React from 'react';
import headerLogo from '../img/header/header-logo.png';
import { Link } from 'react-router-dom';

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

export default Header;
