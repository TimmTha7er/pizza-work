import React, { useState } from 'react';
import cln from 'classnames';

import { connect } from 'react-redux';
import { pizzasFilter } from '../../redux/actions';

// const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'];

const Filters = ({ items, onFilterClick }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onItemClick = (index) => () => {
    if (activeItem !== index) {
      setActiveItem(index);
      onFilterClick(index);
    }
  };

  const categoriesList = items.map((name, index) => {
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

const mapStateToProps = ({ filters: { filterCategories } }) => {
  return {
    items: filterCategories,
  };
};

const mapDistatchToProps = {
  onFilterClick: pizzasFilter,
};

export default connect(mapStateToProps, mapDistatchToProps)(Filters);
