import React, { useState } from 'react';
import cln from 'classnames';

const findActiveElement = (elements) => {
  return elements.findIndex((el) => {
    return el.available === true;
  });
};

const BaseList = ({ bases, handleBaseClick }) => {
  const [activeBase, setActiveBase] = useState(findActiveElement(bases));

  const onBaseClick = (index, base) => () => {
    if (base.available) {
      setActiveBase(index);
      handleBaseClick(index);
    }
  };

  const baseList = bases.map((base, index) => {
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
  });

  return (
   <div className='pizza__base-list'>
     {baseList}
   </div>
  );
};

export default BaseList;
