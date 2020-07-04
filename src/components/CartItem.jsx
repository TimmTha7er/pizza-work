import React from 'react';
import pizzaImg from '../img/content/cheese-pizza.png';

const CartItem = () => {
  return (
    <div className='shopping-list__item'>
      <div className='shopping-list__item-descr'>
        <div className='shopping-list__item-img-wrap'>
          <img className='shopping-list__item-img' src={pizzaImg} alt='pizza' />
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
  );
};

export default CartItem;
