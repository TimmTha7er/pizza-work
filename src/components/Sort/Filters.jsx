import React, { useState } from 'react';
import cln from 'classnames';

import { useSelector } from 'react-redux';
import { pizzasFilter } from '../../redux/actions';
import { useActions } from '../Hooks/useActions';

const Filters = () => {
  const { items, filter, pizzas } = useSelector(
    ({ filters: { filter }, data: { filterCategories, pizzas } }) => {
      return {
        items: filterCategories,
        filter,
        pizzas,
      };
    }
  );

  const { onFilterClick } = useActions({
    onFilterClick: pizzasFilter,
  });

  const [activeItem, setActiveItem] = useState(filter);

  const onItemClick = (index) => () => {
    if (activeItem !== index) {
      setActiveItem(index);
      onFilterClick(index, pizzas);
    }
  };

  const categoriesList = items.map(({ id, name }, index) => {
    return (
      <li
        key={id}
        onClick={onItemClick(index)}
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

export default Filters;
