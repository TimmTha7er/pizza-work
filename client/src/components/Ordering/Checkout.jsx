import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { CheckoutList } from '../../components';

const Checkout = ({ cartPizzas, totalPrice }) => {
  if (totalPrice === 0) {
    return <Redirect to='/cart' />;

  }

  return (
    <div className='checkout'>
      <h3 className='checkout__title'>Состав заказа</h3>
      <CheckoutList items={cartPizzas} />
      <div className='checkout__total-price'>
        <div className='checkout__total-price-text'>Сумма к оплате</div>
        <div className='checkout__total-amount icon-rouble'>{totalPrice}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  cart: {
    orderTotal: { price },
    cartItems,
  },
}) => {
  return {
    totalPrice: price,
    cartPizzas: cartItems,
  };
};

export default connect(mapStateToProps, null)(Checkout);
