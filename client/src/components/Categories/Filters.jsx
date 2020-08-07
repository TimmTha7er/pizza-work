import React, { useState } from 'react';
import cln from 'classnames';

import { connect } from 'react-redux';
import { setFilterCategory } from '../../redux/actions';

const Filters = ({ items, filter, onFilterClick }) => {
  const [activeItem, setActiveItem] = useState(filter);

  const onItemClick = (index) => () => {
    if (activeItem !== index) {
      setActiveItem(index);
      onFilterClick(index);
    }
  };

  const categoriesList = items.map(({ id, name }, index) => {
    return (
      <li
        key={id}
        onClick={onItemClick(index)}
        className={cln('categories__item', {
          'categories__item_active': index === activeItem,
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

const mapStateToProps = ({ categories: { filter, filterCategories } }) => {
  return {
    items: filterCategories,
    filter,
  };
};

const mapDistatchToProps = {
  onFilterClick: setFilterCategory,
};

export default connect(mapStateToProps, mapDistatchToProps)(Filters);
