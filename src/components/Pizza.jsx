import React from 'react';
import pizzaImg from '../img/content/cheeseburger-pizza.png';

const Pizza = () => {
  return (
    <div className='pizza content__pizza'>
      <div className='pizza__img-wrap'>
        <img className='pizza__img' src={pizzaImg} alt='pizza' />
      </div>

      <div className='pizza__name'>Чизбургер-пицца</div>

      <div className='pizza__options'>
        <div className='pizza__base-list'>
          <span className='pizza__base pizza__base_active'>тонкое</span>
          <span className='pizza__base pizza__base_disable'>традиционное</span>
        </div>
        <div className='pizza__size-list'>
          <span className='pizza__size pizza__size_active'>26 см.</span>
          <span className='pizza__size'>30 см.</span>
          <span className='pizza__size'>40 см.</span>
        </div>
      </div>
			
      <div className='pizza__bot-line'>
        <div className='pizza__price icon-rouble'>395</div>
        <div className='pizza__btn icon-plus'>
          <span className='pizza__btn-text'>Добавить</span>
          <div className='pizza__count-wrap'>
            <span className='pizza__count'>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
