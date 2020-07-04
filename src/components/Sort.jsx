import React, { useState } from 'react';
import cln from 'classnames';

const Sort = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [visiblePopup, setVisiblePopup] = useState(false);
	const categories = ['популярности', 'цене', 'алфавиту'];
	
	const onSelectedCategoryClick = () => {
		setVisiblePopup((prev) => !prev)
	}

	const onPopupItemClick = (index) => () => {
    setActiveItem(index);
  };

  return (
    <div className='sort icon-up-dir'>
      <span className='sort__label'>Сортировка по:&nbsp;</span>
      <span
        onClick={onSelectedCategoryClick}
        className='sort__selected-item'
      >
        {categories[activeItem]}
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
