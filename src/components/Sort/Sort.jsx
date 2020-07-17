import React, { useState, useRef, useEffect } from 'react';
import cln from 'classnames';

import { connect } from 'react-redux';
import { pizzasSort } from '../../redux/actions';

const Sort = ({ items, sortBy, onSortPizza }) => {
  const [activeItem, setActiveItem] = useState(sortBy);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeLabel = items[activeItem] || '';
  const sortRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectedCategoryClick = () => {
    setVisiblePopup((prev) => !prev);
  };

  const onPopupItemClick = (index) => () => {
    setActiveItem(index);
    setVisiblePopup(false);

    onSortPizza(items[index].name);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const categoriesList = items.map(({ id, name }, index) => {
    return (
      <li
        key={id}
        onClick={onPopupItemClick(index)}
        className={cln('sort-popup__item', {
          'sort-popup__item_active': activeItem === index,
        })}
      >
        {name}
      </li>
    );
  });

  return (
    <div
      ref={sortRef}
      className={cln('sort', {
        'icon-up-dir': visiblePopup,
        'icon-down-dir': !visiblePopup,
      })}
    >
      <span className='sort__label'>Сортировка по:&nbsp;</span>
      <span onClick={onSelectedCategoryClick} className='sort__selected-item'>
        {activeLabel.name}
      </span>

      {visiblePopup && (
        <div className='sort-popup sort__sort-popup'>
          <ul className='sort-popup__list'>{categoriesList}</ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ filters: { sortBy }, data: { sortCategories } }) => {
  const sortByIndex = sortCategories.findIndex((el) => el.name === sortBy);

  return {
    items: sortCategories,
    sortBy: sortByIndex,
  };
};

const mapDistatchToProps = {
  onSortPizza: pizzasSort,
};

export default connect(mapStateToProps, mapDistatchToProps)(Sort);
