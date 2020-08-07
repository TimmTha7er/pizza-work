import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div className='payment'>
      <h2 className='payment__title'>Оплата</h2>
      <form className='payment__form'>
        <input
          type='text'
          className='payment__input payment__input_number input'
          placeholder='Нормер карты'
        />

        <div className='payment__row'>
          <input
            type='text'
            className='payment__input payment__input_validity input'
            placeholder='Срок действия'
          />
          <input
            type='text'
            className='payment__input payment__input_cvc input'
            placeholder='CVC'
          />
        </div>

        <div className='payment__btns-block'>
          <Link to='/cart' className='button button_grey payment__btn-back'>
            <span className='button_hidden'>назад </span>в корзину
          </Link>
          <button className='button payment__btn-checkout'>
            Оформить
            <span className='button_hidden'>заказ</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
