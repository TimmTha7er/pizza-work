import React, { useState, useContext } from 'react';
// import { pizzaContext } from '../components/pizza-service-context';

const CartItem = ({
  id,
  imageUrl,
  name,
  base,
  size,
  price,
  count,
  onDeletePizza,
  onAddPizza,
  pizzaId,
  onMinusPizza,
}) => {
  // const handleOnAddPizza = useContext(pizzaContext)[1];

  const onAddBtnClick = () => {
    onAddPizza(pizzaId);
  };

  const onMinusBtnClick = () => {
    if (count > 1) {
      onMinusPizza(pizzaId);
    }
  };

  return (
    <div className='shopping-list__item'>
      <div className='shopping-list__item-descr'>
        <div className='shopping-list__item-img-wrap'>
          <img className='shopping-list__item-img' src={imageUrl} alt='pizza' />
        </div>
        <div className='shopping-list__item-info'>
          <h3 className='shopping-list__item-name'>{name}</h3>
          <span className='shopping-list__item-base'>{base} тесто, </span>
          <span className='shopping-list__item-size'>{size} см.</span>
        </div>
      </div>
      <div className='shopping-list__btns-block'>
        <div
          onClick={onMinusBtnClick}
          className='shopping-list__btn-minus icon-minus'
        ></div>
        <div className='shopping-list__item-count'>{count}</div>
        <div
          onClick={onAddBtnClick}
          className='shopping-list__btn-add icon-plus'
        ></div>
      </div>
      <div className='shopping-list__item-price icon-rouble'>
        {price * count}
      </div>
      <div
        onClick={() => onDeletePizza(pizzaId)}
        className='shopping-list__item-delete icon-cancel'
      ></div>
    </div>
  );
};

export default CartItem;
