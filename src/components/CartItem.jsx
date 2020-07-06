import React, { useState } from 'react';

const CartItem = ({imageUrl, name, base, size, price}) => {
  const [count, setCount] = useState(0);

  const onAddBtnClick = () => {
    setCount((prev) => prev + 1);
  };

  const onMinusBtnClick = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const onDeleteBtnClick = () => {
    setCount(0);
  };

  console.log(imageUrl, name, base, size, price, count)

  // if (count > 0) {
    return (
      <div className='shopping-list__item'>
        <div className='shopping-list__item-descr'>
          <div className='shopping-list__item-img-wrap'>
            <img
              className='shopping-list__item-img'
              src={imageUrl}
              alt='pizza'
            />
          </div>
          <div className='shopping-list__item-info'>
            <h3 className='shopping-list__item-name'>{name}</h3>
            <span className='shopping-list__item-base'>
              {base} тесто,{' '}
            </span>
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
          onClick={onDeleteBtnClick}
          className='shopping-list__item-delete icon-cancel'
        ></div>
      </div>
    );
  // } else {
  //   return null;
  // }
};

export default CartItem;
