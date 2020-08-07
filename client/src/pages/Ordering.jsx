import React from 'react';
import { Checkout, Payment, Delivery } from '../components';

const Ordering = () => {
  return (
    <div className='ordering page'>
      <div className='container ordering__container'>
        <div className='ordering__left-col'>
          <h2 className='ordering__title'>Оформление заказа</h2>
          <Delivery />
          <Payment />
        </div>
        <div className='ordering__right-col'>
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Ordering;
