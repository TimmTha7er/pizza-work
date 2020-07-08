import React from 'react';

const CartItem = ({
  cartId,
  imageUrl,
  name,
  base,
  size,
  price,
  count,
  handleDeletePizza,
  handlePlusPizza,
  handleMinusPizza,
}) => {
  const onAddBtnClick = () => {
    handlePlusPizza(cartId);
  };

  const onMinusBtnClick = () => {
    if (count > 1) {
      handleMinusPizza(cartId);
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
        onClick={() => handleDeletePizza(cartId)}
        className='shopping-list__item-delete icon-cancel'
      ></div>
    </div>
  );
};

export default CartItem;
