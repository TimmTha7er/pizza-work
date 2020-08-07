import React from 'react';
import { PizzaBaseList, PizzaSizeList, PizzaButton } from '../../components';

const Pizza = ({
  pizza,
  pizzaAddedToCart,
  activeBase,
  activeSize,
  count,
  onBaseClick,
  onSizeClick,
}) => {
  const { id, imageUrl, name, bases, sizes, price } = pizza;

  const handleAddedToCart = () => {
    pizzaAddedToCart(pizza, activeBase, activeSize);
  };

  return (
    <div className='pizza content__pizza'>
      <div className='pizza__img-wrap'>
        <img className='pizza__img' src={imageUrl} alt='pizza' />
      </div>
      <h3 className='pizza__name'>{name}</h3>
      <div className='pizza__options'>
        <PizzaBaseList
          bases={bases}
          initBase={activeBase}
          pizzaId={id}
          onBaseClick={onBaseClick}
        />
        <PizzaSizeList
          sizes={sizes}
          initSize={activeSize}
          pizzaId={id}
          onSizeClick={onSizeClick}
        />
      </div>
      <div className='pizza__bot-line'>
        <div className='pizza__price icon-rouble'>{price}</div>
        <PizzaButton onBtnClick={handleAddedToCart} count={count} />
      </div>
    </div>
  );
};

export default React.memo(Pizza);
