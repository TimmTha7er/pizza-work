import React from 'react';
import { Categories, Sort, PizzasList } from '../components';

const Home = () => {
  return (
    <section className='content'>
      <div className='content__top-line'>
        <Categories />
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
