import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const pizzasList = [
    {
      name: 'Сырный цыпленок',
      base: 'тонкое',
      size: '26',
      price: 395,
      count: 1,
    },
    {
      name: 'Чизбургер-пицца',
      base: 'традиционное',
      size: '40',
      price: 500,
      count: 3,
    },
  ];

  const totalCount = pizzasList.reduce((prev, cur) => {
    return prev + cur.count;
  }, 0);

  const totalPrice = pizzasList.reduce((prev, cur) => {
    return prev + cur.count * cur.price;
  }, 0);

  return (
    <section className='cart'>
      <div className='container cart__container'>
        <div className='cart__top-line'>
          <h2 className='cart__title icon-basket'>Корзина</h2>
          <div className='cart__clear icon-trash-empty'>Очистить корзину</div>
        </div>

        <div className='shopping-list cart__shopping-list'>
          {pizzasList.map((pizza, index) => {
            return <CartItem key={index} pizza={pizza} />;
          })}
          {/* <CartItem />
          <CartItem />
          <CartItem />
          <CartItem /> */}
        </div>

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
