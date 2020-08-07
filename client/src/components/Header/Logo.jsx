import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/header/header-logo.png';

const Logo = () => {
  return (
    <Link to='/' className='logo header__logo link'>
      <img className='logo__img' src={logo} alt='logo' />
      <div className='logo__text'>
        <h1 className='logo__title'>react pizza</h1>
        <h4 className='logo__subtitle'>самая вкусная пицца во вселенной</h4>
      </div>
    </Link>
  );
};

export default Logo;
