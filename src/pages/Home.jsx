import React from 'react';
import {Sort, PizzasList, Filters} from '../components';

const Home = () => {
  return (
    <section className='content'>
      <div className='content__top-line'>
        <Filters />
        <Sort />
      </div>
      <div className='content__body'>
        <h2 className='content__title'>Все пиццы</h2>
        <PizzasList />
      </div>
    </section>
  );
};

export default Home;
