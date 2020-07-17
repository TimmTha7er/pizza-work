import React from 'react';
import { Logo, CartButton } from '../../components';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <CartButton />
    </header>
  );
};

export default Header;
