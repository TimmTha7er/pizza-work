import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/header/header-logo.png';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='container footer__container'>
        <Link to='/' class='logo link footer__logo'>
          <img class='logo__img' src={logo} alt='logo' />
          <h2 class='logo__title footer__title'>React Pizza</h2>
        </Link>
        <div class='footer-legal'>
          <div class='footer-legal__left-col'>
            <div class='footer-legal__copyright'>© 2020</div>
            <div class='footer-legal__link-list'>
              <Link href='' class='footer-legal__link link'>
                Правовая информация
              </Link>
              <Link href='' class='footer-legal__link link'>
                Аллергены и информация о питании
              </Link>
            </div>
          </div>
          <div class='footer-legal__right-col'>
            <div class='footer-legal__feedback'>feedback@dodopizza.by</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
