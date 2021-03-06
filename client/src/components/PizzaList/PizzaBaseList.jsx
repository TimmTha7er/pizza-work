import React from 'react';
import cln from 'classnames';

const PizzaBaseList = ({ bases, initBase = {}, onBaseClick, pizzaId }) => {
  const activeBase = initBase.activeBase;

  const onBase = (base, pizzaId, index) => () => {
    if (base.available) {
      onBaseClick(pizzaId, index);
    }
  };

  const baseList = bases.map((base, index) => {
    return (
      <span
        key={index}
        onClick={onBase(base, pizzaId, index)}
        className={cln('pizza__base', {
          'pizza__base_disable': !base.available,
          'pizza__base_active': activeBase === index,
        })}
      >
        {base.name}
      </span>
    );
  });

  return <div className='pizza__base-list'>{baseList}</div>;
};

export default React.memo(PizzaBaseList);
