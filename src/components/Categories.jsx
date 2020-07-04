import React from 'react';

const Categories = () => {
  return (
    <div className='categories'>
      <ul className='categories__list'>
        <li className='categories__item categories__item_active'>Все</li>
        <li className='categories__item'>Мясные</li>
        <li className='categories__item'>Вегетарианская</li>
        <li className='categories__item'>Гриль</li>
        <li className='categories__item'>Острые</li>
      </ul>
    </div>
  );
};

export default Categories;
