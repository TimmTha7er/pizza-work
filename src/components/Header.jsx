import React from 'react';
import headerLogo from '../img/header/header-logo.png'

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='logo link'>
        <img className='logo__img' src={headerLogo} alt='logo' />
        <div className='logo__text'>
          <h1 className='logo__title'>react pizza</h1>
          <h4 className='logo__subtitle'>самая вкусная пицца во вселенной</h4>
        </div>
      </a>
      <a href='/' className='user-bar'>
        <div className='user-bar__summ icon-rouble'>520</div>
        <div className='user-bar__cart icon-basket'>3</div>
      </a>
    </header>
  );
};

export default Header;
