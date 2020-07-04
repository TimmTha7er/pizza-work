import React, { useState } from 'react';
import pizzaImg from '../img/content/cheese-pizza.png';

const CartItem = ({pizza}) => {
  // const pizza = {
  //   name: 'Чизбургер цыпленок',
  //   base: 'тонкое',
  //   size: '26',
  //   price: 395,
  //   count: 2,
  // };

  const [count, setCount] = useState(pizza.count);

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

  if (count > 0) {
    return (
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
            <h3 className='shopping-list__item-name'>{pizza.name}</h3>
            <span className='shopping-list__item-base'>
              {pizza.base} тесто,{' '}
            </span>
            <span className='shopping-list__item-size'>{pizza.size} см.</span>
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
          {pizza.price * count}
        </div>
        <div
          onClick={onDeleteBtnClick}
          className='shopping-list__item-delete icon-cancel'
        ></div>
      </div>
    );
  } else {
    return null;
  }
};

export default CartItem;
