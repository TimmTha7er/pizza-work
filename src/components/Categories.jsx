import React, { useState } from 'react';
import cln from 'classnames';

const Categories = () => {
  const [activeItem, setActiveItem] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'];

  const onItemClick = (index) => () => {
    setActiveItem(index);
  };

  return (
    <div className='categories'>
      <ul className='categories__list'>
        {categories.map((name, index) => {
          return (
            <li
              onClick={onItemClick(index)}
              key={`${index}_${name}`}
              className={cln('categories__item', {
                categories__item_active: index === activeItem,
              })}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
