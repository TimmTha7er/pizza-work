import React from 'react';
import cln from 'classnames';

const PizzaSizeList = ({ sizes, initSize = {}, onSizeClick, pizzaId }) => {
  const activeSize = initSize.activeSize;

  const onSize = (size, pizzaId, index) => () => {
    if (size.available) {
      onSizeClick(pizzaId, index);
    }
  };

  const sizeList = sizes.map((size, index) => {
    return (
      <span
        key={index}
        onClick={onSize(size, pizzaId, index)}
        className={cln('pizza__size', {
          'pizza__size_disable': !size.available,
          'pizza__size_active': activeSize === index,
        })}
      >
        {size.name}
      </span>
    );
  });

  return <div className='pizza__size-list'>{sizeList}</div>;
};

// export default React.memo(PizzaSizeList);
export default PizzaSizeList;
