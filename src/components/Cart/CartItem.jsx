import React from 'react';

const CartItem = ({ cartPizza, onIncrease, onDecrease, onDelete }) => {
  const { cartId, imageUrl, name, base, size, price, count } = cartPizza;

  const handleDecrease = () => {
    onDecrease(cartId);
  };
  const handleIncrease = () => {
    onIncrease(cartId);
  };
  const handleDelete = () => {
    onDelete(cartId);
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
          onClick={handleDecrease}
          className='shopping-list__btn-minus icon-minus'
        ></div>
        <div className='shopping-list__item-count'>{count}</div>
        <div
          onClick={handleIncrease}
          className='shopping-list__btn-add icon-plus'
        ></div>
      </div>
      <div className='shopping-list__item-price icon-rouble'>
        {price * count}
      </div>
      <div
        onClick={handleDelete}
        className='shopping-list__item-delete icon-cancel'
      ></div>
    </div>
  );
};

export default React.memo(CartItem);
