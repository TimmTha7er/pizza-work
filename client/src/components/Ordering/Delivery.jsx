import React from 'react';

const Delivery = () => {
  return (
    <div className='delivery ordering__delivery'>
      <form className='delivery__form'>
        <label className='delivery__label'>Имя</label>
        <input type='text' className='delivery__input input' />
        <label className='delivery__label'>Номер телефона</label>
        <input type='text' className='delivery__input input' />
        <label className='delivery__label'>Адрес доставки</label>
        <textarea className='delivery__textarea input'></textarea>
      </form>
    </div>
  );
};

export default Delivery;
