import React from 'react';
import Categories from './Categories';
import Sort from './Sort';
import Pizza from './Pizza';

const Content = () => {
  return (
    <section className='content'>
      <div className='content__top-line'>
        <Categories />
        <Sort />
      </div>
      <div className='content__body'>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__pizza-list'>
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </div>
      </div>
    </section>
  );
};

export default Content;
