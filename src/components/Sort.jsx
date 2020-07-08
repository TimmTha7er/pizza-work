import React, { useState, useRef, useEffect } from 'react';
import cln from 'classnames';

const categories = ['популярности', 'цене', 'алфавиту'];

const Sort = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeLabel = categories[activeItem];

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectedCategoryClick = () => {
    setVisiblePopup((prev) => !prev);
  };

  const onPopupItemClick = (index) => () => {
    setActiveItem(index);
    setVisiblePopup(false);
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
            {categories.map((name, index) => {
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

export default Sort;
