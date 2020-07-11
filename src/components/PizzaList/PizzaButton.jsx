import React from 'react';

const PizzaButton = ({ onBtnClick, count }) => {
  return (
    <div onClick={onBtnClick} className='pizza__btn icon-plus'>
      <span className='pizza__btn-text'>Добавить</span>
      {/* {count > 0 ? (
        <div className='pizza__count-wrap'>
          <span className='pizza__count'>{count}</span>
        </div>
      ) : (
        ''
      )} */}
    </div>
  );
};

export default PizzaButton;
