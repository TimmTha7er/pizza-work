import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <section className='cart'>
      <div className='container cart__container'>
        <div className='cart__top-line'>
          <h2 className='cart__title icon-basket'>Корзина</h2>
          <div className='cart__clear icon-trash-empty'>Очистить корзину</div>
        </div>

        <div className='shopping-list cart__shopping-list'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className='cart__details'>
          <div className='cart__total'>
            <span className='cart__total-text'>Всего пицц: </span>
            <span className='cart__total-count'>3 шт.</span>
          </div>
          <div className='cart__total'>
            <span>Сумма заказа: </span>
            <span className='cart__total-price icon-rouble'>900</span>
          </div>
        </div>

        <div className='cart__btns-block'>
          <a href='/' className='cart__btn-back button icon-left-open'>
            Вернуться <span className='cart__btn-back_hidden'>назад</span>
          </a>
          <a href='/' className='cart__btn-pay button'>
            Оплатить <span className='cart__btn-pay_hidden'>сейчас</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cart;
