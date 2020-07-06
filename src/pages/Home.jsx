import React, { useContext } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';

import { pizzaContext } from '../components/pizza-service-context';

const Home = () => {
  const [pizzas] = useContext(pizzaContext);
  // console.log(pizzas)

  return (
    <section className='content'>
      <div className='content__top-line'>
        <Categories />
        <Sort />
      </div>
      <div className='content__body'>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__pizza-list'>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} {...pizza} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
