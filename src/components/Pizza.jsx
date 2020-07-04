import React, { useState } from 'react';
import cln from 'classnames';
import pizzaImg from '../img/content/cheeseburger-pizza.png';

const Pizza = () => {
  const [activeBase, setActiveBase] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const pizza = {
    name: 'Чизбургер-пицца',
    bases: [
      { name: 'тонкое', available: true },
      { name: 'традиционное', available: false },
    ],
    sizes: [
      { name: '26', available: true },
      { name: '30', available: false },
      { name: '40', available: true },
    ],
    price: 395,
  };

  const onBaseClick = (index, base) => () => {
    if (base.available) {
      setActiveBase(index);
    }
  };

  const onSizeClick = (index, size) => () => {
    if (size.available) {
      setActiveSize(index);
    }
  };

  return (
    <div className='pizza content__pizza'>
      <div className='pizza__img-wrap'>
        <img className='pizza__img' src={pizzaImg} alt='pizza' />
      </div>

      <div className='pizza__name'>{pizza.name}</div>

      <div className='pizza__options'>
        <div className='pizza__base-list'>
          {pizza.bases.map((base, index) => {
            return (
              <span
                key={index}
                onClick={onBaseClick(index, base)}
                className={cln('pizza__base', {
                  'pizza__base_disable': !base.available,
                  'pizza__base_active': activeBase === index && base.available,
                })}
              >
                {base.name}
              </span>
            );
          })}
        </div>
        <div className='pizza__size-list'>
          {pizza.sizes.map((size, index) => {
            return (
              <span
                key={index}
                onClick={onSizeClick(index, size)}
                className={cln('pizza__size', {
                  'pizza__size_disable': !size.available,
                  'pizza__size_active': activeSize === index,
                })}
              >
                {size.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className='pizza__bot-line'>
        <div className='pizza__price icon-rouble'>{pizza.price}</div>
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
