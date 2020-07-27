import React, { useState, useRef, useEffect } from 'react';
import cln from 'classnames';

import { connect } from 'react-redux';
import { setSortCategory, setSortOrder } from '../../redux/actions';

const Sort = ({ items, sortBy, order, onSortPizza, onSortLabel }) => {
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

  const toggleOrder = () => {
    order === 'asc' ? onSortLabel('descr') : onSortLabel('asc');
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
        'icon-up-dir': order === 'asc',
        'icon-down-dir': order === 'descr',
      })}
    >
      <span onClick={toggleOrder} className='sort__label'>
        Сортировка по:&nbsp;
      </span>
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

const mapStateToProps = ({ categories: { sortBy, sortCategories, order } }) => {
  const sortByIndex = sortCategories.findIndex((el) => el.name === sortBy);

  return {
    items: sortCategories,
    sortBy: sortByIndex,
    order,
  };
};

const mapDistatchToProps = {
  onSortPizza: setSortCategory,
  onSortLabel: setSortOrder,
};

export default connect(mapStateToProps, mapDistatchToProps)(Sort);
