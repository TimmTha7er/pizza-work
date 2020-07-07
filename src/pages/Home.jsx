import React, { useContext } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';

import { pizzaContext } from '../components/pizza-service-context';

const Home = ({ pizzasList }) => {
  const [pizzas] = useContext(pizzaContext);
  // const pizzasList = useContext(pizzaContext)[2];
  console.log(pizzasList);

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
            const idx = pizzasList.findIndex((el) => el.id === pizza.id);
            const element = pizzasList[idx];
            const count = element ? element.count : 0; 

            return <Pizza key={pizza.id}  {...pizza}  count={count} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
