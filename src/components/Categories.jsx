import React, { useState } from 'react';
import cln from 'classnames';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'];

const Categories = ({ handleFilterPizza }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onItemClick = (index) => () => {
    if (activeItem !== index) {
      setActiveItem(index);

      handleFilterPizza(index);
    }
  };

  const categoriesList = categories.map((name, index) => {
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
  });

  return (
    <div className='categories'>
      <ul className='categories__list'>{categoriesList}</ul>
    </div>
  );
};

export default Categories;
