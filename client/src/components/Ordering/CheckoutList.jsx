import React from 'react';
import { CheckoutItem } from '../../components';

const CheckoutList = ({ items }) => {
  const checkoutList = items.map((pizza, index) => {
    return <CheckoutItem key={index} {...pizza} />;
  });

  return <div className='checkout__list'>{checkoutList}</div>;
};

export default CheckoutList;
