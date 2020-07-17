import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartItemList } from '../components';
import { allPizzasRemovedFromCart } from '../redux/actions';
import { useActions } from '../components/Hooks/useActions';

const Cart = () => {
  const { totalCount, totalPrice } = useSelector(
    ({
      cart: {
        orderTotal: { price, count },
      },
    }) => {
      return {
        totalPrice: price,
        totalCount: count,
      };
    }
  );

  const { onClear } = useActions({
    onClear: allPizzasRemovedFromCart,
  });

  if (totalCount < 1) {
    return <Redirect to='/empty-cart' />;
  }

  return (
    <section className='cart'>
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
          <Link to='/' className='cart__btn-back button icon-left-open'>
            Вернуться <span className='cart__btn-back_hidden'>назад</span>
          </Link>
          <Link to='/' className='cart__btn-pay button'>
            Оплатить <span className='cart__btn-pay_hidden'>сейчас</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
