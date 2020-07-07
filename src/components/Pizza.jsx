import React, { useState, useContext } from 'react';
import cln from 'classnames';

import { pizzaContext } from '../components/pizza-service-context';

const findActiveElement = (elements) => {
  return elements.findIndex((el) => {
    return el.available === true;
  });
};

const Pizza = ({ id, imageUrl, name, bases, sizes, price, count }) => {
  const [activeBase, setActiveBase] = useState(findActiveElement(bases));
  const [activeSize, setActiveSize] = useState(findActiveElement(sizes));
  // const [count, setCount] = useState(0);

  const handleOnAddPizza = useContext(pizzaContext)[1];
  // const pizzasCount = useContext(pizzaContext)[2];

  const onBtnClick = () => {
    handleOnAddPizza({
      id: id,
      imageUrl: imageUrl,
      name: name,
      base: bases[activeBase].name,
      size: sizes[activeSize].name,
      price: price,
      count: 1,
    });
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
        <img className='pizza__img' src={imageUrl} alt='pizza' />
      </div>

      <div className='pizza__name'>{name}</div>

      <div className='pizza__options'>
        <div className='pizza__base-list'>
          {bases.map((base, index) => {
            return (
              <span
                key={index}
                onClick={onBaseClick(index, base)}
                className={cln('pizza__base', {
                  pizza__base_disable: !base.available,
                  pizza__base_active: activeBase === index && base.available,
                })}
              >
                {base.name}
              </span>
            );
          })}
        </div>
        <div className='pizza__size-list'>
          {sizes.map((size, index) => {
            return (
              <span
                key={index}
                onClick={onSizeClick(index, size)}
                className={cln('pizza__size', {
                  pizza__size_disable: !size.available,
                  pizza__size_active: activeSize === index && size.available,
                })}
              >
                {size.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className='pizza__bot-line'>
        <div className='pizza__price icon-rouble'>{price}</div>
        <div onClick={() => onBtnClick()} className='pizza__btn icon-plus'>
          <span className='pizza__btn-text'>Добавить</span>
          {count > 0 ? (
            <div className='pizza__count-wrap'>
              <span className='pizza__count'>{count}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Pizza;
