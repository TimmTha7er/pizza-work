import React from 'react';
import { Logo, CartButton } from '../../components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Link to='/auth' className='auth'>
        Войти
      </Link>
      <CartButton />
    </header>
  );
};

export default Header;
