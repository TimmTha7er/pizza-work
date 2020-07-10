import React, { useState, useRef, useEffect } from 'react';
import cln from 'classnames';

import { connect } from 'react-redux';
import { pizzasSort } from '../actions';

// const categories = ['популярности', 'цене', 'алфавиту'];

const Sort = ({ items, onSortPizza }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeLabel = items[activeItem];

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectedCategoryClick = () => {
    setVisiblePopup((prev) => !prev);
  };

  const onPopupItemClick = (index) => () => {
    setActiveItem(index);
    setVisiblePopup(false);

    onSortPizza(items[index]);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

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
        {activeLabel}
      </span>

      {visiblePopup && (
        <div className='sort-popup sort__sort-popup'>
          <ul className='sort-popup__list'>
            {items.map((name, index) => {
              return (
                <li
                  key={index}
                  onClick={onPopupItemClick(index)}
                  className={cln('sort-popup__item', {
                    'sort-popup__item_active': activeItem === index,
                  })}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ sortCategories }) => {
  return {
    items: sortCategories,
  };
};

const mapDispatchToProps = {
  onSortPizza: pizzasSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
