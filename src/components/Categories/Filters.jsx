import React, { useState } from 'react';
import cln from 'classnames';

import { connect } from 'react-redux';
import { pizzasFilter } from '../../redux/actions';

const Filters = ({ items, filter, onFilterClick, pizzas }) => {
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

// export default React.memo(Filters);
const mapStateToProps = ({
  categories: { filter, filterCategories },
  pizzasList: { pizzas },
}) => {
  return {
    items: filterCategories,
    filter,
    pizzas,
  };
};

const mapDistatchToProps = {
  onFilterClick: pizzasFilter,
};

export default connect(mapStateToProps, mapDistatchToProps)(Filters);
