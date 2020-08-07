import React from 'react';

const CheckoutItem = ({ name, base, size, price, count }) => {
  return (
    <div className='checkout__item'>
      <div className='checkout__item-descr'>
        <h4 className='checkout__item-name'>{name}</h4>
        <span className='checkout__item-size'>{size}см, </span>
        <span className='checkout__item-base'>{base} тесто</span>
      </div>
      <div className='checkout__item-price icon-rouble'>
        <span className='checkout__item-count'>{count} x </span>
        <span className='checkout__item-cost'>{price}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
