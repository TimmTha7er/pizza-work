import React, { useState } from 'react';
import { BaseList, SizeList, PizzaButton } from './';

const Pizza = ({
  id,
  imageUrl,
  name,
  bases,
  sizes,
  price,
  count,
  handlePlusPizza,
}) => {
  const [pizza, setPizza] = useState({
    pizzaId: id,
  });

  const onBtnClick = () => {
    handlePlusPizza(pizza);
  };

  const handleBaseClick = (index) => {
    setPizza({
      ...pizza,
      base: bases[index].name,
    });
  };

  const handleSizeClick = (index) => {
    setPizza({
      ...pizza,
      size: sizes[index].name,
    });
  };

  return (
    <div className='pizza content__pizza'>
      <div className='pizza__img-wrap'>
        <img className='pizza__img' src={imageUrl} alt='pizza' />
      </div>
      <div className='pizza__name'>{name}</div>
      <div className='pizza__options'>
        <BaseList bases={bases} handleBaseClick={handleBaseClick} />
        <SizeList sizes={sizes} handleSizeClick={handleSizeClick} />
      </div>
      <div className='pizza__bot-line'>
        <div className='pizza__price icon-rouble'>{price}</div>
        <PizzaButton onBtnClick={onBtnClick} count={count} />
      </div>
    </div>
  );
};

export default Pizza;
