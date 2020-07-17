import React from 'react';
import { useSelector } from 'react-redux';
import { Sort, PizzasList, Filters } from '../components';

const Home = () => {
  const { title } = useSelector(
    ({ filters: { filter }, data: { filterCategories } }) => {
      const title = filterCategories[filter].name;

      return {
        title,
      };
    }
  );

  return (
    <section className='content'>
      <div className='content__top-line'>
        <Filters />
        <Sort />
      </div>
      <div className='content__body'>
        <h2 className='content__title'>{title} пиццы</h2>
        <PizzasList />
      </div>
    </section>
  );
};

export default Home;
