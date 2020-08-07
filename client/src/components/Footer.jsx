import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/header/header-logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <Link to='/' className='logo link footer__logo'>
          <img className='logo__img' src={logo} alt='logo' />
          <h2 className='logo__title footer__title'>React Pizza</h2>
        </Link>
        <div className='footer-legal'>
          <div className='footer-legal__left-col'>
            <div className='footer-legal__copyright'>© 2020</div>
            <div className='footer-legal__link-list'>
              <Link to='/' className='footer-legal__link link'>
                Правовая информация
              </Link>
              <Link to='/' className='footer-legal__link link'>
                Аллергены и информация о питании
              </Link>
            </div>
          </div>
          <div className='footer-legal__right-col'>
            <div className='footer-legal__feedback'>feedback@dodopizza.by</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
