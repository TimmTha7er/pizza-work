import React from 'react';

import pizzaImg from './img/content/cheese-pizza.png';

const Cart = () => {
  return (
    <section className='cart'>
      <div className='container cart__container'>
        <div className='cart__top-line'>
          <h2 className='cart__title icon-basket'>Корзина</h2>
          <div className='cart__clear icon-trash-empty'>Очистить корзину</div>
        </div>

        <div className='shopping-list cart__shopping-list'>
          <div className='shopping-list__item'>
            <div className='shopping-list__item-descr'>
              <div className='shopping-list__item-img-wrap'>
                <img
                  className='shopping-list__item-img'
                  src={pizzaImg}
                  alt='pizza'
                />
              </div>
              <div className='shopping-list__item-info'>
                <h3 className='shopping-list__item-name'>Сырный цыпленок</h3>
                <span className='shopping-list__item-base'>тонкое тесто, </span>
                <span className='shopping-list__item-size'>26 см.</span>
              </div>
            </div>
            <div className='shopping-list__btns-block'>
              <div className='shopping-list__btn-add icon-minus'></div>
              <div className='shopping-list__item-count'>2</div>
              <div className='shopping-list__btn-minus icon-plus'></div>
            </div>
            <div className='shopping-list__item-price icon-rouble'>770</div>
            <div className='shopping-list__item-delete icon-cancel'></div>
          </div>
          <div className='shopping-list__item'>
            <div className='shopping-list__item-descr'>
              <div className='shopping-list__item-img-wrap'>
                <img
                  className='shopping-list__item-img'
                  src={pizzaImg}
                  alt='pizza'
                />
              </div>
              <div className='shopping-list__item-info'>
                <h3 className='shopping-list__item-name'>Сырный цыпленок</h3>
                <span className='shopping-list__item-base'>тонкое тесто, </span>
                <span className='shopping-list__item-size'>26 см.</span>
              </div>
            </div>
            <div className='shopping-list__btns-block'>
              <div className='shopping-list__btn-add icon-minus'></div>
              <div className='shopping-list__item-count'>2</div>
              <div className='shopping-list__btn-minus icon-plus'></div>
            </div>
            <div className='shopping-list__item-price icon-rouble'>770</div>
            <div className='shopping-list__item-delete icon-cancel'></div>
          </div>
          <div className='shopping-list__item'>
            <div className='shopping-list__item-descr'>
              <div className='shopping-list__item-img-wrap'>
                <img
                  className='shopping-list__item-img'
                  src={pizzaImg}
                  alt='pizza'
                />
              </div>
              <div className='shopping-list__item-info'>
                <h3 className='shopping-list__item-name'>Сырный цыпленок</h3>
                <span className='shopping-list__item-base'>тонкое тесто, </span>
                <span className='shopping-list__item-size'>26 см.</span>
              </div>
            </div>
            <div className='shopping-list__btns-block'>
              <div className='shopping-list__btn-add icon-minus'></div>
              <div className='shopping-list__item-count'>2</div>
              <div className='shopping-list__btn-minus icon-plus'></div>
            </div>
            <div className='shopping-list__item-price icon-rouble'>770</div>
            <div className='shopping-list__item-delete icon-cancel'></div>
          </div>
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
