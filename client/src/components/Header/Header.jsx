import React from 'react';
import { Logo, UserBar } from '../../components';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Logo />
        <UserBar />
      </div>
    </header>
  );
};

export default Header;
