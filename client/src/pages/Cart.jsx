import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { CartItemList } from '../components';
import { allPizzasRemovedFromCart } from '../redux/actions';

const Cart = ({ totalCount, totalPrice, onClear }) => {
  if (totalCount < 1) {
    return <Redirect to='/empty-cart' />;
  }

  return (
    <div className='cart page'>
      <div className='container cart__container'>
        <div className='cart__top-line'>
          <h2 className='cart__title icon-basket'>Корзина</h2>
          <div onClick={onClear} className='cart__clear icon-trash-empty'>
            Очистить корзину
          </div>
        </div>

        <CartItemList />

        <div className='cart__details'>
          <div className='cart__total'>
            <span className='cart__total-text'>Всего пицц: </span>
            <span className='cart__total-count'>{totalCount} шт.</span>
          </div>
          <div className='cart__total'>
            <span>Сумма заказа: </span>
            <span className='cart__total-price icon-rouble'>{totalPrice}</span>
          </div>
        </div>

        <div className='cart__btns-block'>
          <Link
            to='/'
            className='button_grey button cart__back-btn icon-left-open'
          >
            Вернуться <span className='button_hidden'>назад</span>
          </Link>
          <Link to='/ordering' className='button cart__pay-btn'>
            Оплатить <span className='button_hidden'>сейчас</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  cart: {
    orderTotal: { price, count },
  },
}) => {
  return {
    totalPrice: price,
    totalCount: count,
  };
};

const mapDispatchToProps = {
  onClear: allPizzasRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
