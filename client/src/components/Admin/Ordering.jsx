import React from 'react';

const Ordering = () => {
  return (
    <div class='ordering page'>
      <div class='container ordering__container'>
        <div class='ordering__left-col'>
          <h2 class='ordering__title'>Оформление заказа</h2>
          <div class='delivery ordering__delivery'>
            <form class='delivery__form'>
              <label class='delivery__label'>Имя</label>
              <input type='text' class='delivery__input input' />
              <label class='delivery__label'>Номер телефона</label>
              <input type='text' class='delivery__input input' />
              <label class='delivery__label'>Адрес доставки</label>
              <textarea class='delivery__textarea input'></textarea>
            </form>
          </div>
          <div class='payment'>
            <h2 class='payment__title'>Оплата</h2>
            <form class='payment__form'>
              <input
                type='text'
                class='payment__input payment__input_number input'
                placeholder='Нормер карты'
              />

              <div class='payment__row'>
                <input
                  type='text'
                  class='payment__input payment__input_validity input'
                  placeholder='Срок действия'
                />
                <input
                  type='text'
                  class='payment__input payment__input_cvc input'
                  placeholder='CVC'
                />
              </div>

              <div class='payment__btns-block'>
                <button class='button button_grey payment__btn-back'>
                  <span class='button_hidden'>назад</span>в корзину
                </button>
                <button class='button payment__btn-checkout'>
                  Оформить
                  <span class='button_hidden'>заказ</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class='ordering__right-col'>
          <div class='checkout'>
            <h3 class='checkout__title'>Состав заказа</h3>
            <div class='checkout__list'>
              <div class='checkout__item'>
                <div class='checkout__item-descr'>
                  <h4 class='checkout__item-name'>Чизбургер-пицца</h4>
                  <span class='checkout__item-size'>30см, </span>
                  <span class='checkout__item-base'>традиционное тесто</span>
                </div>
                <div class='checkout__item-price icon-rouble'>
                  <span class='checkout__item-count'>2 x </span>
                  <span class='checkout__item-cost'>395</span>
                </div>
              </div>
              <div class='checkout__item'>
                <div class='checkout__item-descr'>
                  <h4 class='checkout__item-name'>Чизбургер-пицца</h4>
                  <span class='checkout__item-size'>30см, </span>
                  <span class='checkout__item-base'>традиционное тесто</span>
                </div>
                <div class='checkout__item-price icon-rouble'>
                  <span class='checkout__item-count'>2 x </span>
                  <span class='checkout__item-cost'>395</span>
                </div>
              </div>
              <div class='checkout__item'>
                <div class='checkout__item-descr'>
                  <h4 class='checkout__item-name'>Чизбургер-пицца</h4>
                  <span class='checkout__item-size'>30см, </span>
                  <span class='checkout__item-base'>традиционное тесто</span>
                </div>
                <div class='checkout__item-price icon-rouble'>
                  <span class='checkout__item-count'> </span>
                  <span class='checkout__item-cost'>395</span>
                </div>
              </div>
              <div class='checkout__item'>
                <div class='checkout__item-descr'>
                  <h4 class='checkout__item-name'>Чизбургер-пицца</h4>
                  <span class='checkout__item-size'>30см, </span>
                  <span class='checkout__item-base'>традиционное тесто</span>
                </div>
                <div class='checkout__item-price icon-rouble'>
                  <span class='checkout__item-count'> </span>
                  <span class='checkout__item-cost'>395</span>
                </div>
              </div>
            </div>
            <div class='checkout__total-price'>
              <div class='checkout__total-price-text'>Сумма к оплате</div>
              <div class='checkout__total-amount icon-rouble'>1580</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
